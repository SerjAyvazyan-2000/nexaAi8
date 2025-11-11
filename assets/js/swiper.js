


let reviewsSwiper;
let currentDirection;

function initSwiper() {
  const isMobile = window.innerWidth <= 992;
  const direction = isMobile ? "horizontal" : "vertical";

  if (reviewsSwiper && currentDirection === direction) return;

  if (reviewsSwiper) reviewsSwiper.destroy(true, true);

  currentDirection = direction;

  reviewsSwiper = new Swiper(".reviews-swiper", {
    direction,
    loop: true,
    speed: isMobile ? 600 : 5500,

    autoplay: !isMobile && {
      delay: 0,
      disableOnInteraction: false,
    },

    allowTouchMove: isMobile,

    slidesPerView: 3,
    spaceBetween: 10,

    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.5 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  const wrapper = document.querySelector(".reviews-swiper");
  wrapper.onmouseenter = () => !isMobile && reviewsSwiper.autoplay?.stop?.();
  wrapper.onmouseleave = () => !isMobile && reviewsSwiper.autoplay?.start?.();
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(initSwiper, 250);
});

const swiper = new Swiper(".how-work-swiper", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".work-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    490: { slidesPerView: 1.2 },
    620: { slidesPerView: 1.5 , },
    810: { slidesPerView: 2 },
    992: { slidesPerView: 2.5 },
    1263: { slidesPerView: 2.6 },
    1300: { slidesPerView: 3 },
  },
});