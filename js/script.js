'use strict';

// Hämta
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

const form = document.querySelector(".contact-form form");

const errorList = document.querySelector("#errorlist");
const validatedText = document.querySelector("#validated");


// Felmeddelande lista
let errorArr = [];

// MENYKNAPP
if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open")
        } else {
            menu.classList.add("open");
        }

    });
}

// Formulär och validering
if (form) {
    form.addEventListener("submit", onSubmit);
}

// Hanterar formulärets inskickning och kontrollerar att fälten är ifyllda
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

        form.reset();

    }
};

// Kontrollerar att namn, e-postadress och meddelande inte är tomma
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

// Visar felmeddelanden om något formulärfält inte är ifyllt.
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
// Sparar användarens namn och e-postadress i localStorage.
function saveHistory(name, email) {
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

// LUNCHMENY
const lunches = [
    {
        day: "DAGENS LUNCH",
        dish: "Krämig broccolisoppa",
        info: "Medföljer sallad och bröd",
        price: "129 kr"

    },
    {
        day: "MORGONDAGENS LUNCH",
        dish: "Pannbiff med potatis och stekt lök",
        info: "Medföljer sallad och bröd",
        price: "129 kr"
    },
    {
        day: "LUNCH I ÖVERMORGON",
        dish: "Hemlagad lasagne",
        info: "Medföljer sallad och bröd",
        price: "129 kr"
    }
];

let currentDay = 0;

const dayTitle = document.getElementById("lunch-day");
const dishText = document.getElementById("lunch-dish");
const dishInfo = document.getElementById("lunch-info");
const dishPrice = document.getElementById("lunch-price");
const prevButton = document.getElementById("prev-day");
const nextButton = document.getElementById("next-day");

// Visar aktuell lunch och anpassar knapparna efter vald dag
function showLunch() {
    dayTitle.textContent = lunches[currentDay].day;
    dishText.textContent = lunches[currentDay].dish;
    dishInfo.textContent = lunches[currentDay].info;
    dishPrice.textContent = lunches[currentDay].price;

    prevButton.hidden = currentDay === 0;

    nextButton.hidden = currentDay === lunches.length - 1;
}

// Visar nästa dags lunch när användaren klickar på framåtknappen.
nextButton.addEventListener("click", function () {
    if (currentDay < lunches.length - 1) {
        currentDay++;
        showLunch();
    }
});

// Visar föregående dags lunch när användaren klickar på bakåtknappen.
prevButton.addEventListener("click", function () {
    if (currentDay > 0) {
        currentDay--;
        showLunch();
    }
});

showLunch();