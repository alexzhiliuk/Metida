import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiper = new Swiper('.stuff-2-stage', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    // speed: 500,
    // freeMode: true,
    // loop: true,

    breakpoints: {
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    },


    navigation: {
        nextEl: '#stuff2-next',
        prevEl: '#stuff2-prev',
    },

    
});

