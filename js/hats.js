/* KROKPA — T-shirt catalog + product artwork */

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

const PRODUCTS = [
  {id:'void-tee',name:'VOID TEE',price:49.90,badge:'NEW',tagline:'Heavyweight black. Nothing extra.',desc:'A heavyweight oversized tee with the KROKPA mark kept deliberately quiet. Dense cotton, dropped shoulders and a clean streetwear silhouette.',facts:{fit:'Oversized, unisex',material:'240gsm heavyweight cotton',origin:'Made to order'},colors:{shirt:'#101012',print:'#d7ff3a',accent:'#f3f1ea'}},
  {id:'acid-mark-tee',name:'ACID MARK TEE',price:54.90,badge:'NEW',tagline:'The mark, turned all the way up.',desc:'Washed-black heavyweight cotton with the signature three-line mark across the chest. Built to look better after every wash.',facts:{fit:'Oversized, unisex',material:'240gsm washed cotton',origin:'Made to order'},colors:{shirt:'#242425',print:'#d7ff3a',accent:'#101012'}},
  {id:'chrome-tee',name:'CHROME TEE',price:59.90,badge:'LIMITED',tagline:'Cold graphic. Heavyweight feel.',desc:'A charcoal heavyweight tee carrying a metallic-style KROKPA graphic. Limited production run with no planned restock.',facts:{fit:'Oversized, unisex',material:'240gsm heavyweight cotton',origin:'Limited run'},colors:{shirt:'#303136',print:'#c7c9cc',accent:'#0b0b0c'}},
  {id:'bone-tee',name:'BONE TEE',price:49.90,badge:null,tagline:'Cream, clean, broken-in.',desc:'A warm bone-colored tee with a minimal black chest mark. Easy to wear, deliberately understated and cut with a relaxed oversized body.',facts:{fit:'Relaxed oversized',material:'220gsm combed cotton',origin:'Made to order'},colors:{shirt:'#e8dfcf',print:'#141414',accent:'#8a8a86'}},
  {id:'riot-tee',name:'RIOT TEE',price:54.90,badge:null,tagline:'Red signal. Black base.',desc:'Deep black cotton with a sharp red KROKPA graphic. A louder piece designed around contrast rather than clutter.',facts:{fit:'Oversized, unisex',material:'240gsm heavyweight cotton',origin:'Made to order'},colors:{shirt:'#101010',print:'#ff3b30',accent:'#f3f1ea'}},
  {id:'static-tee',name:'STATIC TEE',price:52.90,badge:null,tagline:'Built for interference.',desc:'Charcoal tee with an acid-green distortion graphic. Heavy fabric and a structured collar keep the silhouette crisp.',facts:{fit:'Oversized, unisex',material:'240gsm cotton',origin:'Made to order'},colors:{shirt:'#343438',print:'#d7ff3a',accent:'#c9c7bd'}},
  {id:'signal-tee',name:'SIGNAL TEE',price:47.90,badge:null,tagline:'Keep the signal loud.',desc:'Off-white heavyweight tee with a compact black-and-acid chest graphic. Minimal from distance, detailed up close.',facts:{fit:'Relaxed oversized',material:'220gsm cotton',origin:'Made to order'},colors:{shirt:'#eeeae1',print:'#141414',accent:'#d7ff3a'}},
  {id:'night-run-tee',name:'NIGHT RUN TEE',price:51.90,badge:null,tagline:'After dark, on purpose.',desc:'Washed charcoal with a reflective-style silver graphic and a small acid accent. Made for late nights and everyday rotation.',facts:{fit:'Oversized, unisex',material:'230gsm washed cotton',origin:'Made to order'},colors:{shirt:'#27272a',print:'#d9d9d5',accent:'#d7ff3a'}},
  {id:'raw-tee',name:'RAW TEE',price:46.90,badge:null,tagline:'No polish required.',desc:'Natural cotton tone with a raw black graphic. The simplest piece in the collection, cut oversized and made for daily wear.',facts:{fit:'Relaxed oversized',material:'220gsm natural cotton',origin:'Made to order'},colors:{shirt:'#d8d0c1',print:'#111112',accent:'#8a8a86'}},
  {id:'ghost-tee',name:'GHOST TEE',price:49.90,badge:null,tagline:'Low contrast. High impact.',desc:'Faded grey tee with a tonal ghosted logo. Soft visual language, heavyweight construction and a relaxed body.',facts:{fit:'Oversized, unisex',material:'230gsm garment-dyed cotton',origin:'Made to order'},colors:{shirt:'#9a9a98',print:'#e6e3da',accent:'#303030'}},
  {id:'green-room-tee',name:'GREEN ROOM TEE',price:53.90,badge:null,tagline:'Acid without the noise.',desc:'Deep forest cotton with a clean acid-green graphic. A strong colorway that still works as an everyday staple.',facts:{fit:'Oversized, unisex',material:'240gsm heavyweight cotton',origin:'Made to order'},colors:{shirt:'#17382d',print:'#d7ff3a',accent:'#f3f1ea'}},
  {id:'mono-tee',name:'MONO TEE',price:48.90,badge:null,tagline:'Black. White. Done.',desc:'A monochrome heavyweight tee with the KROKPA wordmark stacked into a clean geometric composition.',facts:{fit:'Oversized, unisex',material:'240gsm heavyweight cotton',origin:'Made to order'},colors:{shirt:'#f1f0eb',print:'#111112',accent:'#777773'}}
];

function teeSVG(p) {
  return `<img class="tee-art" src="assets/products/${p.id}.webp" alt="${esc(p.name)} T-shirt" loading="lazy">`;
}

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
