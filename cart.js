// ===== CART CORE =====
const CART_KEY = 'chinova_cart';

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}
function setCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}
function clearCart(){ setCart([]); }

function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  if(!badge) return;
  const totalQty = getCart().reduce((s,i)=> s + (i.qty||0), 0);
  badge.textContent = totalQty>0 ? totalQty : '';
  badge.style.display = totalQty>0 ? 'inline-flex' : 'none';
}

// id+variant (rang/size) bo‘yicha bitta liniya sifatida birlashtiramiz
function addToCart({id, slug, title, price, color, size, image, qty=1}){
  const cart = getCart();
  const key = (id || slug || title) + '|' + (color||'') + '|' + (size||'');
  const i = cart.findIndex(it => it.key === key);
  if(i>=0){
    cart[i].qty = Math.min(99, (cart[i].qty||0) + qty);
  }else{
    cart.push({ key, id, slug, title, price, color, size, image, qty });
  }
  setCart(cart);
}

function removeFromCart(key){
  setCart(getCart().filter(it => it.key !== key));
}
function changeQty(key, delta){
  const cart = getCart().map(it=>{
    if(it.key!==key) return it;
    const q = Math.max(0, Math.min(99, (it.qty||0)+delta));
    return {...it, qty:q};
  }).filter(it=>it.qty>0);
  setCart(cart);
}

// start
document.addEventListener('DOMContentLoaded', updateCartBadge);
