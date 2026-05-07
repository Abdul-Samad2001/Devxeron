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

    // Shared Configuration for both Sliders
    const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 } // Desktop Max: 3 Cards
        }
    };

    // Initialize Services Slider
    new Swiper(".mySwiper", swiperConfig);

    // Initialize Portfolio Slider
    new Swiper(".portfolioSwiper", swiperConfig);
});