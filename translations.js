const translations = {
    fr: {
        welcome: "Bienvenue chez Esprit Montagne",
        description: "Découvrez les meilleures offres de location et séjours à la montagne.",
        home: "Accueil",
        "rental-type": "Quel type de location...", 
        station: "Quelle station...",
        when: "Quand partir...",
        "flash-sales": "Nos ventes flash",
        "manigod-chalet": "Chalet Manoe",
        "val-disere-evolution": "🚠 Évolution2 🌕🌠",
        "spa-cabin": "Cabane Spa du Ruisseau",
        "search-placeholder": "Que recherchez-vous ?",
        "main-title": "Location de vacances et séjour à la montagne",
        "best-rentals-title": "Nos meilleures locations",
        "hotel-tsanteleina": "Hôtel Tsanteleina ⭐⭐⭐⭐",
        "hotel-alpina": "Hôtel Alpina ⭐⭐⭐⭐",
        "hotel-coeur": "Hôtel Au coeur du village ⭐⭐⭐⭐⭐",
        "favorites-title": "Nos coups de cœur",
        "vacation-rentals-title": "Vacances et séjours à la montagne",
        "residence-jade": "Résidence Le Cristal de Jade",
        "residence-alpes": "Résidence Les Grandes Alpes",
        "residence-bellevarde": "Résidence Les Balcons de Bellevarde",
        "copyright": "© 2024 Esprit Montagne by mich. --MCW-- Tous droits réservés.",
        "legal": "Mentions légales",
        "privacy": "Politique de confidentialité",
        "slider-title": "Esprit Montagne by mich",
        "slider-description": "Découvrez les meilleures offres de location et séjours à la montagne. Profitez d'une expérience unique en pleine nature !",
        "map-title": "Situer nos domaines",
        "video-title": "Lecteur vidéo Dailymotion",
        "map-iframe-title": "Carte des Alpes Françaises",
        "terms": "C.G.V",
        "logo-alt": "Logo Esprit Montagne",
        "cabin-title": "Cabane Spa du Ruisseau",
        "cabin-description": "Découvrez notre magnifique cabane spa nichée au cœur de Saint Nicolas La Chapelle. Un havre de paix pour une expérience unique en montagne.",
        "cabin-img1-alt": "Vue extérieure de la cabane",
        "cabin-img2-alt": "Intérieur cosy",
        "cabin-img3-alt": "Spa privé",
        "cabin-img4-alt": "Vue sur la montagne",
        "features-title": "Équipements et Services",
        "feature-spa": "Spa privatif",
        "feature-view": "Vue panoramique sur les montagnes",
        "feature-kitchen": "Cuisine équipée",
        "feature-wifi": "WiFi gratuit",
        "feature-parking": "Parking privé",
        "booking-title": "Réservation",
        "booking-info": "Pour toute réservation ou information complémentaire, contactez-nous :",
        "contact-phone": "Téléphone : +33 (0)4 50 XX XX XX",
        "contact-email": "Email : contact@espritmontagne.com"
    },
    en: {
        welcome: "Welcome to Esprit Montagne",
        description: "Discover the best rental deals and mountain getaways.",
        home: "Home",
        "rental-type": "What type of rental...",
        station: "Which station...", 
        when: "When to go...",
        "flash-sales": "Flash sales",
        "manigod-chalet": "Chalet Manoe",
        "val-disere-evolution": "🚠 Evolution2 🌕🌠",
        "spa-cabin": "Spa Cabin by the Stream",
        "search-placeholder": "What are you looking for?",
        "main-title": "Holiday rentals and mountain stays",
        "best-rentals-title": "Our best rentals",
        "hotel-tsanteleina": "Hotel Tsanteleina ⭐⭐⭐⭐",
        "hotel-alpina": "Hotel Alpina ⭐⭐⭐⭐",
        "hotel-coeur": "Hotel Au coeur du village ⭐⭐⭐⭐⭐",
        "favorites-title": "Our favorites",
        "vacation-rentals-title": "Mountain holidays and stays",
        "residence-jade": "Le Cristal de Jade Residence",
        "residence-alpes": "Les Grandes Alpes Residence",
        "residence-bellevarde": "Les Balcons de Bellevarde Residence",
        "copyright": "© 2024 Esprit Montagne by mich. --MCW-- All rights reserved.",
        "legal": "Legal notice",
        "privacy": "Privacy policy",
        "slider-title": "Esprit Montagne by mich",
        "slider-description": "Discover the best rental deals and mountain stays. Enjoy a unique experience in the heart of nature!",
        "map-title": "Locate our domains",
        "video-title": "Dailymotion Video Player",
        "map-iframe-title": "French Alps Map",
        "terms": "Terms & Conditions",
        "logo-alt": "Esprit Montagne Logo",
        "cabin-title": "Stream Spa Cabin",
        "cabin-description": "Discover our beautiful spa cabin nestled in the heart of Saint Nicolas La Chapelle. A haven of peace for a unique mountain experience.",
        "cabin-img1-alt": "Cabin exterior view",
        "cabin-img2-alt": "Cozy interior",
        "cabin-img3-alt": "Private spa",
        "cabin-img4-alt": "Mountain view",
        "features-title": "Amenities and Services",
        "feature-spa": "Private spa",
        "feature-view": "Panoramic mountain view",
        "feature-kitchen": "Fully equipped kitchen",
        "feature-wifi": "Free WiFi",
        "feature-parking": "Private parking",
        "booking-title": "Booking",
        "booking-info": "For any booking or additional information, please contact us:",
        "contact-phone": "Phone: +33 (0)4 50 XX XX XX",
        "contact-email": "Email: contact@espritmontagne.com"
    }
};

// Variable pour stocker la langue courante
let currentLanguage = 'fr';

// Fonction pour obtenir la langue courante
function getCurrentLanguage() {
    return currentLanguage;
}

// Fonction pour définir la langue courante
function setCurrentLanguage(lang) {
    currentLanguage = lang;
}

// Fonction pour mettre à jour les placeholders
function updatePlaceholders() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = translations[currentLanguage][key] || key;
        }
    });
}

// Fonction pour changer de langue
function switchLanguage(lang) {
    setCurrentLanguage(lang);
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = translations[lang][key] || key;
        } else {
            element.textContent = translations[lang][key] || key;
        }
    });

    // Mise à jour de la langue de Google Maps
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe) {
        let currentSrc = mapIframe.src;
        // Remplacer les paramètres de langue dans l'URL
        currentSrc = currentSrc.replace(/!2[a-z]{2}!2[a-z]{2}/g, lang === 'fr' ? '!2fr!2fr' : '!2en!2gb');
        mapIframe.src = currentSrc;
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter les écouteurs d'événements aux boutons de langue
    const buttons = document.querySelectorAll('.language-selector button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Initialiser avec la langue par défaut
    updatePlaceholders();
});
