export function createSoldierCard(Soldier) {
    return `
        <div data-id="${Soldier.soldierId}" 
             class="flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors border-b border-outline-variant/20">

            <!-- FOTO + NOME -->
            <div class="flex items-center gap-4 w-1/3">
                <div class="w-12 h-12 overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="${Soldier.image}" />
                </div>
                <div>
                    <p class="text-xs text-outline">ID: ${Soldier.soldierId}</p>
                    <h3 class="font-bold text-on-surface">
                        ${Soldier.name}
                    </h3>
                </div>
            </div>

            <!-- SQUAD -->
            <div class="w-1/4 text-center">
                <p class="text-xs text-outline">Pelotão</p>
                <p class="text-primary font-bold">${Soldier.squad}</p>
            </div>
            <!-- TODO - BOTAO ANALITICS-->
            <!-- BOTÃO -->
            <div class="w-1/4 text-right">
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#analyticsModal"
                    class="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 hover:bg-surface-container-highest transition-colors">
                    ANALITCS
                </button>
            </div>

            <!-- BOTÃO -->
            <div class="w-1/4 text-right">
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#foModal"
                    data-id="${Soldier.soldierId}"
                    data-name="${Soldier.name}"
                    data-squad="${Soldier.squad}"
                    class="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 hover:bg-surface-container-highest transition-colors">
                    ADD FO
                </button>
            </div>

        </div>
    `;
}