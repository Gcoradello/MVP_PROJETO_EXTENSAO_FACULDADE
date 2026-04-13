export function createSoldierCard(Soldier) {
    return `
        <div  id="soldier-card" data-id="${Soldier.soldierId}" class="bg-surface-container-low p-6 group hover:bg-surface-container-high transition-colors relative">
            
            <div class="absolute top-0 right-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="flex items-start justify-between mb-6">
                <div class="w-16 h-16 bg-surface-container-highest overflow-hidden">
                    <img class="w-full h-full object-cover grayscale contrast-125"
                        src="${Soldier.image || 'https://randomuser.me/api/portraits/men/32.jpg'}" />
                </div>
                <span class="font-headline text-[10px] text-outline tracking-widest uppercase">
                    ID: ${Soldier.soldierId}
                </span>
            </div>

            <div class="space-y-4">
                <div>
                    <p class="font-label text-[10px] text-outline-variant uppercase tracking-tighter mb-1">
                        Full_Name
                    </p>
                    <h3 class="font-headline text-lg font-bold text-on-surface">
                        ${Soldier.name} ${Soldier.secondName}
                    </h3>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="font-label text-[10px] text-outline-variant uppercase tracking-tighter mb-1">
                            Pelotão
                        </p>
                        <p class="font-body text-sm text-primary">
                            ${Soldier.squad}
                        </p>
                    </div>

                    <div>
                        <p class="font-label text-[10px] text-outline-variant uppercase tracking-tighter mb-1">
                            Birth_Date
                        </p>
                        <p class="font-body text-sm text-on-surface-variant">
                            ${Soldier.birthDate}
                        </p>
                    </div>
                </div>

                <button
                    data-bs-toggle="modal"
                    data-bs-target="#foModal"
                    data-bs-toggle="modal"
                    data-bs-target="#foModal"
                    data-id="${Soldier.soldierId}"
                    data-name="${Soldier.name}"
                    data-squad="${Soldier.squad}"
                    data-birth="${Soldier.birthDate}"
                    class="w-full mt-4 bg-secondary-container text-on-secondary-container font-headline text-xs font-bold uppercase tracking-widest py-3 hover:bg-surface-container-highest transition-colors">
                    ADD FACT OBSERVED
                </button>
            </div>
        </div>
    `;
}
