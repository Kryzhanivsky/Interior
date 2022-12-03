const swiper_2 = new Swiper(".latest-articles__swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 1000,
  simulateTouch: true,

  pagination: {
    el: ".latest-articles__pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".latest-articles__next-btn",
    prevEl: ".latest-articles__prev-btn",
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
