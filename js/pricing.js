
        // Simple Pricing Toggle Logic
        const btnMonthly = document.getElementById('toggle-monthly');
        const btnAnnual = document.getElementById('toggle-annual');
        const priceElements = document.querySelectorAll('[data-monthly]');

        function setPricing(isAnnual) {
            if(isAnnual) {
                btnAnnual.classList.add('bg-white', 'text-primary', 'shadow-sm', 'border-outline-variant');
                btnAnnual.classList.remove('text-on-surface-variant', 'border-transparent');
                
                btnMonthly.classList.remove('bg-white', 'text-primary', 'shadow-sm', 'border-outline-variant');
                btnMonthly.classList.add('text-on-surface-variant', 'border-transparent');

                priceElements.forEach(el => el.textContent = el.getAttribute('data-annual'));
            } else {
                btnMonthly.classList.add('bg-white', 'text-primary', 'shadow-sm', 'border-outline-variant');
                btnMonthly.classList.remove('text-on-surface-variant', 'border-transparent');
                
                btnAnnual.classList.remove('bg-white', 'text-primary', 'shadow-sm', 'border-outline-variant');
                btnAnnual.classList.add('text-on-surface-variant', 'border-transparent');

                priceElements.forEach(el => el.textContent = el.getAttribute('data-monthly'));
            }
        }

        btnMonthly.addEventListener('click', () => setPricing(false));
        btnAnnual.addEventListener('click', () => setPricing(true));

        // Simple FAQ Accordion Logic
        document.querySelectorAll('section button').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.material-symbols-outlined');
                
                if (content && content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.textContent = 'expand_less';
                } else if (content) {
                    content.classList.add('hidden');
                    icon.textContent = 'expand_more';
                }
            });
        });
    
