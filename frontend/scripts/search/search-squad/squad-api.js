let URL = "http://localhost:8080/soldier/"
const METHOD = "GET"

export async function fetchSquad(squad) {

    if (squad) {
        URL += `${encodeURIComponent(squad)}/squad`;
    } else {
        throw new Error("Squad é obrigatório");
    }

    const response = await fetch(URL, {METHOD});

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    //json test 

    // let response = "";
    // if (squad == "alpha") {
    //     response = await fetch("./scripts/search/json-teste/json-teste-alpha.json");

    // } 
    
    return response.json();
}