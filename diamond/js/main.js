const blur = document.querySelector('.blur');
const body = document.body;
const navBtn = document.querySelector('.burger--btn');
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year');

/* BURGER MENU */
const openMobileMenu = () => {
    navBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
    blur.classList.toggle('open');
    body.classList.toggle('scroll');
}

navBtn.addEventListener('click', (openMobileMenu));


// function closeMenu() {
//     navBtn.classList.remove('active');
//     blur.classList.remove('open');
// }

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 767) {
        closeMenu();
    }
});


// change current year
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();