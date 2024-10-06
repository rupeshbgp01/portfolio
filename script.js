var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    });


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    fade: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
    },
});



let isScrolling = false; 


document.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;


  if (e.deltaY > 0) {

    swiper.slideNext();
  } else {

    swiper.slidePrev();
  }

  setTimeout(() => {
    isScrolling = false;
  }, 400);
});
