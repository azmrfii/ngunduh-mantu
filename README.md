<p align="center">
  <h1 align="center">Ngunduh Mantu & Wedding Invitation</h1>
  <p align="center">
    Dipersembahkan dengan ❤️ oleh <a href="https://github.com/azmrfii">Azmrfii</a>.
  </p>
</p>

<p align="center">
  Template undangan pernikahan modern dan *open-source* yang siap digunakan. </br>
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img alt="Next.js logo" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="75">
  </a>
  <a href="https://vercel.com"><img alt="Vercel logo" src="https://img.shields.io/badge/Deploy%20on%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000"></a>
  <a href="https://github.com/azmrfii/ngunduh-mantu/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000" />
  </a>
</p>

---

## Tentang Proyek Ini

Ini adalah template undangan pernikahan digital modern dan **sepenuhnya dapat disesuaikan (customizable)** yang telah saya modifikasi. Dibangun di atas **Next.js** dan **TypeScript**, template ini dirancang untuk mudah digunakan, memungkinkan Anda memasukkan detail pernikahan Anda dengan cepat dan elegan.

Proyek ini terinspirasi dari template **Weedingly Free** oleh Peter Shaan dan mengadopsi struktur desain dari [Groove Public](https://groovepublic.com/reveused/). Saya telah melakukan improvisasi dan penyesuaian untuk proyek pribadi saya (`ngunduh-mantu`), dan sekarang membagikannya kembali sebagai sumber terbuka 🥳😃.

---

## Fitur Utama

- **Teknologi Modern:** Dibangun menggunakan **Next.js, TypeScript, dan TailwindCSS** untuk performa cepat, skalabilitas, dan pengembangan UI yang efisien.
- **Efek Interaktif:** Menggunakan `react-type-animation` untuk teks efek mesin ketik dan `react-intersection-observer` untuk animasi *scroll* yang mulus.
- **Desain Responsif:** Tampilan yang bekerja sempurna di berbagai ukuran layar (desktop, tablet, dan *mobile*).
- **Konfigurasi Dinamis:** Detail pernikahan (tanggal, lokasi, tautan) mudah diperbarui melalui **variabel lingkungan** (`.env.local`).

---

## Cara Menggunakan

1. **Kloning Repositori:**

    ```bash
    git clone [https://github.com/azmrfii/ngunduh-mantu.git](https://github.com/azmrfii/ngunduh-mantu.git)
    cd ngunduh-mantu
    ```
2. **Instal Dependencies:**
    ```bash
    npm install
    ```
3. **Set up Environment Variables:**
    Buat file **`.env.local`** di *root directory* dan isi dengan variabel yang dibutuhkan (lihat file `.env.example` sebagai referensi).
4. **Konfigurasi Database:**
    Di MongoDB, buat *database* bernama `wish` dan di dalamnya buat *collection* bernama `wishes` untuk menampung data RSVP tamu.
5. **Jalankan Proyek Lokal:**
    ```bash
    npm run dev
    ```
6. **Deploy ke Vercel:**
    Anda dapat dengan mudah mendeploy ke Vercel menggunakan Vercel CLI setelah menginstal dan menghubungkan akun Anda:
    ```bash
    npm install -g vercel
    vercel
    ```

---

## Kustomisasi Cepat

Anda dapat menyesuaikan hampir semua detail pernikahan Anda melalui variabel lingkungan dan file di folder `public`:

* Nama Pernikahan, Tanggal, dan *Countdown*.
* Musik di `public/music/wedding_song.mp3`.
* Gambar *Slider* di `public/slide_1` hingga `slide_9`.
* Gambar *Fade-in* dan gambar *desktop view* di folder `public`.
* Detail Acara, Tautan Google Maps, dan Tautan *Live Streaming* YouTube.
* **Video YouTube:** Embed video menggunakan kode *iframe*.
* **Personalisasi Nama Tamu:** Atur URL dengan `ex: https://[URL_ANDA]/to:peter` untuk menyambut tamu secara spesifik.

---

## Kontribusi & Lisensi

Proyek ini terbuka untuk kontribusi! Silakan *fork* dan ajukan *pull requests* jika Anda memiliki fitur atau perbaikan.

Template ini disediakan di bawah **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikannya.
