import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiper = new Swiper('.photogallery-cont-stage', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    speed: 500,

    navigation: {
        nextEl: '.photogallery-btn-next',
        prevEl: '.photogallery-btn-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 2.5,
        },
        768: {
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1.8,
        }
    }

    
    
});


$('.photogallery .img-cont').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
    
});