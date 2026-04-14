import {submitFO, selectFO, onModalOpen} from "./modal-api.js"

const modal = document.getElementById('foModal');

// 🔹 inicialização
initEvents();

function initEvents() {
    modal.addEventListener('show.bs.modal', onModalOpen);

    document.getElementById("btn-submit-fo").addEventListener("click", submitFO);
    document.getElementById("btn-fo-plus").addEventListener("click", () => selectFO("plus"));
    document.getElementById("btn-fo-minus").addEventListener("click", () => selectFO("minus"));
}



