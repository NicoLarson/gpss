document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        const main = document.querySelector('main');
        const servicesSection = document.querySelector('#services');
        const staffSection = document.querySelector('#staff');
        const aboutSection = document.querySelector('#about');
        const contactSection = document.querySelector('#contact');

        if (scroll > servicesSection.offsetTop && scroll < staffSection.offsetTop) {
            main.style.backgroundColor = '#EAE670';
        } else if (scroll > staffSection.offsetTop  && scroll < aboutSection.offsetTop) {
            main.style.backgroundColor = '#81ecec';
        } else if(scroll > aboutSection.offsetTop && scroll < contactSection.offsetTop) {
            main.style.backgroundColor = '#EE4132';
        } else if(scroll > contactSection.offsetTop) {
            main.style.backgroundColor = '#fafafa';
        } else {
            main.style.backgroundColor = '#e8e8e8';
        }
    });

    // cover navbar on scroll down  and discover navbar on scroll up
    const navbar = document.querySelector('nav ul');
    const logo = document.querySelector('header img.header-logo');
    const navbarHeight = navbar.offsetHeight;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > navbarHeight) {
            navbar.classList.add('navbar-cover');
            logo.classList.add('header-logo-cover');
        } else {
            navbar.classList.remove('navbar-cover');
            logo.classList.remove('header-logo-cover');
        }
    });
    
})