import {extractCategoryData, extractFOAll, calculatePercentage} from "../healpers.js"
import { findAnaliticsBySquad } from "./analitics-api.js"


export async function searchDataSquad(squad) {

    const data = await findAnaliticsBySquad(squad);

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
