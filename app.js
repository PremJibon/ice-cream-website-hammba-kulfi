document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight / 2) {
            document.querySelector('.back-to-top').classList.add('show');
        } else {
            document.querySelector('.back-to-top').classList.remove('show');
        }
    });
});
