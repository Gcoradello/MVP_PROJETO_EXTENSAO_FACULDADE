const URL = "http://localhost:8080/soldier/create" 
const HEADERS = {"Content-Type": "application/json"}
const METHOD = "POST"



export async function createSoldier (data) {

    const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Erro ao enviar FO");
    }

    return response;

    

 }