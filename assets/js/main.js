// Liquid Glass Navbar Effekte
document.addEventListener('DOMContentLoaded', () => {
    console.log('main.js geladen.');

    const header = document.getElementById('header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Liquid Sliding Pill Effekt
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    if (navLinks && links.length > 0) {
        links.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                const rect = link.getBoundingClientRect();
                const navRect = navLinks.getBoundingClientRect();
                
                navLinks.style.setProperty('--pill-left', `${rect.left - navRect.left}px`);
                navLinks.style.setProperty('--pill-width', `${rect.width}px`);
                navLinks.style.setProperty('--pill-height', `${rect.height}px`);
                navLinks.style.setProperty('--pill-top', `${rect.top - navRect.top}px`);
                
                navLinks.classList.add('has-active');
            });
        });
        
        navLinks.addEventListener('mouseleave', () => {
            navLinks.classList.remove('has-active');
        });
    }
});