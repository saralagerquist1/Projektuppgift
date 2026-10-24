'use strict';

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

const form = document.querySelector(".contact-form form");

const errorList = document.querySelector("#errorlist");
const validatedText = document.querySelector("#validated");

let errorArr = [];

// MENYKNAPP
menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    } else {
        menu.classList.add("open");
    }

});

// FÖRMULÄR OCH VALIDERING
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const errors = validateForm(name, email, message);

    if (!validateForm(name, email, message)) {
        displayErrors();
    } else {
        errorList.innerHTML = "";
        saveHistory(name, email);
        displayValidated(name)
        form.reset();

    }
};

function validateForm(name, email, message) {


    let validate = true;
    errorArr = [];
    errorList.innerHTML = '';

    if (name.length === 0) {
        errorArr.push("Vänligen skriv ditt namn");
        validate = false;
    }

    if (email.length === 0) {
        errorArr.push('Vänligen skriv din e-postadress');
        validate = false;
    }

    if (message.length === 0) {
        errorArr.push('Vänligen skriv ett meddelande');
        validate = false;
    }

    return validate;

}


function displayErrors() {

    if (errorArr.length > 0) {
        for (let i = 0; i < errorArr.length; i++) {
            const liEl = document.createElement("li");
            liEl.innerHTML = (errorArr[i]);
            errorList.appendChild(liEl);
        }
    }

}

// SPARAR HISTORIK TILL LOCALSTORAGE
function saveHistory(name, email, message) {
    const user = {
        name: name,
        email: email
    }

    const localStorageData = localStorage.getItem("users");

    let users = JSON.parse(localStorageData);

    if (users === null) {
        users = [];
    }

    users.push(user);
    const usersJson = JSON.stringify(users);
    localStorage.setItem("users", usersJson);

    
}


function displayValidated(name) {
    const validatedText = document.querySelector("#validated");
    validatedText.textContent = `Tack för ditt meddelande, ${name}! Vi återkommer till dig så snart vi kan.`;
}

