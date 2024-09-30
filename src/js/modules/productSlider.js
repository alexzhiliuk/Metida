import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiper = new Swiper('.product__gallery-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 500,
    freeMode: true,
    loop: true,


    navigation: {
        nextEl: '.product__gallery-next',
        prevEl: '.product__gallery-prev',
    },

    // breakpoints: {
    //     1366: {
    //         slidesPerView: 4,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    //     768: {
    //         slidesPerView: 3.2,
    //     },
    //     480: {
    //         slidesPerView: 2.2,
    //     },
    // }
    
});


$(".product__gallery-slider-img").click(function() {
    let src = $(this).find("img").attr("data-src")

    src = src ? src : $(this).find("img").attr("src")

    $(this).parents(".product__gallery").find(".product__image img").attr("src", src)
})



