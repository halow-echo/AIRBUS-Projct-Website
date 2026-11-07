# ✈️ Airbus Corporate & Investor Website Portfolio

![Airbus Banner](https://img.shields.io/badge/Airbus-Corporate_Portfolio-00205B?style=for-the-badge&logo=airbus&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

Website portofolio interaktif dan siap investor (*investor-grade*) untuk brand kedirgantaraan global **Airbus**. Website ini dirancang mengusung estetika gelap (*dark mode*), profesional, bersih (*flat design* tanpa *shadow/glow* berlebihan), serta responsif menggunakan Tailwind CSS CLI.

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Struktur Proyek](#-struktur-proyek)
- [Persyaratan Sistem](#-persyaratan-sistem)
- [Panduan Instalasi & Jalankan Proyek](#-panduan-instalasi--jalankan-proyek)
- [Panduan Penggunaan Website](#-panduan-penggunaan-website)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)

---

## ✨ Fitur Utama

### 🏠 1. Landing Page (`index.html`)
- **Hero Video Background:** Menampilkan video atmosferik *Airbus Formation Flight* dengan navigasi transparan di bagian atas.
- **Kartu Akordeon Misi Kami:** Showcase 4 pilar utama Airbus (Komersial, Militer, Helikopter, Luar Angkasa) dengan efek *expand on hover*.
- **Dashboard Statistik Finansial:** Metrik keuangan korporat (€73.4B Revenue, Order Backlog, dll.) yang disesuaikan untuk kebutuhan investor.
- **Showcase ZEROe:** Menyoroti inisiatif pesawat ramah lingkungan berbasis hidrogen cair target 2035.
- **Global Assembly Network:** Kartu lokasi fasilitas manufaktur global (Toulouse, Hamburg, Mobile, Tianjin) dengan rangkuman kapasitas produksi.

### ℹ️ 2. About Page (`page/about.html`)
- **Visi & Komitmen Korporat:** Penjelasan mendalam mengenai sejarah, nilai-nilai inti (*Safety, Integrity, Customer Focus, Innovation*).
- **Katalog Pesawat Komersial:** Accordion vertikal interaktif dari generasi pertama **A300** hingga pesawat modern **A350 XWB** dan **A220**, lengkap dengan data spesifikasi dan status produksi.

### ✉️ 3. Contact Page (`page/contact.html`)
- **Desain Flat Clean:** Tampilan tanpa bayangan (*no shadows/glows*) berlatar belakang *image overlay blur*.
- **Formulir Interaktif:** Pilihan kategori keperluan (Investor, Pengadaan Maskapai, Pertahanan, Pers) beserta info detail alamat HQ Blagnac (Prancis) dan Tianjin (Cina).

---

## 📁 Struktur Proyek

```text
airbus-website/
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── airbus-icon-web.jpg
│   └── videos/
│       └── Airbus Family Day - Formation Flight.mp4
│
├── src/
│   └── input.css          # Berkas utama Tailwind directive (@tailwind base; dll)
│
├── css/
│   └── output.css         # Berkas CSS hasil kompilasi Tailwind CLI
│
├── page/
│   ├── about.html         # Halaman Tentang Airbus & Katalog Produk
│   └── contact.html       # Halaman Kontak & Form Hubungi Kami
│
├── index.html             # Halaman Utama (Landing Page)
└── README.md              # Dokumentasi Proyek
```

---

## ⚙️ Persyaratan Sistem

Sebelum menjalankan atau mengedit berkas styling Tailwind CSS, pastikan Anda telah memasang:
- [Node.js](https://nodejs.org/) (Versi 16.x atau yang lebih baru)
- Peramban web modern (Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari)

---

## 🚀 Panduan Instalasi & Jalankan Proyek

### 1. Klon / Unduh Repositori
```bash
git clone https://github.com/username/airbus-portfolio.git
cd airbus-portfolio
```

### 2. Jalankan Langsung (Mode Statis)
Anda dapat langsung membuka berkas `index.html` di peramban favorit Anda tanpa perlu server tambahan.

### 3. Mode Pengembang (Build Tailwind CSS CLI)
Jika Anda melakukan perubahan pada kelas-kelas Tailwind di HTML dan ingin mengompilasi CSS terbaru:

1. Inisialisasi paket & pasang Tailwind CSS:
   ```bash
   npm install -D tailwindcss
   ```
2. Jalankan perintah *watch* Tailwind untuk memantau perubahan secara otomatis:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./css/output.css --watch
   ```

---

## 🧭 Panduan Penggunaan Website

1. **Navigasi Utama (Header):**
   - Gunakan menu **Home**, **About**, dan **Contact** pada bagian *header* untuk berpindah antar halaman secara instan.
   - Arahkan kursor (*hover*) pada menu **More** untuk mengakses *quick link* ke bagian **Projects** (ZEROe) atau **Models** (Katalog Pesawat).

2. **Mengeksplorasi Katalog Pesawat (Halaman About):**
   - Buka halaman `About`, lalu *scroll* down ke bagian **Model AIRBUS : Komersial**.
   - Arahkan kursor (*hover*) pada salah satu baris tipe pesawat (misal: **A380** atau **A350**). Kotak akan otomatis membesar dan menampilkan rincian jenis mesin, tanggal penerbangan perdana, total unit dikirimkan, dan status produksi.

3. **Mengirim Pesan / Pertanyaan Investor (Halaman Contact):**
   - Buka halaman `Contact`.
   - Isi nama, email, pilih **Kategori Keperluan** (misal: *Hubungan Investor & Finansial*), lalu klik tombol **Kirim Pesan Sekarang**.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik standar web modern.
- **Tailwind CSS v3:** Framework CSS utility-first untuk pembuatan tata letak responsif, efek *glassmorphism*, dan transisi halus.
- **Vanilla CSS3:** Digunakan pada penyesuaian kustom efek transisi akordeon & font.

---

<p align="center">
  <b>© 2026 Airbus Portfolio Project</b> — Built for Corporate & Investor Excellence.
</p>