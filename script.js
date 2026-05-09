window.addEventListener("load", () => {
    // Hide Loader
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("loader-hidden");

    // Scroll Progress Circle
    const progressPath = document.querySelector('#progress-wrap path');
    if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;

            const wrap = document.querySelector('#progress-wrap');
            if (scroll > 50) wrap.classList.add('active-progress');
            else wrap.classList.remove('active-progress');
        };

        window.addEventListener('scroll', updateProgress);
        document.querySelector('#progress-wrap').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // CLEAN SLIDER CONFIG (No Autoplay)
    const swiperConfig = {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        watchSlidesProgress: true, // Helps with smooth rendering
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false
            }
        }
    };

    new Swiper(".mySwiper", swiperConfig);
    new Swiper(".portfolioSwiper", swiperConfig);

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
});