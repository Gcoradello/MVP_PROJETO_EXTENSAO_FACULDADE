export async function searchDataCategory(soldierId) {

    const data = await findFOCategoryAnalitics(soldierId);

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

    console.log(labels);
    console.log(positiveData);
    console.log(negativeData);

    return { labels, positiveData, negativeData };
}


async function findFOCategoryAnalitics(soldierId) {
    console.log(soldierId);

    // todo - implementar o endpoint
    const response = await fetch('../scripts/search/modal_analitics/analitics-test.json');

    return response.json();
    
}



