
// 🔹 estado central
let foRequest = {
    soldierId: null,
    squad: null,
    tag: "FO_POSSITIVE",
    observation: ""
};

export function onModalOpen(event) {
    const button = event.relatedTarget;

    foRequest.soldierId = button.dataset.id;
    foRequest.squad = button.dataset.squad;
    foRequest.tag = "FO_POSSITIVE";

    resetUI();
}

export function selectFO(type) {
    foRequest.tag = type === "plus" ? "FO_POSITIVE" : "FO_NEGATIVE";
    updateUI(type);
}

export async function submitFO() {
    foRequest.observation = document.getElementById("obs-FO").value;

    console.log(foRequest);

    
    const response = await fetch("http://localhost:8080/fo/include", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(foRequest)
    });

    if (!response.ok) {
        throw new Error("Erro ao enviar FO");
    }

    return response;
}

function updateUI(type) {
    const label = document.getElementById('statusLabel');
    const bar = document.getElementById('statusBar');
    const btnPlus = document.getElementById('btn-fo-plus');
    const btnMinus = document.getElementById('btn-fo-minus');

    if (type === 'plus') {
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

function resetUI() {
    updateUI("plus");
    document.getElementById("obs-FO").value = "";
}

