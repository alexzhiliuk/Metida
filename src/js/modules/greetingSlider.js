import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiper = new Swiper('.greeting-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    freeMode: true,
    loop: true,


    pagination: {
        el: ".greeting-slider-pagination",
        clickable: true,
    }
    
});

