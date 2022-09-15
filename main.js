//Variables
const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const moveMobile = document.querySelector(`.menu`);
const carroCompras = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);

//Eventos
navEmail.addEventListener(`click`, toggleDesktopMenu);
moveMobile.addEventListener(`click`, toggleMobileMenu);
carroCompras.addEventListener(`click`, toggleMenuCompras);

//Funciones
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains(`inactive`);

    if(!isAsideClosed){
        aside.classList.add(`inactive`);
    }
    desktopMenu.classList.toggle(`inactive`)
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains(`inactive`);

    if(!isAsideClosed){
        aside.classList.add(`inactive`);
    }
    mobileMenu.classList.toggle(`inactive`);
}
function toggleMenuCompras(){
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isToggleDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if(!isMobileMenuClosed || !isToggleDesktopMenuClosed){
        mobileMenu.classList.add(`inactive`);
        desktopMenu.classList.add(`inactive`);
    }
    aside.classList.toggle(`inactive`);
}