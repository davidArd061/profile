1. LINK HASIL DEPLOYMENT
[ISI DI SINI] -> Contoh: https://nama-project-kamu.vercel.app
(Ganti baris di atas dengan link hasil deploy website kamu,
misalnya dari Vercel, Netlify, GitHub Pages, dsb.)


2. TENTANG PROJECT
Project ini adalah website portofolio pribadi mahasiswa yang
dibangun menggunakan HTML dan Tailwind CSS (v4, via NPM),
terdiri dari 3 halaman:
- index.html    -> Halaman utama / perkenalan singkat
- about.html    -> Halaman "Tentang Saya"
- projects.html -> Halaman daftar project

Styling utama memakai Tailwind CSS yang di-build melalui NPM
(folder assets/css/input.css -> di-compile menjadi
assets/css/output.css). Selain itu ada file assets/css/style.css
untuk custom CSS tambahan (animasi fade-up, smooth scroll, dll),
dan assets/js/main.js untuk fungsi tombol menu navigasi (hamburger
menu) di tampilan mobile.


3. CARA MENJALANKAN PROJECT (Tailwind via NPM)
Karena project ini menggunakan Tailwind CSS lewat NPM, package.json
dan folder node_modules sudah disertakan, jadi langkah-langkahnya:

a. Pastikan sudah terinstall Node.js di komputer kamu.
   Cek dengan mengetik di terminal: node -v

b. Buka folder project ini di terminal / VS Code, lalu jalankan:
      npm install
   (Jika folder node_modules sudah ada, langkah ini boleh dilewati,
   tapi disarankan tetap dijalankan untuk memastikan dependency lengkap.)

c. Untuk build CSS Tailwind sekali (hasil akhir untuk production):
      npm run build

d. Untuk mode watch (otomatis build ulang setiap ada perubahan class
   Tailwind saat development):
      npm run watch

e. Buka file index.html langsung di browser, atau gunakan extension
   "Live Server" di VS Code (klik kanan index.html -> "Open with
   Live Server") supaya lebih nyaman saat development.

Catatan: file assets/css/output.css adalah hasil compile Tailwind.
Jangan diedit manual - edit class Tailwind di file .html, lalu jalankan
ulang "npm run watch" atau "npm run build" supaya output.css ter-update.


4. STRUKTUR FOLDER
portofolio-mahasiswa/
├── portofolio-mahasiswa
|   ├──assets/
│   |  ├── css/
│   |  │   ├── input.css      (sumber Tailwind)
│   |  │   ├── output.css     (hasil build, jangan diedit manual)
│   |  │   └── style.css      (custom CSS tambahan)
│   |  ├── images/
│   |  │   └── (foto yang akan diunggah)
│   |  ├── js/
│   |  |   └── main.js        (fungsi menu navigasi mobile)
|   |  └── node_modules/ 
|   |
|   ├── index.html
|   ├── about.html
|   ├── package-lock.json
|   ├── package.json
|   └── projects.html
└── README.txt 
