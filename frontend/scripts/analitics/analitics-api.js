// import { } from "../../scripts/search/json-teste/analitics-test.json"

export async function findAnaliticsBySquad (squad) {

    const response = await fetch("./scripts/search/json-teste/analitics-test.json");

    return  response.json();
}