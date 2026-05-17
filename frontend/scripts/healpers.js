
function extractFOAll(data) {
    let positiveAll = 0;
    let negativeALL = 0;

    data.forEach(item => {
        positiveAll += item.positivesFOsQnt;
        negativeALL += item.negativesFOsQnt
    });

    return { positiveAll, negativeALL }
}

function extractCategoryData(data) {
    const categories = {};

    data.forEach(item => {
        if (!categories[item.categoryName]) {
            categories[item.categoryName] = { positive: item.positivesFOsQnt, negative: item.negativesFOsQnt };
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

export function extractData (data) {

    const { labels, positiveData, negativeData } = extractCategoryData(data);
    const { positiveAll, negativeALL } = extractFOAll(data);
    const totalFO = positiveAll + negativeALL;
    const percentageNegative = calculatePercentage(totalFO, negativeALL);
    const percentagePositive = calculatePercentage(totalFO, positiveAll);
    
    return { 
        labels, 
        positiveData, 
        negativeData, 
        positiveAll, 
        negativeALL, 
        percentagePositive, 
        percentageNegative,
        totalFO 
    }
}