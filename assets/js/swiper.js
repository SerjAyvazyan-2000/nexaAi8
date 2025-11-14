



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





let reviewsSwiper = null;
let lastMode = null;

function initReviewsSwiper() {
  const isDesktop = window.innerWidth >= 992;
  const mode = isDesktop ? "desktop" : "mobile";

  if (reviewsSwiper && lastMode === mode) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }

  lastMode = mode;

  reviewsSwiper = new Swiper(".reviews-swiper", {
    direction: isDesktop ? "vertical" : "horizontal",
    loop: true,
    speed: isDesktop ? 6000 : 600,
    allowTouchMove: !isDesktop,

    autoplay: isDesktop
      ? {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false, 
        }
      : false,

    slidesPerView: isDesktop ? 3 : 1,
    spaceBetween: 10,

    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  if (isDesktop) {
    const wrapper = document.querySelector(".reviews-swiper");

    wrapper.addEventListener("mouseenter", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.stop();
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.start();
      }
    });
  }
}

window.addEventListener("load", initReviewsSwiper);

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initReviewsSwiper, 200);
});