// Menu mobile toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu
mobileMenu.addEventListener('click', function () {
    this.classList.toggle('active');  // activa animación hamburguesa -> X
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target) || mobileMenu.contains(event.target);
    if (!isClickInsideMenu && navMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Efeito de digitação no título
const titulo = document.querySelector('.hero-content h1');
const textoOriginal = titulo.textContent;
titulo.textContent = '';

let i = 0;
function digitar() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, 100);
    }
}

// Iniciar efecto cuando la página cargue
window.addEventListener('DOMContentLoaded', () => {
    digitar();
});

// Animación de scroll para las secciones
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.portfolio-item, .tecnologia-item, .contato-item').forEach(item => {
    observer.observe(item);
});