import { findFOCategoryAnalitics } from "./analitics-soldier-api.js"
import { extractData } from "../../healpers.js"


export async function searchDataCategory(soldierId) {

    const data = await findFOCategoryAnalitics(soldierId);

    const dataResponse = extractData(data);
    return dataResponse;
}
