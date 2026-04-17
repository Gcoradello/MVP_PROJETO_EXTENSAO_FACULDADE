import {searchDataCategory} from "./analitics-api.js"

const modalAnalitics = document.getElementById('analyticsModal');
let soldierId = "";
let chartFO = null;
let chartCategory = null;

initEvents()

function initEvents() {
    modalAnalitics.addEventListener('show.bs.modal', onModalAnaliticsOpen);

    document.addEventListener("DOMContentLoaded", () => {
        const analyticsModal = document.getElementById("analyticsModal");

        analyticsModal.addEventListener("shown.bs.modal", () => {
            loadCharts(soldierId);
        });
    });
}

 function onModalAnaliticsOpen(event){

    const modalAnalitics = event.relatedTarget;
    soldierId = modalAnalitics.dataset.id;
    
}




// TODO - VAMOS UTILIZAR AS INFORMAÇÔES DA API OU VAMOS DEIXAR ESTATICO ????
async function loadCharts(soldierId) {

    if (chartFO) {
        chartFO.destroy(); 
    }

    if (chartCategory) {
        chartCategory.destroy(); 
    }

    chartFO = new Chart(document.getElementById("chartFO"), {
        type: "bar",
        data: {
            labels: ["FO+", "FO-"],
            datasets: [{
                data: [75, 25],
                backgroundColor: [
                    "#22c55e", // verde (FO+)
                    "#ef4444"  // vermelho (FO-)
                ]
            }]
        }
    });

    const dataCategory = await searchDataCategory(soldierId);

    chartCategory = new Chart(document.getElementById("chartTimeline"), {
        type: "bar",
        data: {
            labels: dataCategory.labels,
            datasets: [
                {
                    label: "FO+",
                    data: dataCategory.positiveData
                },
                {
                    label: "FO-",
                    data: dataCategory.negativeData
                }
            ]
        }
    });
}