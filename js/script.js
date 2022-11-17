//Бургер меню
const menuBurger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");

menuBurger.addEventListener("click", function(e) {
    menuBurger.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
});

//