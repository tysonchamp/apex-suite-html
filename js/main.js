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

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('.material-symbols-outlined') : null;

    if (mobileMenuBtn && mobileMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                menuIcon.textContent = 'close';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuIcon.textContent = 'menu';
            }
        });
    }
});


// Enterprise ERP Pricing Calculator
document.addEventListener('DOMContentLoaded', function() {
    const inputBiz = document.getElementById('input-biz');
    if (!inputBiz) return; // Only run on pages with the calculator

    const inputLoc = document.getElementById('input-loc');
    const inputStaff = document.getElementById('input-staff');
    
    const displayBiz = document.getElementById('display-biz');
    const displayLoc = document.getElementById('display-loc');
    const displayStaff = document.getElementById('display-staff');
    
    const calcBizCost = document.getElementById('calc-biz-cost');
    const calcLocCost = document.getElementById('calc-loc-cost');
    const calcStaffCost = document.getElementById('calc-staff-cost');
    
    const totalBiz = document.getElementById('total-biz');
    const totalLoc = document.getElementById('total-loc');
    const totalStaff = document.getElementById('total-staff');
    
    const totalPrice = document.getElementById('total-price');
    
    const BASE_COST = 18000;
    const BIZ_COST = 10000;
    const LOC_COST = 3500;
    const STAFF_COST = 1200;
    
    function calculate() {
        const extraBiz = parseInt(inputBiz.value);
        const extraLoc = parseInt(inputLoc.value);
        const extraStaff = parseInt(inputStaff.value);
        
        displayBiz.textContent = extraBiz;
        displayLoc.textContent = extraLoc;
        displayStaff.textContent = extraStaff;
        
        const costBiz = extraBiz * BIZ_COST;
        const costLoc = extraLoc * LOC_COST;
        const costStaff = extraStaff * STAFF_COST;
        
        calcBizCost.textContent = '₹' + costBiz.toLocaleString();
        calcLocCost.textContent = '₹' + costLoc.toLocaleString();
        calcStaffCost.textContent = '₹' + costStaff.toLocaleString();
        
        const allowedBiz = 1 + extraBiz;
        const allowedLoc = 1 + extraBiz + extraLoc;
        const allowedStaff = 1 + extraBiz + extraLoc + extraStaff;
        
        totalBiz.textContent = allowedBiz;
        totalLoc.textContent = allowedLoc;
        totalStaff.textContent = allowedStaff;
        
        const finalPrice = BASE_COST + costBiz + costLoc + costStaff;
        totalPrice.textContent = '₹' + finalPrice.toLocaleString();
    }
    
    inputBiz.addEventListener('input', calculate);
    inputLoc.addEventListener('input', calculate);
    inputStaff.addEventListener('input', calculate);
});
