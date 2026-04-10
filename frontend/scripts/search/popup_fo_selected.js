function updateTacticalStatus(type) {
            const label = document.getElementById('statusLabel');
            const bar = document.getElementById('statusBar');
            const btnPlus = document.getElementById('btn-fo-plus');
            const btnMinus = document.getElementById('btn-fo-minus');

            if (type === 'plus') {
                label.innerText = 'FO+ ACTIVE';
                label.className = 'font-headline font-bold text-primary tracking-widest';
                bar.className = 'w-2 h-12 bg-primary';

                // Reset Buttons
                btnPlus.className = 'flex-1 py-3 border-2 border-primary text-primary font-headline text-xs font-bold tracking-widest uppercase transition-all bg-primary/10 hover:bg-primary hover:text-on-primary';
                btnMinus.className = 'flex-1 py-3 border-2 border-outline-variant text-outline-variant font-headline text-xs font-bold tracking-widest uppercase transition-all hover:border-error hover:text-error hover:bg-error/10';
            } else {
                label.innerText = 'FO- TERMINATED';
                label.className = 'font-headline font-bold text-error tracking-widest';
                bar.className = 'w-2 h-12 bg-error';

                // Set Active State for Minus
                btnMinus.className = 'flex-1 py-3 border-2 border-error text-error font-headline text-xs font-bold tracking-widest uppercase transition-all bg-error/10 hover:bg-error hover:text-on-error';
                btnPlus.className = 'flex-1 py-3 border-2 border-outline-variant text-outline-variant font-headline text-xs font-bold tracking-widest uppercase transition-all hover:border-primary hover:text-primary hover:bg-primary/10';
            }
        }