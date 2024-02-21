const navBtn = document.querySelector('.burger--btn');
const body = document.body;
const navMobile = document.querySelector('.nav-mobile')

/* BURGER MENU */
const openMobileMenu = () => {
    navBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
}

navBtn.addEventListener('click', (openMobileMenu));


function closeMenu() {
    navBtn.classList.remove('active');
}

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 767) {
        closeMenu();
    }
});

