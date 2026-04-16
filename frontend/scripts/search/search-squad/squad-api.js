export async function fetchSquad(squad) {
    // let url = "http://localhost:8080";

    // if (squad) {
    //     url += `/soldier/${encodeURIComponent(squad)}/squad`;
    // } else {
    //     throw new Error("Squad é obrigatório");
    // }

    // const response = await fetch(url);

    // if (!response.ok) {
    //     throw new Error("Erro ao buscar usuários");
    // }
    //json test 
    const response = await fetch('../scripts/search/search-squad/json-teste.json')
    return response.json();
}