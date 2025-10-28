var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true,

  spaceBetween: 20,
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

// Mobile menu toggle
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
