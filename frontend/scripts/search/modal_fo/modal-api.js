const URL = "http://localhost:8080/fo/include"
const TAG_DEFAULT = "FO_POSITIVE" 
const HEADERS = {"Content-Type": "application/json"}
const METHOD = "POST"
const PLUS_TYPE = "plus"

// 🔹 estado central
let foRequest = {
    soldierId: null,
    squad: null,
    tag: TAG_DEFAULT,
    category: "",
    observation: ""
};

export function onModalOpen(event) {
    const button = event.relatedTarget;

    foRequest.soldierId = button.dataset.id;
    foRequest.squad = button.dataset.squad;
    foRequest.category

    resetUI();
}

export function selectFO(type) {
    foRequest.tag = type === PLUS_TYPE ? "FO_POSITIVE" : "FO_NEGATIVE";
    updateUIFO(type);
}

export async function submitFO() {
    foRequest.observation = document.getElementById("obs-FO").value;

    const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify(foRequest)
    });

    if (!response.ok) {
        throw new Error("Erro ao enviar FO");
    }

    return response;
}



function updateUIFO(type) {
    const label = document.getElementById('statusLabel');
    const bar = document.getElementById('statusBar');
    const btnPlus = document.getElementById('btn-fo-plus');
    const btnMinus = document.getElementById('btn-fo-minus');

    if (type === PLUS_TYPE) {
        label.innerText = 'FO+ POSITIVE';
        label.className = 'font-headline font-bold text-primary tracking-widest';
        bar.className = 'w-2 h-12 bg-primary';

        btnPlus.className = 'flex-1 py-3 border-2 border-primary text-primary ...';
        btnMinus.className = 'flex-1 py-3 border-2 border-outline-variant ...';
    } else {
        label.innerText = 'FO- NEGATIVE';
        label.className = 'font-headline font-bold text-error tracking-widest';
        bar.className = 'w-2 h-12 bg-error';

        btnMinus.className = 'flex-1 py-3 border-2 border-error text-error ...';
        btnPlus.className = 'flex-1 py-3 border-2 border-outline-variant ...';
    }
}

export function defineCategory(value) { foRequest.category = value; }

function resetUI() {
    updateUIFO(PLUS_TYPE);
    document.getElementById("obs-FO").value = "";
}

