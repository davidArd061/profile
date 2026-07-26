1. LINK
https://davidard061.github.io/profile/

2. PROJECT
Project ini adalah website profil mahasiswa yang
dibangun menggunakan HTML dan Tailwind CSS,
terdiri dari 3 halaman
index.html    -> Halaman utama
about.html    -> Halaman Tentang Saya
projects.html -> Halaman daftar project dan ada kontak 

Styling utama memakai Tailwind CSS yang di-build melalui NPM
(folder assets/css/input.css -> di-compile menjadi
assets/css/output.css), lalu ada file assets/css/style.css
untuk custom CSS tambahan (isinya seperti animasi munculnya card pada saat dibuka),
dan assets/js/main.js untuk fungsi tombol menu navigasi dihp

3. CARA RUN PROJECT (Tailwind via NPM)
Karena project ini menggunakan Tailwind CSS lewat NPM, package.json
sudah disertakan jadi langkah-langkahnya:

a. Cek dulu kamu sudah instal Node.js
   Cek dengan ketik di terminal: node -v

b. Buka folder project di terminal/VScode, lalu RUN:
      npm install

c. Untuk mode watch (cctv 24jam, ngepantau setiap ada perubahan)
      npm run watch

d. Buka file index.html langsung di browser, atau gunakan extension
   "Live Server" di VS Code (klik kanan index.html -> "Open with
   Live Server")

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
├── about.html
├── index.html
├── package.json
├── package-lock.json
├── projects.html
└── README.txt