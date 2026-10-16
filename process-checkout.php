<?php
/* Step 1 of the Kapital Bank flow: price the cart on the server, create an
 * Order_SMS purchase order with the bank, and hand the browser the URL of the
 * bank's hosted payment page. Card details are entered on the bank's page only. */
require __DIR__ . '/kapital/lib.php';

header('Content-Type: application/json; charset=utf-8');

function fail(int $code, string $error) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $error]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'Method not allowed.');

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) fail(400, 'Invalid request.');

/* ---- customer ---- */
$c = is_array($in['customer'] ?? null) ? $in['customer'] : [];
$customer = [];
foreach (['email', 'fname', 'lname', 'addr', 'city', 'state', 'zip'] as $f) {
  $customer[$f] = trim(mb_substr((string)($c[$f] ?? ''), 0, 200));
  if ($customer[$f] === '') fail(422, 'Please fill in all required fields.');
}
if (!filter_var($customer['email'], FILTER_VALIDATE_EMAIL)) fail(422, 'Please enter a valid email address.');

/* ---- cart: prices come from the catalog, never from the browser ---- */
$catalog = kapital_catalog();
$items = [];
$subtotal = 0.0;
foreach ((array)($in['cart'] ?? []) as $line) {
  $id = (string)($line['id'] ?? '');
  $qty = (int)($line['qty'] ?? 0);
  if (!isset($catalog[$id]) || $qty < 1 || $qty > 99) continue;
  $price = $catalog[$id]['price'];
  $items[] = ['id' => $id, 'name' => $catalog[$id]['name'], 'qty' => $qty, 'price' => $price];
  $subtotal += $price * $qty;
}
if (!$items) fail(422, 'Your bag is empty.');

$cfg = kapital_config();
$shipping = $subtotal >= $cfg['free_shipping_from'] ? 0.0 : $cfg['shipping_fee'];
$total = round($subtotal + $shipping, 2);

$lang = in_array($in['lang'] ?? '', ['az', 'en', 'ru'], true) ? $in['lang'] : 'az';
$ref = 'KRK-' . date('ymd') . '-' . strtoupper(bin2hex(random_bytes(3)));

/* ---- create order at the bank ---- */
try {
  [$http, $res] = kapital_request('POST', '/order', [
    'order' => [
      'typeRid'        => 'Order_SMS',
      'amount'         => number_format($total, 2, '.', ''),
      'currency'       => $cfg['currency'],
      'language'       => $lang,
      'title'          => $cfg['order_title'],
      'description'    => $cfg['order_title'] . ' order ' . $ref,
      'hppRedirectUrl' => kapital_site_url() . '/payment-callback.php',
    ],
  ]);
} catch (Throwable $e) {
  error_log('[kapital] create order: ' . $e->getMessage());
  fail(502, 'Payment service is unavailable. Please try again in a moment.');
}

$o = $res['order'] ?? null;
if ($http >= 300 || !isset($o['id'], $o['hppUrl'], $o['password'])) {
  error_log('[kapital] create order rejected (HTTP ' . $http . '): ' . json_encode($res));
  fail(502, 'Payment could not be started. Please try again.');
}

kapital_save_order([
  'ref'            => $ref,
  'bank_order_id'  => (int)$o['id'],
  'bank_password'  => $o['password'],
  'mode'           => $cfg['mode'],
  'status'         => 'Pending',
  'amount'         => $total,
  'subtotal'       => round($subtotal, 2),
  'shipping'       => $shipping,
  'currency'       => $cfg['currency'],
  'items'          => $items,
  'customer'       => $customer,
  'created_at'     => date('c'),
]);

// Docs: redirect to {hppUrl}/flex?id=..&password=.. (hppUrl usually already ends in /flex).
$hpp = rtrim($o['hppUrl'], '/');
if (!str_ends_with($hpp, '/flex')) $hpp .= '/flex';
$redirect = $hpp . '?' . http_build_query(['id' => $o['id'], 'password' => $o['password']]);

echo json_encode(['ok' => true, 'redirectUrl' => $redirect, 'ref' => $ref]);
