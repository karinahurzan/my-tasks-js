'use strict';

const buttonFirstName = document.querySelector("#firstName");
buttonFirstName.addEventListener("click", changeFirstName);

function changeFirstName() {
    const newFirstName = prompt("Enter new First name");
    const textFirstName = document.querySelector("#text");
    let textArr = (textFirstName.textContent).split(" ");
    textArr[0] = newFirstName;
    textFirstName.textContent = textArr.join(" ");
}

const buttonLastName = document.querySelector("#lastName");
buttonLastName.addEventListener("click", changeLastName);

function changeLastName() {
    const newLastName = prompt("Enter new Last name");
    const textLastName = document.querySelector("#text");
    let textArr = (textLastName.textContent).split(" ");
    textArr[1] = newLastName;
    textLastName.textContent = textArr.join(" ");
}