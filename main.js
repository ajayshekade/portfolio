document.addEventListener("DOMContentLoaded", function () {

    // Toggle menu on icon click
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('fa-xmark');
        navMenu.classList.toggle('show');
    });

    // Function to close the menu when a link is clicked
    function closeMenu() {
        navMenu.classList.remove('show');
        menuIcon.classList.remove('fa-xmark'); // Change the icon back to bars when closing the menu
    }

    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add event listener to each link to close the menu
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Scroll section active link
    let sections = document.querySelectorAll('section');
    let navLinksForScroll = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', function () {
        sections.forEach(function (sec) {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinksForScroll.forEach(function (link) {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            }
        });

        // Sticky navbar on scroll
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Scroll reveal functionality
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    }).reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // Typed.js functionality
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer', 'Data Science'],
        typedSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
