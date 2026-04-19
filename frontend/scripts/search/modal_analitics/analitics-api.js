

export async function findFOCategoryAnalitics(soldierId) {
    
    let URL = "http://localhost:8080/fo/"
    const METHOD = "GET"
    
    if (soldierId) {
          URL += `${encodeURIComponent(soldierId)}`;
    } else {
        throw new Error("id é obrigatório");
    }

    const response = await fetch(URL , {method: METHOD});

    if (!response.ok) {
        throw new Error("Erro ao buscar as FOs");
    }

    // teste
    // const response = await fetch('../scripts/search/json-teste/analitics-test.json');

    const data = response.json()

    return data;
    
}