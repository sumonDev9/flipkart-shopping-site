// Deals slider 
var swiper = new Swiper('.delase', {
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
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // Large devices
      1024: {
        slidesPerView: 6,   //gadgets
        spaceBetween: 20,
      },
    },
  });

  //smart gadgets slider 
var swiper = new Swiper('.gadgets', {
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
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // Large devices
      1024: {
        slidesPerView: 6,   
        spaceBetween: 20,
      },
    },
  });