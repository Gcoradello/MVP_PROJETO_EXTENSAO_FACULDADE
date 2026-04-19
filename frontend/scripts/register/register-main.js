import {createSoldier} from "./register-api.js"

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("form-war-name").value,
        soldierId: document.getElementById("form-id").value,
        squad: document.getElementById("form-squad").value
    };

    createSoldier(data); 
});