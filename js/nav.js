const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbarLinks');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    // Alternar a classe 'active' no ícone de hamburger
    hamburger.classList.toggle('active');
    
    // Alternar a classe 'open' na navegação
    navbarLinks.classList.toggle('active');
    
    // Alternar a classe 'open' no overlay
    overlay.classList.toggle('open');
});