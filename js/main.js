/* KROKPA — cart state + shared UI wiring */

const CART_KEY = 'krokpa_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if (line) line.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
  renderCartDrawer();
  openCart();
}

function removeFromCart(id) {
  saveCart(getCart().filter(l => l.id !== id));
  renderCartDrawer();
}

function setQty(id, qty) {
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if (!line) return;
  line.qty = Math.max(1, qty);
  saveCart(cart);
  renderCartDrawer();
}

function cartLines() {
  return getCart().map(l => ({ ...l, product: getProduct(l.id) })).filter(l => l.product);
}

function cartSubtotal() {
  return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}

function cartCount() {
  return getCart().reduce((n, l) => n + l.qty, 0);
}

function updateCartCount() {
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = cartCount(); });
}

function openCart() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartDrawer')?.classList.add('open');
}
function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
}

function renderCartDrawer() {
  const wrap = document.getElementById('drawerItems');
  const footWrap = document.getElementById('drawerFoot');
  if (!wrap) return;
  const lines = cartLines();

  if (lines.length === 0) {
    wrap.innerHTML = `<div class="drawer__empty">${t('cart.empty')}<br><a href="index.html" style="color:var(--acid);text-decoration:underline;">${t('cart.shop_drop_arrow')}</a></div>`;
    if (footWrap) footWrap.style.display = 'none';
    return;
  }
  if (footWrap) footWrap.style.display = 'block';

  wrap.innerHTML = lines.map(l => `
    <div class="line-item">
      <div class="line-item__media">${teeSVG(l.product)}</div>
      <div class="line-item__body">
        <div class="line-item__name">${l.product.name}</div>
        <div class="line-item__meta">₼${l.product.price.toFixed(2)} ${t('cart.each')}</div>
        <div class="qty">
          <button onclick="setQty('${l.id}', ${l.qty - 1})">&minus;</button>
          <span>${l.qty}</span>
          <button onclick="setQty('${l.id}', ${l.qty + 1})">+</button>
          <button class="remove-btn" onclick="removeFromCart('${l.id}')">${t('cart.remove')}</button>
        </div>
      </div>
      <div class="line-item__price">₼${(l.product.price * l.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const subEl = document.getElementById('drawerSubtotal');
  if (subEl) subEl.textContent = `₼${cartSubtotal().toFixed(2)}`;
}

function initCartUI() {
  updateCartCount();
  renderCartDrawer();
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

document.addEventListener('DOMContentLoaded', initCartUI);
document.addEventListener('krokpa:langchange', renderCartDrawer);
