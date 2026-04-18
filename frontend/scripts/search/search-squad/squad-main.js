import { createSoldierCard } from './squad-card.js';
import { fetchSquad } from './squad-api.js';

const container = document.getElementById("users-container");

async function loadSquad(search) {
    const squad = await fetchSquad(search);
    
    container.innerHTML = squad.map(createSoldierCard).join('');
}

// botão
document.getElementById("search-btn").addEventListener("click", () => {
    const searchValue = document.getElementById("search-input").value;
    loadSquad(searchValue);
});