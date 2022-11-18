//Бургер меню
const menuBurger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");

menuBurger.addEventListener("click", function(e) {
    menuBurger.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
});

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