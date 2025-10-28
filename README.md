Absolutely! I can create a **README.md** for your Dwello Landing Page, modeled after the style of your Travel Landing Page README you shared. Here's a comprehensive version for your project:

---

# 🏡 Dwello Landing Page

A modern, responsive **real estate landing page** built using **HTML5**, **TailwindCSS**, and **Swiper.js**, featuring **multi-language support**, **interactive testimonials**, and **light/dark themes**.

---

## 🚀 Features

* 🏠 **Beautiful Real Estate Design** — Fully responsive layout optimized for all devices.
* 🌐 **Multi-Language Support** — English & Arabic translations using `translations.json`.
* 🌓 **Light / Dark Theme Toggle** — Theme saved in `localStorage`.
* 💬 **Interactive Testimonials** — Horizontal/vertical Swiper slider with autoplay and navigation.
* 🧭 **TailwindCSS Components** — Responsive header, mobile menu, buttons, and cards.
* 📱 **Search & Subscribe Section** — Interactive search bar and newsletter subscription.
* 🧩 **Structured Components** — Organized sections: Header, Hero, Dream Home, Why Choose Us, Popular Residences, Testimonials, Contact, Footer.

---

## 🧠 Project Structure

```
Dwello-Landing/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── translations.json
├── assets/
│   ├── header/
│   ├── hero/
│   ├── dream/
│   ├── choose-us/
│   ├── Residences/
│   ├── about/
│   ├── user/
│   ├── contact/
│   └── footer/
└── README.md
```

---

## ⚙️ How It Works

### 🈶 1. Language Toggle

* Controlled by the **“EN/AR”** button (`class="lang-toggle"`).
* Translations are loaded from `js/translations.json`.
* All elements with `data-i18n` or placeholders with `data-i18n-placeholder` are updated dynamically.
* RTL layout is automatically applied for Arabic.

```js
translatePage(lang);
localStorage.setItem("lang", lang);
```

---

### 💬 2. Testimonials Slider

Implemented using **Swiper.js**:

```js
new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000 },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
```

---

### 🌗 3. Theme Toggle (Optional)

You can implement a theme toggle using `data-theme` on `<html>` and TailwindCSS classes. Example:

```css
:root[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #f8f9fa;
}
```

---

## 🧩 Setup & Usage

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/YumnaAtaba3/dwello-landing.git
cd dwello-landing
```

### 🌍 2. Run Locally

Open `index.html` in your browser directly, or use a local server:

```bash
# Using VSCode Live Server extension
Right-click index.html → “Open with Live Server”
```

or with Node.js:

```bash
npx serve
```

Then visit [http://localhost:3000](http://localhost:3000).

---

### 🗺️ 3. Add Translations

Edit `js/translations.json`:

```json
{
  "en": {
    "navHome": "Home",
    "navService": "Service",
    "heroTitle": "Find Your Dream Home",
    "heroDesc": "Explore our curated selection of exquisite properties...",
    "heroBtn": "Sign up"
  },
  "ar": {
    "navHome": "الرئيسية",
    "navService": "خدماتنا",
    "heroTitle": "اعثر على منزل أحلامك",
    "heroDesc": "استكشف مجموعتنا المختارة من العقارات الرائعة...",
    "heroBtn": "اشتراك"
  }
}
```

---

### 💡 4. Customizing Styles

All styles are in `/css/style.css`. You can customize sections like:

* Header & Navbar
* Hero & Hero Image
* Search Bar
* Dream Home Section
* Why Choose Us Cards
* Popular Residences Cards
* Testimonials Slider
* Contact Form
* Footer & Social Links

---

## 🧰 Dependencies

| Library / Framework                    | Purpose                                         |
| -------------------------------------- | ----------------------------------------------- |
| [TailwindCSS](https://tailwindcss.com) | Utility-first CSS framework                     |
| [Swiper.js](https://swiperjs.com/)     | Testimonials slider                             |
| [JavaScript (ES6+)]                    | Language toggle, Swiper logic, UI interactivity |

---

## 📦 Local Storage Keys

| Key     | Description                               |
| ------- | ----------------------------------------- |
| `lang`  | Stores selected language (`en` or `ar`)   |


---

## 💻 Browser Support

✅ Chrome
✅ Firefox
✅ Edge
✅ Safari
✅ Opera

---

## 🧑‍💻 Your Name

**Dwello Real Estate Landing Page**
Designed for modern real estate platforms and agencies.
Built with ❤️ using **HTML, TailwindCSS, and JavaScript**.

---


