

document.addEventListener('DOMContentLoaded', function () {

  const questionHeaders = document.querySelectorAll('.process-question');

  questionHeaders.forEach(function (header) {
    header.addEventListener('click', function (e) {

      const processItem = this.closest('.process-item');
      if (processItem) {
        processItem.classList.toggle('active');
      }
    });
  });
});


    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      mousewheel: true,
      grabCursor: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      on: {
        click(e) {
          const clickedSlide = e.target.closest('.swiper-slide');
          if (clickedSlide) {
            const slideIndex = parseInt(clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            if (!isNaN(slideIndex)) {
              swiper.slideTo(slideIndex);
            }
          }
        }
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }

    });
