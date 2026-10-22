'use strict';



// KONTAKTA OSS

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

const form = document.querySelector(".contact-form form");


// MENYKNAPP
menuBtn.addEventListener("click", function() {
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
    } else {
    menu.classList.add("open");
    }
});

// FORMULÄR

form.addEventListener("submit", function(event) {
    event.preventDefault();
});