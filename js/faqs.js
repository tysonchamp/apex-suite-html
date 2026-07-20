
        function toggleAccordion(button) {
            const item = button.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Optional: Close other accordions in the same group
            // const group = item.parentElement;
            // const activeItems = group.querySelectorAll('.accordion-item.active');
            // activeItems.forEach(activeItem => activeItem.classList.remove('active'));

            if (!wasActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    
