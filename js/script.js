//Бургер меню
const menuBurger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const html = document.getElementById('html');
const menuItem = document.querySelectorAll(".menu__item");

menuBurger.addEventListener("click", function(item) {
    menuBurger.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
    html.classList.toggle("lock");
    menuItem.forEach(function(item) {
        item.addEventListener('click', showMenu);
    })
})



function showMenu() {
    menuBurger.classList.toggle("menu-open");
    menu.classList.toggle('menu-open');
    html.classList.toggle("lock");
}





//Табы
//Нашли все заголовки табов по data атрибуту
const tabSneaker = document.querySelectorAll('[data-tab]');
//Нашли все data-tab-color
const colorBoxes = document.querySelectorAll('[data-tab-color]');

tabSneaker.forEach(function(item) {

    item.addEventListener('click', function () {

        // 1. Скрыть все data-tab-color
        colorBoxes.forEach(function(item) {
            item.classList.add('hidden-sneaker');
        })

        // 2. Выбрать нужный contentBox и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden-sneaker');
    })
})

//Меняет активную кнопку в табах
const sneakerButton = document.querySelectorAll('.buttons-sneaker-home__button');

for (let item of sneakerButton) {
    item.addEventListener('click', () => {
        removeActivClass();
        item.classList.add('_activ')
    });
}

function removeActivClass() {
    for (let item of sneakerButton) {
        item.classList.remove('_activ');
    }
}

//Сдайдер галереии
var swiper = new Swiper(".myGallery", {
    breakpoints: {
        767.98: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });