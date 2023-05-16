
import Swiper, { Navigation, Thumbs } from 'swiper';

const sliderBanner = new Swiper('.banner', {
    modules: [Navigation],
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            spaceBetween: 50,
        }
    }
});

const sliderDesings = new Swiper('.designs__slider', {
    modules: [Navigation],
    enabled: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            enabled: true,
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 800,
        },

        1200: {
            enabled: true,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
        }
    }
});

const sliderMain = new Swiper('.slider__slider', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    initialSlide: 1,
    speed: 800,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
            speed: 800,
            centeredSlides: true,
            spaceBetween: 0,
        }
    }
});

const sliderTab = new Swiper('.interior__tabs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
});

const swiper = new Swiper(".interior__slider2", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    speed: 800,
});

const swiper2 = new Swiper(".interior__slider", {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

const innerSwiper = new Swiper(".inner__slider", {
    modules: [Navigation],
    slidesPerView: 1,
    initialSlide: 0,
    speed: 800,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 800,
        },
        1200: {
            enabled: true,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
        }
    }
})



