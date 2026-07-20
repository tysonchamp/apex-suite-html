// FAQ Accordion
function toggleAccordion(button) {
    const item = button.parentElement;
    const wasActive = item.classList.contains('active');
    
    if (!wasActive) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Global Nav Scroll
    const nav = document.getElementById('global-nav') || document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-md');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.add('shadow-sm');
            }
        });
    }

    // Pricing Toggle Logic
    const btnMonthly = document.getElementById('toggle-monthly');
    const btnAnnual = document.getElementById('toggle-annual');
    const priceElements = document.querySelectorAll('[data-monthly]');

    if (btnMonthly && btnAnnual) {
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
    }

    // Simple FAQ Accordion Logic
    document.querySelectorAll('section button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (!content) return;
            const icon = button.querySelector('.material-symbols-outlined');
            if (!icon) return;
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.textContent = 'expand_less';
            } else {
                content.classList.add('hidden');
                icon.textContent = 'expand_more';
            }
        });
    });
});
