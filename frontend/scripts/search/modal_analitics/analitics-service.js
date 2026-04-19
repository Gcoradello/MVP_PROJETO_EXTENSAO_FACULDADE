import { findFOCategoryAnalitics } from "./analitics-api.js"


export async function searchDataCategory(soldierId) {

    const data = await findFOCategoryAnalitics(soldierId);

    
    const { labels, positiveData, negativeData } = extractCategoryData(data);
    const { positiveAll, negativeALL } = extractFOAll(data);
    const totalFO = positiveAll + negativeALL;
    const percentageNegative = calculatePercentage(totalFO, negativeALL);
    const percentagePositive = calculatePercentage(totalFO, positiveAll);

    const dataResponse = { 
        labels, 
        positiveData, 
        negativeData, 
        positiveAll, 
        negativeALL, 
        percentagePositive, 
        percentageNegative,
        totalFO 
    }
    return dataResponse;
}

function extractFOAll(data) {
    let positiveAll = 0;
    let negativeALL = 0;

    data.forEach(item => {
        if (item.tag === "FO_POSITIVE") {
            positiveAll++;
        } else {
            negativeALL++;
        }
    });

    return {positiveAll, negativeALL}
}

function extractCategoryData(data) {
    const categories = {};
    
    data.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = { positive: 0, negative: 0 };
        }

        if (item.tag === "FO_POSITIVE") {
            categories[item.category].positive++;
        } else {
            categories[item.category].negative++;
        }
    });

    const labels = Object.keys(categories);
    const positiveData = labels.map(cat => categories[cat].positive);
    const negativeData = labels.map(cat => categories[cat].negative);

    return { labels, positiveData, negativeData }
}

function calculatePercentage(total, valor) {
    if (total === 0) return 0; 
    return Math.round((valor / total) * 100);
}






