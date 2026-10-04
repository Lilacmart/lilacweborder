const products=[
  {name:"Paket Bunga Lilac",price:25000,icon:"💐"},
  {name:"Boneka Mini",price:35000,icon:"🧸"},
  {name:"Aksesoris Cantik",price:15000,icon:"🎀"},
  {name:"Kado Spesial",price:50000,icon:"🎁"}
];

const list=document.getElementById("productList");
const search=document.getElementById("search");

function rupiah(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}

function render(items){
  list.innerHTML=items.length?items.map((p,i)=>`
    <article class="product">
      <div class="product-image">${p.icon}</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="price">${rupiah(p.price)}</div>
        <button class="order" onclick="orderProduct(${i})">Pesan Sekarang</button>
      </div>
    </article>`).join(""):`<div class="empty">Produk tidak ditemukan.</div>`;
}

function orderProduct(index){
  const p=products[index];
  const phone="6281234567890"; // Ganti dengan nomor WhatsApp toko
  const message=`Halo Lilacmart, saya ingin memesan ${p.name} dengan harga ${rupiah(p.price)}.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,"_blank");
}

search.addEventListener("input",e=>{
  const q=e.target.value.toLowerCase();
  render(products.filter(p=>p.name.toLowerCase().includes(q)));
});
document.getElementById("year").textContent=new Date().getFullYear();
render(products);
