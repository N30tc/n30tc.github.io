const contenu = document.getElementById('contenu');
const liens = document.querySelectorAll('nav a');

const pages = {
    accueil: 'Bienvenue sur mon SPA !',
    apropos: 'Je suis un développeur web en formation.',
    contact: 'Contactez-moi à : exemple@email.com'
};

function chargerPage(page) {
    contenu.innerHTML = pages[page] || 'Page non trouvée';
}

liens.forEach(lien => {
    lien.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        chargerPage(page);
    });
});


// Charger la page d'accueil par défaut
chargerPage('accueil');
