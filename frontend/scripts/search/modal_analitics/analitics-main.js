

document.addEventListener("DOMContentLoaded", () => {
    const analyticsModal = document.getElementById("analyticsModal");

    analyticsModal.addEventListener("shown.bs.modal", () => {
        loadCharts();
    });
});



// TODO - VAMOS UTILIZAR AS INFORMAÇÔES DA API OU VAMOS DEIXAR ESTATICO ????
function loadCharts() {

    new Chart(document.getElementById("chartFO"), {
        type: "doughnut",
        data: {
            labels: ["FO+", "FO-"],
            datasets: [{
                data: [75, 25]
            }]
        }
    });

    new Chart(document.getElementById("chartTimeline"), {
        type: "line",
        data: {
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
            datasets: [{
                label: "Observações",
                data: [5, 10, 8, 15, 20]
            }]
        }
    });
}