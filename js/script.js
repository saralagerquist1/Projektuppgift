'use strict';

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Eventlyssnare
menuBtn.addEventListener("click", function() {
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
    } else {
    menu.classList.add("open");
    }
});