window.addEventListener("load", () => {

    initializeLoader();
    initializeScrollProgress();
    initializeSwiper();
    initializeMobileMenu();

});


/* --- Loader --- */

function initializeLoader() {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("loader-hidden");
    }
}


/* --- Scroll Progress button --- */

function initializeScrollProgress() {

    const progressPath = document.querySelector('#progress-wrap path');

    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.strokeDasharray =
        `${pathLength} ${pathLength}`;

    progressPath.style.strokeDashoffset = pathLength;

    function updateProgress() {

        const scroll = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            pathLength - (scroll * pathLength / height);

        progressPath.style.strokeDashoffset = progress;

        const wrap = document.querySelector('#progress-wrap');

        if (scroll > 50) {
            wrap.classList.add('active-progress');
        } else {
            wrap.classList.remove('active-progress');
        }
    }

    window.addEventListener('scroll', updateProgress);

    document
        .querySelector('#progress-wrap')
        .addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });
}


/* --- Swiper Slider --- */

function initializeSwiper() {

    const swiperConfig = {

        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },

        breakpoints: {

            320: {
                slidesPerView: "auto",
                centeredSlides: true
            },

            1024: {
                slidesPerView: 3,
                centeredSlides: false
            }
        }
    };

    new Swiper(".mySwiper", swiperConfig);
}


/* --- Mobile View --- */

function initializeMobileMenu() {

    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (!menuBtn || !navList) return;

    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {

        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });

    });
}