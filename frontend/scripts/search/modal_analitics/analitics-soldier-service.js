import { findFOCategoryAnalitics } from "./analitics-soldier-api.js"
import {extractCategoryData, extractFOAll, calculatePercentage} from "../../healpers.js"


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
