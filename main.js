/*=========== toggle icon navbar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=========== scroll section active link =========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Replacing window.onscroll with addEventListener for better handling
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    /*=========== sticky navbar =========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

/*=========== scroll reveal =========*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
}).reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });  // Fixed typo
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Fixed typo

/*=========== Typed.js =========*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Data Science'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
    const menuIcon = document.getElementById('menu-icon');
}

// Function to close the menu when a link is clicked
function closeMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

// Attach event listeners after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
    // Menu icon event listener
    document.getElementById("menu-icon").addEventListener("click", toggleMenu);

    // Get all navbar links
    let navLinks = document.querySelectorAll(".navbar a");

    // Add event listener to each link to close the menu
    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });
});
