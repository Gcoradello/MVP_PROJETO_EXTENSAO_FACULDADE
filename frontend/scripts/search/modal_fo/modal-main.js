import {submitFO, selectFO, onModalOpen, defineCategory} from "./modal-api.js"

const modal = document.getElementById('foModal');
const buttonsCategory = document.querySelectorAll(".category-item");

// 🔹 inicialização
initEvents();

function initEvents() {
    modal.addEventListener('show.bs.modal', onModalOpen);

    document.getElementById("btn-submit-fo").addEventListener("click", submitFO);
    document.getElementById("btn-fo-plus").addEventListener("click", () => selectFO("plus"));
    document.getElementById("btn-fo-minus").addEventListener("click", () => selectFO("minus"));
    buttonsCategory.forEach(button => {

        button.addEventListener("click", () => {
            const value = button.dataset.value;

            buttonsCategory.forEach(btn => { btn.classList.remove("bg-primary", "text-on-primary", "border-primary");});

            button.classList.add("bg-primary", "text-on-primary", "border-primary");

            defineCategory(value);

        });
    });
}






