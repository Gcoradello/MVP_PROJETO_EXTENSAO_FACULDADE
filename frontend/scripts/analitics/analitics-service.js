import { extractData } from "../healpers.js"
import { findAnaliticsBySquad } from "./analitics-api.js"


export async function searchDataSquad(squad) {

    const data = await findAnaliticsBySquad(squad);
    
    const dataResponse = extractData(data);
    return dataResponse;

}
