<script>
    // 1. Hide Loader
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 1000);
    });

    // 2. Advanced Scroll Progress Logic
    document.addEventListener('DOMContentLoaded', function() {
        const progressPath = document.querySelector('#progress-wrap path');
        const pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        const updateProgress = function() {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;

            if (scroll > 100) {
                document.querySelector('#progress-wrap').classList.add('active-progress');
            } else {
                document.querySelector('#progress-wrap').classList.remove('active-progress');
            }
        };

        window.addEventListener('scroll', updateProgress);

        document.querySelector('#progress-wrap').addEventListener('click', function(event) {
            event.preventDefault();
            this.classList.add('click-animation');
            window.scrollTo({top: 0, behavior: 'smooth'});
            setTimeout(() => {
                this.classList.remove('click-animation');
            }, 500);
        });
    });
</script>