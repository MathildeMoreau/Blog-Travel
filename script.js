const menu = document.getElementById('menu')
const menuBurger = document.getElementById('toggleButton')
const nav = document.querySelector('nav')

function ToggleMenu() {
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        nav.style.height = "14vh";
    } else {
        menu.classList.add("showMenu")
        nav.style.height = "21vh";
    }
}

menuBurger.addEventListener('click', ToggleMenu)