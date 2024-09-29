const $burger = document.querySelector('.header-burger');
const $headerNavbar = document.querySelector('.header-navbar');
const toggleBurger = () => {
    $burger.classList.toggle('--open');
    $headerNavbar.classList.toggle('--open');
    $headerNavbar.classList.add('--transition');
    setTimeout(() => {
        $headerNavbar.classList.remove('--transition');
    }, 500)
}
if ($burger && $headerNavbar) {
    $burger.addEventListener('click', toggleBurger);
}