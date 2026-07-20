
        document.addEventListener('DOMContentLoaded', () => {
            const nav = document.getElementById('global-nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    nav.classList.add('shadow-md');
                    nav.classList.remove('shadow-sm');
                } else {
                    nav.classList.remove('shadow-md');
                    nav.classList.add('shadow-sm');
                }
            });
        });
    
