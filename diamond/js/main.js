const iconBurger = document.querySelector('.burger--btn');
const body = document.body;

/* BURGER MENU */
iconBurger.addEventListener('click', () => {
    iconBurger.classList.toggle('active');
});

function closeMenu() {
    iconBurger.classList.remove('active');
}

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 767) {
        closeMenu();
    }
});

