document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Start shrinking after scrolling 50px

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll('section, .hero-text > *, .about-content > *, .collage');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in-element');
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in-element').forEach(element => {
        observer.observe(element);
    });
}); 