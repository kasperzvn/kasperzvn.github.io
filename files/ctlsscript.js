// PARALLAX EFFECT 
const parallax_imgs = document.querySelectorAll('.parallax_target');
const parallax_strength = 1.5 * 100
let parallax_ticking = false

function updatePosition() {
    parallax_imgs.forEach(function (img) {
        const rect = img.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight;
        const translateY = scrollPercentage * parallax_strength
        
        img.style.transform = `translateY(${translateY - parallax_strength}px)`;
        parallax_ticking = false;
    });
}

window.addEventListener('scroll', function() {
    if (!parallax_ticking) {
        window.requestAnimationFrame(updatePosition);
        parallax_ticking = true;
    }
})
updatePosition()

// FADE IN TEXT
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const fadeElements = document.querySelectorAll('.fade-in-text');
fadeElements.forEach(element => {
    observer.observe(element);
});

// FADE IN SCROLL TEXT
const fadescrollText = document.querySelectorAll('.fade-in-scroll');
let hasScrolled = false;

window.addEventListener('scroll', function() {
  if (!hasScrolled) {
    fadescrollText.forEach(function (element) {
        element.classList.add('fade-in')
    })
    hasScrolled = true;
  }
}, { once: true });