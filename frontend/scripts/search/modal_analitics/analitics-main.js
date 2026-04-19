import {searchDataCategory} from "./analitics-service.js"

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

    const data = await searchDataCategory(soldierId);

    document.getElementById("kpi-total").innerText = data.totalFO;
    document.getElementById("kpi-positive").innerText = data.percentagePositive + "%";
    document.getElementById("kpi-negative").innerText = data.percentageNegative + "%";

    // criar logica para integração com o endpoint de fos
    chartFO = new Chart(document.getElementById("chartFO"), {
        type: "bar",
        data: {
            labels: ["FO+", "FO-"],
            datasets: [{
                data: [data.positiveAll, data.negativeALL],
                backgroundColor: [
                    "#22c55e", 
                    "#ef4444"  
                ]
            }]
        }
    });


    chartCategory = new Chart(document.getElementById("chartTimeline"), {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: "FO+",
                    data: data.positiveData
                },
                {
                    label: "FO-",
                    data: data.negativeData
                }
            ]
        }
    });
}