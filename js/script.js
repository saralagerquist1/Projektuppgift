'use strict';



// KONTAKTA OSS

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

const form = document.querySelector(".contact-form form");



// MENYKNAPP
menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    } else {
        menu.classList.add("open");
    }
});

// FORMULÄR

// Eventlyssnare
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = [];

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const errorList = document.querySelector('#error-list');

    if (name === "") {
        errors.push("Vänligen skriv ditt namn");
    }

    if (email === '') {
        errors.push('Vänligen skriv din e-postadress.');
    }

    if (message === '') {
        errors.push('Vänligen skriv ett meddelande.');
    }

    errorList.innerHTML = '';

    errors.forEach(function(error) {
        const li =document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
    }
)
});

