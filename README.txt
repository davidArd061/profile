1. LINK HASIL DEPLOYMENT
https://davidard061.github.io/profile/


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
sudah disertakan (folder node_modules tidak disertakan di repository,
sesuai standar praktik - harus di-install ulang), jadi langkah-langkahnya:

a. Pastikan sudah terinstall Node.js di komputer kamu.
   Cek dengan mengetik di terminal: node -v

b. Buka folder project ini di terminal / VS Code, lalu jalankan:
      npm install

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
profile/
├── assets/
│   ├── css/
│   │   ├── input.css      (sumber Tailwind)
│   │   ├── output.css     (hasil build, jangan diedit manual)
│   │   └── style.css      (custom CSS tambahan)
│   ├── images/
│   │   └── (foto yang diunggah)
│   └── js/
│       └── main.js        (fungsi menu navigasi mobile)
├── index.html
├── about.html
├── projects.html
├── package.json
├── package-lock.json
└── README.txt