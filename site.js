var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Default for small devices
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 3, // Small devices
        spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 6, // Medium devices
        spaceBetween: 10,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 9, // Large devices
        spaceBetween: 10,
      },
    },
  });


  // banner

  var swiper = new Swiper('.silderr', {
    slidesPerView: 1, // Display one image at a time
    spaceBetween: 10,
    autoplay: {
      delay: 3000, // Automatically transition every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Small devices
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Medium devices
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Large devices
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

//

  var swiper = new Swiper('.product', {
    slidesPerView: 2, // Default for small devices
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Small devices
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // Medium devices
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      // Large devices
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

