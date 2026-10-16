<?php
/* Step 3 of the Kapital Bank flow: the bank sends the shopper back here as
 * payment-callback.php?ID=<orderId>&STATUS=<status>. STATUS can be temporary,
 * so the real result is always confirmed with GET /order/{id} before the order
 * is marked paid. The shopper then lands on checkout.html with the outcome. */
require __DIR__ . '/kapital/lib.php';

function back_to_checkout(array $params) {
  header('Location: checkout.html?' . http_build_query($params), true, 303);
  exit;
}

$id = (int)($_GET['ID'] ?? $_GET['id'] ?? 0);
$order = $id > 0 ? kapital_load_order($id) : null;
if (!$order) back_to_checkout(['payment' => 'failed']);

// Already settled by an earlier visit (refresh / back button).
if ($order['status'] === 'FullyPaid') {
  back_to_checkout(['payment' => 'success', 'order' => $order['ref']]);
}

try {
  [$http, $res] = kapital_request('GET', '/order/' . $id . '?tranDetailLevel=2');
} catch (Throwable $e) {
  error_log('[kapital] status check: ' . $e->getMessage());
  back_to_checkout(['payment' => 'pending', 'order' => $order['ref']]);
}

$bank = $res['order'] ?? [];
$status = (string)($bank['status'] ?? '');
$amountOk = isset($bank['amount'], $bank['currency'])
  && abs((float)$bank['amount'] - (float)$order['amount']) < 0.005
  && $bank['currency'] === $order['currency'];

$order['status'] = $status !== '' ? $status : $order['status'];
$order['bank_status_checked_at'] = date('c');
$order['bank_trans'] = $bank['trans'] ?? null;

if ($status === 'FullyPaid' && !$amountOk) {
  // Paid, but not what we asked for — never auto-confirm; flag for manual review.
  $order['status'] = 'AmountMismatch';
  error_log('[kapital] amount mismatch for order ' . $id . ': ' . json_encode($bank));
}
kapital_save_order($order);

if ($order['status'] === 'FullyPaid') {
  back_to_checkout(['payment' => 'success', 'order' => $order['ref']]);
}
if ($status === 'Authorized') {
  back_to_checkout(['payment' => 'pending', 'order' => $order['ref']]);
}
back_to_checkout(['payment' => 'failed', 'order' => $order['ref']]);
