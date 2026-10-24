/**
 * Loqelo — Stage 01 homepage interactions
 * ---------------------------------------------------------------
 * Human-readable, standalone ES6+ JavaScript.
 * No npm, no framework, no jQuery, no CDN and no inline scripts.
 *
 * Included now: slideshow, motion/hover/reduced-motion support,
 * responsive navigation, language selector, native dialog previews.
 * NOT included in Phase 01: contact-management backend, live login,
 * GA4, location-based translations, production consent processing.
 */
(() => {
  'use strict';

  // ---------------------------------------------------------------
  // Shared small helpers
  // ---------------------------------------------------------------
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ---------------------------------------------------------------
  // V9 alternate: static hero composition with no slideshow timers.
  // Motion (where allowed) is decorative CSS only; all important
  // text and signup buttons are fully accessible without animation.
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // Mobile menu: ARIA state, click outside, Escape, link close
  // ---------------------------------------------------------------
  const siteHeader = $('.site-header');
  const menuToggle = $('.site-header__menu-toggle');
  const nav = $('#site-nav');
  function setMenuOpen(open) {
    siteHeader.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    $('.icon use', menuToggle).setAttribute('href', open ? '#i-close' : '#i-menu');
  }
  menuToggle.addEventListener('click', () => setMenuOpen(!siteHeader.classList.contains('is-open')));
  nav.addEventListener('click', () => setMenuOpen(false));
  document.addEventListener('click', event => {
    if (!siteHeader.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  // ---------------------------------------------------------------
  // Local language switching for original V9 content and the static hero.
  // Production locale handling and consent live in separate scripts.
  // All copy is kept in a readable dictionary and the brand tagline
  // remains exactly as instructed by the Loqelo client.
  // ---------------------------------------------------------------
  const translations = {
    en: {
      navHome:'Home', navHow:'How it works', navServices:'Services', navCustomers:'For Customers', navProviders:'For Providers', navAbout:'FAQ', login:'Log in', joinWaitlist:'Join the waitlist', languageLabel:'Language',
      eyebrow:'Trusted services for a brighter tomorrow', launchInfo:'Launching February 2027', designedFor:'DESIGNED FOR', heroTitle1:'Everything', heroTitle2:'your place <em>needs.</em>', heroDescription:'Describe what you need in your own words. Loqelo helps identify the services, connect with local professionals, compare offers and choose who fits — all in one place.',
      customerCta:'Join as a Customer', providerCta:'Join as a Service Provider', heroNote:'Be among the first to hear when Loqelo launches.<br>Join our early-access waitlist.',
      thumbHome:'Home services', thumbGarden:'Garden care', thumbOffice:'Office solutions', previewBadge:'Service preview', 
      storyEyebrow:'SEE LOQELO IN ACTION',
      storyHeadline:'A simpler way to<br>get things done.',
      storyDescription:'Watch the journey from describing a job to matching local professionals, comparing offers and choosing a provider.',
      storyWatch:'Watch the video',
      journeyEyebrow:'HOW LOQELO WORKS',
      journeyHeadline:'From one sentence to the right pro.',
      step1Title:'Describe your need',
      step1Body:'Describe your job in your own words. Add photos, location and timing if helpful.',
      step2Title:'We find the services',
      step2Body:'Loqelo identifies the services and helps match your request with local providers.',
      step3Title:'Receive offers',
      step3Body:'Compare offers by price, timing and provider information.',
      step4Title:'Choose a provider',
      step4Body:'Review the offers and choose the provider who fits your needs.',
      benefitOne:'Service profiles', benefitTwo:'Compare offers', benefitThree:'Easy to explore'
    },
    de: {
      navHome:'Startseite', navHow:'So funktioniert’s', navServices:'Services', navCustomers:'Für Kunden', navProviders:'Für Anbieter', navAbout:'FAQ', login:'Anmelden', joinWaitlist:'Zur Warteliste', languageLabel:'Sprache',
      eyebrow:'Services für eine bessere Zukunft', launchInfo:'Start im Februar 2027', designedFor:'GEDACHT FÜR', heroTitle1:'Alles, was', heroTitle2:'Ihr Umfeld <em>braucht.</em>', heroDescription:'Finden Sie Dienstleister für Haus, Garten und Büro. Vergleichen Sie Angebote und wählen Sie den passenden Anbieter – an einem Ort.',
      customerCta:'Als Kunde vormerken', providerCta:'Als Anbieter vormerken', heroNote:'Erfahren Sie als Erste vom Start von Loqelo.<br>Jetzt auf die Warteliste setzen.',
      thumbHome:'Für Zuhause', thumbGarden:'Gartenpflege', thumbOffice:'Büroservice', previewBadge:'Service-Vorschau', 
      storyEyebrow:'LOQELO IN AKTION',
      storyHeadline:'Einfacher alles<br>erledigen.',
      storyDescription:'Erfahren Sie, wie Loqelo Menschen mit lokalen Dienstleistern für Haus, Garten und Büro verbindet.',
      storyWatch:'Video ansehen',
      journeyEyebrow:'SO FUNKTIONIERT LOQELO',
      journeyHeadline:'Von einem Satz zum passenden Profi.',
      step1Title:'Bedarf beschreiben',
      step1Body:'Beschreiben Sie Ihr Anliegen. Fotos helfen dabei.',
      step2Title:'Wir finden Profis',
      step2Body:'Loqelo verbindet Sie mit lokalen Dienstleistern.',
      step3Title:'Angebote erhalten',
      step3Body:'Preise, Bewertungen und Termine vergleichen.',
      step4Title:'Anbieter wählen',
      step4Body:'Entscheiden Sie sich für den passenden Profi.',
      benefitOne:'Dienstleisterprofile', benefitTwo:'Angebote vergleichen', benefitThree:'Einfach entdecken'
    },
    fr: {
      navHome:'Accueil', navHow:'Fonctionnement', navServices:'Services', navCustomers:'Pour les clients', navProviders:'Prestataires', navAbout:'FAQ', login:'Connexion', joinWaitlist:"Liste d’attente", languageLabel:'Langue',
      eyebrow:'Des services pour un avenir meilleur', launchInfo:'Lancement en février 2027', designedFor:'POUR TOUS LES BESOINS', heroTitle1:'Tout pour', heroTitle2:'votre <em>espace.</em>', heroDescription:'Trouvez des professionnels pour votre maison, votre jardin et votre bureau. Comparez les devis et choisissez le bon prestataire.',
      customerCta:'Rejoindre en tant que client', providerCta:'Rejoindre comme prestataire', heroNote:'Soyez informé du lancement de Loqelo.<br>Rejoignez notre liste d’attente.',
      thumbHome:'Maison', thumbGarden:'Jardin', thumbOffice:'Bureau', previewBadge:'Aperçu du service', 
      storyEyebrow:'LOQELO EN ACTION',
      storyHeadline:'Une façon plus simple<br>de tout faire.',
      storyDescription:'Découvrez comment Loqelo relie chacun à des professionnels locaux pour la maison, le jardin et le bureau.',
      storyWatch:'Voir la vidéo',
      journeyEyebrow:'COMMENT FONCTIONNE LOQELO',
      journeyHeadline:'D’une phrase au bon professionnel.',
      step1Title:'Décrivez votre besoin',
      step1Body:'Quelques mots suffisent. Ajoutez des photos.',
      step2Title:'Trouvez des pros',
      step2Body:'Loqelo vous met en relation avec des professionnels locaux.',
      step3Title:'Recevez des offres',
      step3Body:'Comparez devis, avis et disponibilités.',
      step4Title:'Choisissez un pro',
      step4Body:'Faites votre choix en toute confiance.',
      benefitOne:'Profils professionnels', benefitTwo:'Comparer les offres', benefitThree:'Simple à explorer'
    },
    pl: {
      navHome:'Strona główna', navHow:'Jak to działa', navServices:'Usługi', navCustomers:'Dla klientów', navProviders:'Dla wykonawców', navAbout:'FAQ', login:'Zaloguj się', joinWaitlist:'Lista oczekujących', languageLabel:'Język',
      eyebrow:'Zaufane usługi na lepsze jutro', launchInfo:'Start w lutym 2027', designedFor:'STWORZONE DLA', heroTitle1:'Wszystko,', heroTitle2:'czego <em>potrzebujesz.</em>', heroDescription:'Znajdź specjalistów do domu, ogrodu i biura. Porównaj oferty i wybierz odpowiedniego wykonawcę w jednym miejscu.',
      customerCta:'Dołącz jako klient', providerCta:'Dołącz jako wykonawca', heroNote:'Dowiedz się jako pierwszy o starcie Loqelo.<br>Dołącz do listy oczekujących.',
      thumbHome:'Dom', thumbGarden:'Ogród', thumbOffice:'Biuro', previewBadge:'Podgląd usługi', 
      storyEyebrow:'LOQELO W PRAKTYCE',
      storyHeadline:'Prostszy sposób,<br>by załatwić sprawy.',
      storyDescription:'Zobacz, jak Loqelo łączy klientów z lokalnymi fachowcami dla domu, ogrodu i biura.',
      storyWatch:'Obejrzyj film',
      journeyEyebrow:'JAK DZIAŁA LOQELO',
      journeyHeadline:'Od jednego zdania do fachowca.',
      step1Title:'Opisz potrzebę',
      step1Body:'Wystarczy zdanie. Możesz dodać zdjęcia.',
      step2Title:'Znajdź wykonawców',
      step2Body:'Loqelo łączy Cię z lokalnymi specjalistami.',
      step3Title:'Otrzymaj oferty',
      step3Body:'Porównaj ceny, opinie i dostępność.',
      step4Title:'Wybierz specjalistę',
      step4Body:'Wybierz odpowiednią osobę bez obaw.',
      benefitOne:'Profile usługodawców', benefitTwo:'Porównuj oferty', benefitThree:'Łatwe odkrywanie'
    }
  };

  const languageSelect = $('#language');
  function setLanguage(language) {
    const validLanguage = Object.hasOwn(translations, language) ? language : 'en';
    const dictionary = translations[validLanguage];
    document.documentElement.lang = validLanguage;
    languageSelect.value = validLanguage;
    $$('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (!Object.hasOwn(dictionary, key)) return;
      // This fixed, local dictionary is trusted project-owned markup.
      if (key === 'heroTitle2' || key === 'heroNote' || key === 'storyHeadline') element.innerHTML = dictionary[key];
      else element.textContent = dictionary[key];
    });
    try { window.localStorage.setItem('loqelo-language', validLanguage); } catch (_) { /* storage optional */ }
  }
  let storedLanguage = null;
  try { storedLanguage = window.localStorage.getItem('loqelo-language'); } catch (_) { /* storage optional */ }
  setLanguage(storedLanguage || (navigator.language || 'en').slice(0, 2));
  languageSelect.addEventListener('change', event => setLanguage(event.target.value));

  // ---------------------------------------------------------------
  // Navigate to live on-page forms; only pre-launch login uses a notice.
  // ---------------------------------------------------------------
  const notice = $('#section-dialog');
  $$('[data-open-waitlist]').forEach(button => {
    button.addEventListener('click', () => {
      const role = button.dataset.openWaitlist === 'provider' ? 'provider' : 'customer';
      const target = document.getElementById(role + '-signup');
      target?.scrollIntoView({behavior:prefersReducedMotion.matches?'auto':'smooth',block:'center'});
      window.setTimeout(() => target?.querySelector('input[type="email"]')?.focus({preventScroll:true}),prefersReducedMotion.matches?0:420);
    });
  });
  $$('[data-next]').forEach(button => {
    button.addEventListener('click', () => {
      const id = {how:'how-it-works',services:'services',customers:'for-customers',providers:'for-providers'}[button.dataset.next];
      if (id) document.getElementById(id)?.scrollIntoView({behavior:prefersReducedMotion.matches?'auto':'smooth',block:'start'});
      else if (notice && !notice.open) notice.showModal();
    });
  });
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog')?.close()));
  notice?.addEventListener('click', event => { if (event.target === notice) notice.close(); });
})();
