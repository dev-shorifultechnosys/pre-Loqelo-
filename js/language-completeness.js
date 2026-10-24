/**
 * Loqelo final localization coverage.
 * Visual text only; screenshots provided by the client remain unmodified.
 * The original native #language control continues to drive all dictionaries.
 * Vanilla JS, no runtime dependencies.
 */
(() => {
  'use strict';
  const marquee = {
  "en": [
    "Home",
    "Garden care",
    "Office needs",
    "Everyday tasks",
    "Professionals",
    "Home cleaning",
    "Landscaping",
    "Installations",
    "Pet care",
    "Vehicle care",
    "Construction",
    "Personal care",
    "Moving & transport"
  ],
  "de": [
    "Zuhause",
    "Gartenpflege",
    "Bürobedarf",
    "Alltagsaufgaben",
    "Fachkräfte",
    "Hausreinigung",
    "Gartenbau",
    "Installationen",
    "Tierbetreuung",
    "Fahrzeugpflege",
    "Bauarbeiten",
    "Persönliche Betreuung",
    "Umzug & Transport"
  ],
  "fr": [
    "Maison",
    "Entretien du jardin",
    "Bureau",
    "Tâches quotidiennes",
    "Professionnels",
    "Ménage à domicile",
    "Paysagisme",
    "Installations",
    "Soins aux animaux",
    "Entretien auto",
    "Construction",
    "Soins personnels",
    "Déménagement & transport"
  ],
  "pl": [
    "Dom",
    "Pielęgnacja ogrodu",
    "Biuro",
    "Codzienne zadania",
    "Specjaliści",
    "Sprzątanie domu",
    "Architektura krajobrazu",
    "Instalacje",
    "Opieka nad zwierzętami",
    "Pielęgnacja aut",
    "Budownictwo",
    "Opieka osobista",
    "Przeprowadzki i transport"
  ]
};
  const messages = {
  "en": {
    "trustTitle": "Trusted professionals",
    "trustDesc": "Profiles and reviews are part of the planned experience.",
    "rangeTitle": "Wide range of services",
    "rangeDesc": "From home and garden to office and more.",
    "secureTitle": "Easy & secure",
    "secureDesc": "Designed for clear offers and confident decisions.",
    "oneTitle": "One place for everything",
    "oneDesc": "Explore needs and offers in one planned platform.",
    "requestTitle": "Describe a job",
    "requestBody": "One request, several services.",
    "compareTitle": "Compare offers",
    "compareBody": "Explore offers side by side.",
    "manageTitle": "Manage requests",
    "manageBody": "Keep track of your jobs.",
    "mobileTitle": "On the go",
    "mobileBody": "Available across devices.",
    "previewNote": "Platform concept screens supplied by Loqelo · illustrative data",
    "providerDashboard": "Explore the provider dashboard"
  },
  "de": {
    "trustTitle": "Vertrauenswürdige Profis",
    "trustDesc": "Profile und Bewertungen gehören zur geplanten Plattform.",
    "rangeTitle": "Vielfältige Dienstleistungen",
    "rangeDesc": "Von Haus und Garten bis Büro und mehr.",
    "secureTitle": "Einfach & sicher",
    "secureDesc": "Für klare Angebote und sichere Entscheidungen entwickelt.",
    "oneTitle": "Alles an einem Ort",
    "oneDesc": "Entdecken Sie Anfragen und Angebote auf einer Plattform.",
    "requestTitle": "Auftrag beschreiben",
    "requestBody": "Eine Anfrage, mehrere Leistungen.",
    "compareTitle": "Angebote vergleichen",
    "compareBody": "Angebote direkt gegenüberstellen.",
    "manageTitle": "Anfragen verwalten",
    "manageBody": "Behalten Sie Ihre Aufträge im Blick.",
    "mobileTitle": "Auch unterwegs",
    "mobileBody": "Auf verschiedenen Geräten verfügbar.",
    "previewNote": "Originale Plattformkonzepte von Loqelo · Beispieldaten",
    "providerDashboard": "Anbieter-Dashboard ansehen"
  },
  "fr": {
    "trustTitle": "Professionnels de confiance",
    "trustDesc": "Profils et avis sont prévus dans la future plateforme.",
    "rangeTitle": "Large choix de services",
    "rangeDesc": "De la maison au jardin, du bureau et au-delà.",
    "secureTitle": "Simple et sécurisé",
    "secureDesc": "Pour des devis clairs et des décisions sereines.",
    "oneTitle": "Tout au même endroit",
    "oneDesc": "Découvrez besoins et devis sur une seule plateforme.",
    "requestTitle": "Décrire une demande",
    "requestBody": "Une demande, plusieurs services.",
    "compareTitle": "Comparer les devis",
    "compareBody": "Consultez les offres côte à côte.",
    "manageTitle": "Gérer les demandes",
    "manageBody": "Suivez facilement vos projets.",
    "mobileTitle": "Partout avec vous",
    "mobileBody": "Accessible sur plusieurs appareils.",
    "previewNote": "Maquettes de la plateforme fournies par Loqelo · données fictives",
    "providerDashboard": "Découvrir le tableau de bord prestataire"
  },
  "pl": {
    "trustTitle": "Sprawdzeni specjaliści",
    "trustDesc": "Profile i opinie są częścią planowanej platformy.",
    "rangeTitle": "Szeroki wybór usług",
    "rangeDesc": "Od domu i ogrodu po biuro i inne potrzeby.",
    "secureTitle": "Prosto i bezpiecznie",
    "secureDesc": "Przejrzyste oferty i świadome decyzje.",
    "oneTitle": "Wszystko w jednym miejscu",
    "oneDesc": "Poznawaj potrzeby i oferty na jednej platformie.",
    "requestTitle": "Opisz zlecenie",
    "requestBody": "Jedno zgłoszenie, wiele usług.",
    "compareTitle": "Porównaj oferty",
    "compareBody": "Przeglądaj oferty obok siebie.",
    "manageTitle": "Zarządzaj zleceniami",
    "manageBody": "Śledź postępy swoich zadań.",
    "mobileTitle": "Także w drodze",
    "mobileBody": "Dostępne na różnych urządzeniach.",
    "previewNote": "Oryginalne makiety Loqelo · dane przykładowe",
    "providerDashboard": "Zobacz panel wykonawcy"
  }
};

  const uiLabels = {
  "en": {
    "modalPreviewHeading": "LOQELO PLATFORM PREVIEW",
    "previous": "Previous",
    "next": "Next",
    "promotionalVideo": "Loqelo · Promotional video",
    "prelaunchEyebrow": "LOQELO · PRE-LAUNCH",
    "availableAfterLaunch": "Available after launch",
    "loginNotice": "Marketplace sign-in is planned for after launch. Join the customer or provider waitlist for updates.",
    "backHomepage": "Back to homepage",
    "privacyPreferences": "Privacy preferences",
    "privacyInfo": "We use essential cookies for the waitlist and admin security. Optional analytics helps us understand visits and sign-ups. No emails or form details are sent to analytics.",
    "essentialOnly": "Essential only",
    "acceptAnalytics": "Accept analytics",
    "cookieSettings": "Cookie settings"
  },
  "de": {
    "modalPreviewHeading": "LOQELO · PLATTFORMVORSCHAU",
    "previous": "Zurück",
    "next": "Weiter",
    "promotionalVideo": "Loqelo · Werbevideo",
    "prelaunchEyebrow": "LOQELO · VOR DEM START",
    "availableAfterLaunch": "Nach dem Start verfügbar",
    "loginNotice": "Die Anmeldung am Marktplatz ist erst nach dem Start geplant. Tragen Sie sich für Updates in die Warteliste ein.",
    "backHomepage": "Zur Startseite",
    "privacyPreferences": "Datenschutzeinstellungen",
    "privacyInfo": "Essenzielle Cookies sichern Warteliste und Verwaltung. Optionale Analysen helfen uns, Besuche und Anmeldungen zu verstehen. E-Mail-Adressen und Formularinhalte werden nicht an Analysetools gesendet.",
    "essentialOnly": "Nur notwendige",
    "acceptAnalytics": "Analyse akzeptieren",
    "cookieSettings": "Cookie-Einstellungen"
  },
  "fr": {
    "modalPreviewHeading": "LOQELO · APERÇU DE LA PLATEFORME",
    "previous": "Précédent",
    "next": "Suivant",
    "promotionalVideo": "Loqelo · Vidéo de présentation",
    "prelaunchEyebrow": "LOQELO · AVANT LE LANCEMENT",
    "availableAfterLaunch": "Disponible après le lancement",
    "loginNotice": "La connexion à la plateforme sera proposée après son lancement. Inscrivez-vous sur la liste d’attente pour les actualités.",
    "backHomepage": "Retour à l’accueil",
    "privacyPreferences": "Préférences de confidentialité",
    "privacyInfo": "Les cookies essentiels protègent la liste d’attente et l’administration. Les statistiques facultatives nous aident à comprendre les visites et inscriptions. Aucune adresse e-mail ni donnée de formulaire n’est transmise aux outils d’analyse.",
    "essentialOnly": "Essentiels uniquement",
    "acceptAnalytics": "Accepter les statistiques",
    "cookieSettings": "Paramètres des cookies"
  },
  "pl": {
    "modalPreviewHeading": "LOQELO · PODGLĄD PLATFORMY",
    "previous": "Poprzedni",
    "next": "Dalej",
    "promotionalVideo": "Loqelo · Film promocyjny",
    "prelaunchEyebrow": "LOQELO · PRZED STARTEM",
    "availableAfterLaunch": "Dostępne po uruchomieniu",
    "loginNotice": "Logowanie do platformy będzie dostępne po starcie. Dołącz do listy oczekujących, aby otrzymywać informacje.",
    "backHomepage": "Powrót na stronę główną",
    "privacyPreferences": "Ustawienia prywatności",
    "privacyInfo": "Niezbędne pliki cookie chronią listę oczekujących i panel administracyjny. Opcjonalne statystyki pomagają analizować odwiedziny i zapisy. E-maile i treści formularzy nie trafiają do narzędzi analitycznych.",
    "essentialOnly": "Tylko niezbędne",
    "acceptAnalytics": "Akceptuję analitykę",
    "cookieSettings": "Ustawienia cookies"
  }
};
  const picker = document.getElementById('language');
  if (!picker) return;

  function translateExtra() {
    const lang = Object.hasOwn(messages, picker.value) ? picker.value : 'en';
    const dictionary = {...messages[lang],...uiLabels[lang]};
    document.querySelectorAll('[data-local-extra]').forEach(element => {
      const translated = dictionary[element.dataset.localExtra];
      if (typeof translated === 'string') element.textContent = translated;
    });
    document.querySelectorAll('[data-local-strip]').forEach(element => {
      const index = Number(element.dataset.localStrip.slice(1));
      if (Number.isInteger(index) && marquee[lang][index]) element.textContent = marquee[lang][index];
    });
    // Other native modules handle form/FAQ/footer content and locale-aware country names.
    document.documentElement.lang = lang;
    document.querySelector('.designed-strip__viewport')?.setAttribute('aria-label', {
      en:'Scrolling list of service categories',de:'Laufende Liste der Dienstleistungskategorien',
      fr:'Liste défilante des catégories de services',pl:'Przewijana lista kategorii usług'
    }[lang]);
  }
  picker.addEventListener('change', translateExtra);
  translateExtra();
})();
