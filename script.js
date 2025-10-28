let translations = {};
let currentLang = localStorage.getItem("lang") || "en";
let swiper;

fetch("lang.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    updateContent(currentLang);
    initSwiper();
    updateLangButtons();
  })
  .catch((err) => console.error("Failed to load lang.json:", err));


function updateContent(lang) {
  const html = document.documentElement;
  const body = document.body;

 
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });


  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    body.classList.replace("text-left", "text-right");
    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.classList.add("space-x-reverse");
    });
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    body.classList.replace("text-right", "text-left");
    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.classList.remove("space-x-reverse");
    });
  }
  if (swiper) {
    swiper.destroy(true, true);
    initSwiper();
  }

  setEqualCardHeight();
}

// Swiper 
function initSwiper() {
  swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    spaceBetween: 20,
    rtl: currentLang === "ar",
    navigation: {
      nextEl: ".multiple-slide-carousel .swiper-button-next",
      prevEl: ".multiple-slide-carousel .swiper-button-prev",
    },
    breakpoints: {
      1280: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 1, spaceBetween: 10 },
    },
  });

  setEqualCardHeight();
}




const langToggleBtns = document.querySelectorAll(".lang-toggle");

function updateLangButtons() {
  langToggleBtns.forEach((btn) => {
    btn.textContent = currentLang === "en" ? "AR" : "EN";
  });
}

langToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("lang", currentLang);

    updateContent(currentLang);
    updateLangButtons();
  });
});

// === Mobile menu toggle ===
const btnMenu = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
}

























// === Equal card height ===
function setEqualCardHeight() {
  const cards = document.querySelectorAll(
    ".multiple-slide-carousel .swiper-slide > div"
  );
  let maxHeight = 0;

  cards.forEach((card) => (card.style.height = "auto"));
  cards.forEach((card) => {
    if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
  });
  cards.forEach((card) => (card.style.height = maxHeight + "px"));
}

window.addEventListener("resize", setEqualCardHeight);