
export function extractFOAll(data) {
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

export function extractCategoryData(data) {
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

export function calculatePercentage(total, valor) {
    if (total === 0) return 0; 
    return Math.round((valor / total) * 100);
}