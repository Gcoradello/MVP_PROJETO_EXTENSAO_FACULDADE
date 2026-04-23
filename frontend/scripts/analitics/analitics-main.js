import { searchDataSquad  } from "./analitics-service.js";

let chartFOAnalitics = null;
let chartCategoryAnalitics = null;


// botão
document.getElementById("search-btn-analitics").addEventListener("click", () => {
    const squad = document.getElementById("search-input-analitics").value;
    loadCharts(squad);
})


async function loadCharts(squad) {

    if (chartFOAnalitics) {
        chartFOAnalitics.destroy(); 
    }

    if (chartCategoryAnalitics) {
        chartCategoryAnalitics.destroy(); 
    }

    const data = await searchDataSquad(squad);

    document.getElementById("squad-name").innerText = squad;
    document.getElementById("all-fo").innerText = data.totalFO;
    document.getElementById("all-fo-positive").innerText = data.percentagePositive + "%";
    document.getElementById("all-fo-negative").innerText = data.percentageNegative + "%";

    chartFOAnalitics = new Chart(document.getElementById("chartSquad"), {
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