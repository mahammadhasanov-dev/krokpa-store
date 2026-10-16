# KROKPA store

Multi-page T-shirt store for the Azerbaijani market, priced in manat (AZN).

- Plain HTML, CSS and JavaScript, no framework
- Azerbaijani and English translation on every page
- Product pages, slide-out bag, checkout, shipping, returns, privacy and terms pages
- Kapital Bank card payments in PHP:
  - `process-checkout.php` prices the cart on the server, creates the bank order and redirects to the bank's 3-D Secure page
  - `payment-callback.php` confirms the result with the bank and checks the amount before marking an order paid

The bank connection library (`kapital/lib.php`) and credentials are not included.

Built by Mahammad Hasanov · mahammadhasanov.com
