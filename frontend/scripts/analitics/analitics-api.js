// import { } from "../../scripts/search/json-teste/analitics-test.json"

export async function findAnaliticsBySquad (squad) {

    let URL = "http://localhost:8080/fo/"
    const METHOD = "GET"

    if (squad) {
          URL += `${encodeURIComponent(squad)}/squad`;
    } else {
        throw new Error("squad é obrigatório");
    }

    const response = await fetch(URL , {method: METHOD});

    if (!response.ok) {
        throw new Error("Erro ao buscar as FOs");
    }

    //const response = await fetch("./scripts/search/json-teste/analitics-test.json");

    return  response.json();
}