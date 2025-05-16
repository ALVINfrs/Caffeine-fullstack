#<Caffeine/>
# ☕ <Caffeine/> — Coffee Shop for Coders

**<Caffeine/>** adalah aplikasi fullstack bertema kedai kopi online yang dirancang khusus untuk programmer. Menghadirkan suasana cozy dan ramah ngoding, aplikasi ini memungkinkan pengguna untuk melihat menu, memesan minuman, melakukan checkout, dan mencetak struk langsung dari perangkat mereka.

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js** — Framework React untuk SSR dan SPA
- **Tailwind CSS** — Utility-first CSS untuk styling cepat dan responsif
- **Radix UI + Shadcn/UI** — Komponen UI modern
- **React Hook Form + Zod** — Validasi form efisien
- **Recharts** — Visualisasi data
- **Lucide Icons** — Ikon modern dan ringan

### Backend
- **Express.js** — Web framework minimalis untuk REST API
- **MySQL (via mysql2)** — Database relasional
- **bcryptjs** — Enkripsi password
- **express-session** — Autentikasi berbasis session
- **dotenv, cors, body-parser** — Middleware pendukung

---

## 📁 Struktur Folder

```
caffeine-fullstack/
├── backend/   # Backend Express API
├── frontend/  # Frontend Next.js App
```

---

## 🌐 Fitur Utama

### Umum
- Halaman navigasi: Home, Tentang Kami, Menu, Kontak Kami
- Desain dark theme yang cozy dan nyaman untuk programmer
- Fitur Login & Register user
- Desain responsif (mobile & desktop)

### Menu & Pemesanan
- Menampilkan daftar menu minuman dan makanan
- Checkout langsung di modal (`CheckoutModal.tsx`)
- Redirect ke halaman `successful-transaction.tsx` setelah pembayaran
- Receipt Modal: menampilkan riwayat pesanan dan cetak struk

---

## 🧠 Konsep Desain

Tempat ngopi bukan cuma tempat ngopi.

`<Caffeine/>` dirancang sebagai kafe virtual dan fisik bagi para developer, programmer, dan pecinta teknologi yang ingin:
- Nugas, ngoding, atau meeting dengan nyaman
- Menikmati aroma kopi dan alunan lo-fi playlist
- Memesan menu favorit tanpa ganggu workflow

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone repository

```bash
git clone https://github.com/yourusername/caffeine-fullstack.git
cd caffeine-fullstack
```

### 2. Jalankan Backend

```bash
cd backend
npm install
npm start
```

### 3. Jalankan Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Konfigurasi Environment (`.env`)

Buat file `.env` di folder `backend/` dengan isi berikut:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=caffeine_db
SESSION_SECRET=supersecretkey
```

---

## 🙌 Kontribusi

Pull request terbuka untuk semua jenis kontribusi:

- 🚀 Penambahan fitur
- 🐛 Perbaikan bug
- 🎨 Peningkatan UI/UX

Langkah kontribusi:
1. Fork repo ini
2. Buat branch baru
3. Commit perubahan
4. Buat pull request

---

## 🧾 Lisensi

MIT License © 2025 — `<Caffeine/>` by **Muhammad Alvin Faris**

---

## Made with ❤️ and ☕ by Developer @ <Caffeine/>
