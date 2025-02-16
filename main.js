/*=========== toggle icon navbar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oncllick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=========== srcoll section active link =========*/

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*='+ id + '] ').classList.add('active');

            });
        };

        
    });
 /*=========== sticky navbar =========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};

/*===========remove toggle icon and navbar===============*/ 
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active')

/*=========== scroll reveal=========*/
scrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,

});
scrollReveal().Reveal('.home-content,heading',{origin:'top'});
scrollReveal().Reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'buttom'});
scrollReveal().Reveal('.home-contact h1,.about-img',{origin:'left'});
scrollReveal().Reveal('.home-contact p, .about-content',{origin:'right'});
/*=========== Typed js =========*/
const typed = new Typed('.multiple-text',{
    Strings:['Frontend Developer','web Designer','Data science'],
    typedSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});