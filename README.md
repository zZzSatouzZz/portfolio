<div align="center">

# 🚀 Nguyễn Phương Văn — Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-00FF88?style=for-the-badge)](LICENSE)

**Personal portfolio website — built with React + TailwindCSS**

[🌐 Live Demo](https://your-portfolio.vercel.app) · [📧 Contact](mailto:npvan21122003@gmail.com) · [💼 LinkedIn](#)

</div>

---

## ✨ Features

- 🎨 **Dark theme** với custom cursor neon xanh
- ⚡ **Animations** — slide-up, fade-in, skill bars, số đếm, tech marquee
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🚀 **Zero backend** — thuần frontend, deploy 1 lệnh lên Vercel
- 4 trang: **Home · Projects · About · Contact**

---

## 🛠️ Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Framework  | React 18                 |
| Styling    | TailwindCSS 3            |
| Routing    | React Router v6          |
| Animation  | CSS Keyframes + Intersection Observer |
| Deploy     | Vercel                   |

---

## 🚀 Chạy Local

```bash
# 1. Clone repo
git clone https://github.com/zZzSatouzZz/portfolio.git
cd portfolio

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm start
```

Mở trình duyệt tại **http://localhost:3000**

---

## 📁 Cấu Trúc

```
src/
├── components/
│   ├── Cursor.js       # Custom neon cursor
│   ├── Navbar.js       # Floating navbar
│   ├── Footer.js       # Footer
│   └── SkillBar.js     # Animated skill bars
├── pages/
│   ├── Home.js         # Hero + Skills + CTA
│   ├── Projects.js     # Project showcase
│   ├── About.js        # Bio + Experience + Education
│   └── Contact.js      # Contact form
└── utils/
    └── data.js         # ← Sửa file này để cập nhật thông tin
```

---

## ✏️ Cập Nhật Thông Tin

Chỉ cần sửa **một file duy nhất**:

```js
// src/utils/data.js
export const PROFILE = {
  name:  'Nguyễn Phương Văn',
  title: 'Full Stack Developer',
  email: 'npvan21122003@gmail.com',
  // ...
};
```

---

## 🌐 Deploy lên Vercel

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy (chạy 1 lần, làm theo hướng dẫn)
vercel

# Deploy production
vercel --prod
```

Hoặc **import trực tiếp** tại [vercel.com/new](https://vercel.com/new) → chọn repo GitHub → Deploy.

---

## 📬 Contact

<div align="center">

| | |
|---|---|
| 📧 Email | [npvan21122003@gmail.com](mailto:npvan21122003@gmail.com) |
| 💻 GitHub | [@zZzSatouzZz](https://github.com/zZzSatouzZz) |
| 📍 Location | Văn Lâm, Hưng Yên |

</div>

---

<div align="center">

Made with ❤️ by **Nguyễn Phương Văn**

</div>
