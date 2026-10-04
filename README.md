# Lilacmart Auto Order — GitHub Ready

Template toko digital bergaya pink/cream seperti referensi gambar, dengan katalog, keranjang, checkout demo, dan panel admin.

## File
- `index.html` — halaman toko/customer
- `admin.html` — login + dashboard admin
- `style.css` — seluruh tampilan/responsive
- `app.js` — katalog, keranjang, checkout demo
- `admin.js` — autentikasi demo + CRUD produk + daftar pesanan

## Login Admin Demo
- Link: `admin.html`
- Username: `admin`
- Password: `Admin123!`

Jika di GitHub Pages, setelah website aktif link admin adalah:
`https://USERNAME.github.io/NAMA-REPO/admin.html`

## Cara upload ke GitHub
1. Buat repository baru di GitHub.
2. Upload semua file pada folder ini ke root repository.
3. Masuk `Settings > Pages`.
4. Pilih `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Buka URL GitHub Pages yang diberikan GitHub.
6. Tambahkan `/admin.html` untuk panel admin.

## Penting untuk produksi
Versi ini sengaja dibuat tanpa backend agar langsung bisa dijalankan dari GitHub Pages. Login admin dan data menggunakan `localStorage/sessionStorage`, sehingga **bukan sistem keamanan produksi**. Password dapat dilihat dari source code browser. Untuk toko sungguhan, gunakan backend/database, autentikasi server-side, HTTPS, dan payment gateway resmi.

Checkout saat ini membuat order demo di browser. Untuk auto order sungguhan, endpoint backend perlu ditambahkan untuk pembayaran, verifikasi webhook, stok/delivery, dan status pesanan.
