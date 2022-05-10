document.addEventListener('DOMContentLoaded', () => {
    // window.addEventListener('scroll', () => {
    //     let scroll = window.pageYOffset;
    //     const main = document.querySelector('main');
    //     const servicesSection = document.querySelector('#services');
    //     const staffSection = document.querySelector('#staff');
    //     const aboutSection = document.querySelector('#about');
    //     const contactSection = document.querySelector('#contact');

    //     if (scroll > servicesSection.offsetTop && scroll < staffSection.offsetTop) {
    //         main.style.backgroundColor = '#EAE670';
    //     } else if (scroll > staffSection.offsetTop && scroll < aboutSection.offsetTop) {
    //         main.style.backgroundColor = '#81ecec';
    //     } else if (scroll > aboutSection.offsetTop && scroll < contactSection.offsetTop) {
    //         main.style.backgroundColor = '#EE4132';
    //     } else if (scroll > contactSection.offsetTop) {
    //         main.style.backgroundColor = '#fafafa';
    //     } else {
    //         main.style.backgroundColor = '#e8e8e8';
    //     }
    // });

    // // cover navbar on scroll down  and discover navbar on scroll up
    // const navbar = document.querySelector('nav ul');
    // const logo = document.querySelector('header img.header-logo');
    // const navbarHeight = navbar.offsetHeight;
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset > navbarHeight) {
    //         navbar.classList.add('navbar-cover');
    //         logo.classList.add('header-logo-cover');
    //     } else {
    //         navbar.classList.remove('navbar-cover');
    //         logo.classList.remove('header-logo-cover');
    //     }
    // });

    //* NAV BAR
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    const navbar = document.querySelector("nav ul");

    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    //* CAROUSEL
    var slideIndex = 1;
    let slides = document.querySelectorAll("section.mySlides");
    let dots = document.querySelectorAll("span.dot");
    let prev = document.querySelector("a.prev");
    let next = document.querySelector("a.next");

    let nexSlide = () => {
        slideIndex++
        showSlides(slideIndex);
    }
    next.addEventListener("click", () => {
        slideIndex++
        showSlides(slideIndex);
    });

    prev.addEventListener("click", () => {
        slideIndex--
        showSlides(slideIndex);
    });

    let showSlides = (n) => {
        let i;
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    showSlides(slideIndex);
    
})