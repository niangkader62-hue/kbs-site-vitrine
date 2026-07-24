/* =====================================================================
   KBS DIGITAL AGENCY — CONFIGURATION CENTRALE
   Toutes les données (textes, prix, liens, contacts) sont centralisées ici.
   Modifiez uniquement ce fichier pour mettre à jour le contenu du site.
   ===================================================================== */

const KBS_CONFIG = {

  /* ---------------------------------------------------------------
     1. IDENTITÉ DE LA MARQUE
  --------------------------------------------------------------- */
  brand: {
    name: "KBS Digital Agency",
    shortName: "KBS",
    baseline: "L'agence digitale qui propulse votre business à l'ère de l'IA.",
    description:
      "Solutions logicielles sur-mesure, formations d'élite et prestations digitales haut de gamme pour entrepreneurs ambitieux.",
    currency: "FCFA",
  },

  /* ---------------------------------------------------------------
     2. CONTACT & RÉSEAUX SOCIAUX
     Les numéros WhatsApp sont au format international sans espaces.
  --------------------------------------------------------------- */
  contact: {
    phones: [
      { label: "+223 76 90 80 31", wa: "22376908031" },
      { label: "+223 90 64 71 06", wa: "22390647106" },
    ],
    email: "niangkader62@gmail.com",
    socials: [
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@kbsdigitalagence?_r=1&_t=ZS-98HxJNsBMov",
        icon: "tiktok",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/1GjWDFACr5/",
        icon: "facebook",
      },
    ],
  },

  /* ---------------------------------------------------------------
     3. LIENS DE PAIEMENT AUTOMATISÉ (par catégorie)
     - Formations  → Systeme.io
     - Prestations & Packs → Chariow
  --------------------------------------------------------------- */
  payment: {
    formationsUrl: "https://niangkader62.systeme.io/8c6337b3",
    prestationsUrl: "https://djpacpqs.mychariow.shop",
    packsUrl: "https://djpacpqs.mychariow.shop",
    // Message WhatsApp pré-rempli (le nom du produit est injecté dynamiquement)
    whatsappTemplate:
      "Bonjour KBS Digital Agency 👋, je suis intéressé(e) par : {PRODUCT}. Pouvez-vous me donner plus d'informations ?",
  },

  /* ---------------------------------------------------------------
     4. SOLUTIONS LOGICIELLES (Applications)
  --------------------------------------------------------------- */
  apps: [
    {
      title: "Gestion des Tontines",
      category: "SaaS Financier",
      description:
        "Digitalisez vos tontines : suivi des cotisations, tours de bénéficiaires, rappels automatiques et transparence totale pour tous les membres.",
      features: ["Suivi des cotisations", "Rappels automatiques", "Tableau de bord clair"],
      url: "https://endearing-alpaca-99bd6a.netlify.app/",
      accent: "cyan",
    },
    {
      title: "Gestion d'Entreprise",
      category: "ERP / Gestion",
      description:
        "Pilotez votre entreprise depuis une seule interface : stocks, ventes, clients, factures et statistiques en temps réel.",
      features: ["Stocks & ventes", "Facturation", "Statistiques en temps réel"],
      url: "https://kbsauto-io.netlify.app/",
      accent: "blue",
    },
  ],

  /* ---------------------------------------------------------------
     5. FORMATIONS (Tarifs : En ligne / Présentiel)
     Paiement automatisé → payment.formationsUrl (Systeme.io)
  --------------------------------------------------------------- */
  formations: [
    { title: "Alibaba", desc: "Sourcing produits & import depuis la Chine.", online: 10000, presentiel: 20000 },
    { title: "E-commerce", desc: "Lancer et scaler une boutique en ligne rentable.", online: 20000, presentiel: 35000 },
    { title: "Intelligence Artificielle", desc: "Maîtriser l'IA pour booster votre productivité.", online: 20000, presentiel: 35000 },
    { title: "Montage vidéo CapCut", desc: "Montage vidéo pro pour réseaux sociaux.", online: 15000, presentiel: 25000 },
    { title: "Campagne publicitaire Meta/TikTok", desc: "Publicités rentables sur Facebook, Instagram & TikTok.", online: 25000, presentiel: 35000 },
    { title: "Formation au Closing", desc: "L'art de vendre et convertir par téléphone.", online: 15000, presentiel: 25000 },
    { title: "Monétisation TikTok + Boost", desc: "Générer des revenus et booster votre compte TikTok.", online: 15000, presentiel: 25000 },
    { title: "Monétisation YouTube", desc: "Créer et monétiser une chaîne YouTube.", online: 10000, presentiel: 20000 },
    { title: "Création de contenu", desc: "Produire du contenu viral et engageant.", online: 15000, presentiel: 30000 },
  ],

  /* ---------------------------------------------------------------
     6. PRESTATIONS TECHNIQUES & CRÉATIVES (à la carte)
     Paiement automatisé → payment.prestationsUrl (Chariow)
  --------------------------------------------------------------- */
  prestations: [
    {
      title: "Page de vente",
      description: "Landing page haute conversion, optimisée pour transformer vos visiteurs en clients.",
      price: 25000,
      unit: "forfait",
      icon: "target",
    },
    {
      title: "Site web dynamique",
      description: "Site professionnel, rapide et responsive qui incarne votre marque.",
      price: 100000,
      unit: "forfait",
      icon: "globe",
    },
    {
      title: "Community Management",
      description: "Gestion complète de vos réseaux sociaux : contenu, animation et croissance.",
      price: 100000,
      unit: "par mois",
      icon: "chat",
    },
    {
      title: "SaaS / Application",
      description: "Application web sur-mesure pensée pour automatiser et digitaliser votre activité.",
      price: 300000,
      unit: "à partir de",
      icon: "cube",
    },
  ],

  /* ---------------------------------------------------------------
     7. LES 7 PACKS STRATÉGIQUES (Tarifs : En ligne / Présentiel)
     Paiement automatisé → payment.packsUrl (Chariow)
     Le Pack 7 est proposé sur devis (tarif unique).
  --------------------------------------------------------------- */
  packs: [
    {
      name: "Pack 1 — Formation + Vente",
      tagline: "Apprenez et vendez immédiatement",
      online: 45000,
      presentiel: 80000,
      featured: false,
      features: ["1 formation au choix", "Page de vente offerte", "Configuration du tunnel de vente", "Accompagnement au lancement"],
    },
    {
      name: "Pack 2 — Lancement Produit",
      tagline: "Lancez votre produit avec impact",
      online: 50000,
      presentiel: 85000,
      featured: false,
      features: ["Page de vente optimisée", "Pack visuels de lancement", "Campagne de teasing", "Stratégie de lancement"],
    },
    {
      name: "Pack 3 — Visibilité Mensuel",
      tagline: "Restez visible tout le mois",
      online: 140000,
      presentiel: 160000,
      featured: false,
      features: ["Community management 1 mois", "Calendrier éditorial", "Création de contenus", "Rapport de performance"],
    },
    {
      name: "Pack 4 — Présence Pro",
      tagline: "Une présence digitale complète",
      online: 170000,
      presentiel: 190000,
      featured: true,
      features: ["Site web dynamique", "Identité visuelle", "Référencement de base", "Réseaux sociaux configurés"],
    },
    {
      name: "Pack 5 — Conversion & Ventes",
      tagline: "Transformez vos prospects en clients",
      online: 65000,
      presentiel: 80000,
      featured: false,
      features: ["Formation au Closing", "Scripts de vente", "Optimisation du tunnel", "Suivi des conversions"],
    },
    {
      name: "Pack 6 — IA & Automatisation",
      tagline: "Gagnez du temps grâce à l'IA",
      online: 70000,
      presentiel: 95000,
      featured: false,
      features: ["Formation Intelligence Artificielle", "Automatisation des tâches", "Assistant / chatbot", "Gain de productivité"],
    },
    {
      name: "Pack 7 — Tech / Projet Avancé",
      tagline: "Votre projet sur-mesure",
      online: 350000,
      devis: true,
      featured: false,
      features: ["Application / SaaS sur-mesure", "Cahier des charges complet", "Développement & déploiement", "Maintenance incluse"],
    },
  ],

  /* ---------------------------------------------------------------
     8. STATISTIQUES / PREUVES SOCIALES (section Hero)
  --------------------------------------------------------------- */
  stats: [
    { value: "50+", label: "Projets livrés" },
    { value: "9", label: "Formations d'élite" },
    { value: "2", label: "SaaS en production" },
    { value: "100%", label: "Clients satisfaits" },
  ],
};

// Export pour navigateur
window.KBS_CONFIG = KBS_CONFIG;
