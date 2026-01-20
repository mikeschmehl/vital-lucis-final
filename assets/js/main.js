// Diese Datei wurde automatisch wiederhergestellt.
// Fügen Sie hier bei Bedarf Ihr JavaScript hinzu.
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
});