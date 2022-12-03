const swiper_1 = new Swiper(".propositions__swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 1000,
  simulateTouch: true,

  pagination: {
    el: ".propositions__pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".propositions__next-btn",
    prevEl: ".propositions__prev-btn",
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
