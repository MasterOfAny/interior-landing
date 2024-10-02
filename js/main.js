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

const $tabs = document.querySelectorAll('.project-tab');
const toggleTab = (tab) => {
    $tabs.forEach(tab => tab.classList.remove('--active'));
    tab.classList.add('--active');
}
if ($tabs) {
    $tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            toggleTab(tab);
        })
    })
}