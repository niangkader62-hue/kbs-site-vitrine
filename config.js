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
     3. LIENS DE PAIEMENT AUTOMATISÉ
     Remplacez ces URL par vos vraies pages Systeme.io / Chariow.
  --------------------------------------------------------------- */
  payment: {
    // Lien générique par défaut (à personnaliser produit par produit si besoin)
    automatedBaseUrl: "https://systeme.io/",
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
  --------------------------------------------------------------- */
  formations: [
    { title: "Alibaba", desc: "Sourcing produits & import depuis la Chine.", online: 10000, presentiel: 20000 },
    { title: "E-commerce", desc: "Lancer et scaler une boutique en ligne rentable.", online: 20000, presentiel: 35000 },
    { title: "Intelligence Artificielle", desc: "Maîtriser l'IA pour booster votre productivité.", online: 20000, presentiel: 35000 },
    { title: "Montage CapCut", desc: "Montage vidéo pro pour réseaux sociaux.", online: 15000, presentiel: 25000 },
    { title: "Campagne Meta / TikTok", desc: "Publicités rentables sur Facebook, Instagram & TikTok.", online: 25000, presentiel: 35000 },
    { title: "Closing", desc: "L'art de vendre et convertir par téléphone.", online: 15000, presentiel: 25000 },
    { title: "Monétisation TikTok", desc: "Générer des revenus grâce à TikTok.", online: 15000, presentiel: 25000 },
    { title: "Monétisation YouTube", desc: "Créer et monétiser une chaîne YouTube.", online: 10000, presentiel: 20000 },
    { title: "Création de Contenu", desc: "Produire du contenu viral et engageant.", online: 15000, presentiel: 30000 },
  ],

  /* ---------------------------------------------------------------
     6. PRESTATIONS TECHNIQUES (à la carte)
  --------------------------------------------------------------- */
  prestations: [
    {
      title: "Page de Vente",
      description: "Landing page haute conversion, optimisée pour transformer vos visiteurs en clients.",
      price: 50000,
      unit: "à partir de",
      icon: "target",
    },
    {
      title: "Site Web Vitrine",
      description: "Site professionnel, rapide et responsive qui incarne votre marque.",
      price: 100000,
      unit: "à partir de",
      icon: "globe",
    },
    {
      title: "Community Management",
      description: "Gestion complète de vos réseaux sociaux : contenu, animation et croissance.",
      price: 75000,
      unit: "par mois",
      icon: "chat",
    },
    {
      title: "Développement SaaS",
      description: "Application web sur-mesure pensée pour automatiser et digitaliser votre activité.",
      price: 250000,
      unit: "sur devis",
      icon: "cube",
    },
  ],

  /* ---------------------------------------------------------------
     7. LES 7 PACKS STRATÉGIQUES
     Tarifs indicatifs — ajustez selon votre grille commerciale.
  --------------------------------------------------------------- */
  packs: [
    {
      name: "Pack Starter",
      tagline: "Lancez votre présence en ligne",
      price: 75000,
      featured: false,
      features: ["Page de vente 1 produit", "Configuration réseaux sociaux", "1 visuel de marque", "Support 7 jours"],
    },
    {
      name: "Pack Business",
      tagline: "Structurez votre activité",
      price: 150000,
      featured: false,
      features: ["Site web vitrine (5 pages)", "Page de vente optimisée", "Pack 5 visuels", "SEO de base", "Support 14 jours"],
    },
    {
      name: "Pack Growth",
      tagline: "Accélérez votre croissance",
      price: 250000,
      featured: true,
      features: ["Site web professionnel", "Community management 1 mois", "Campagne publicitaire Meta/TikTok", "10 visuels premium", "Support prioritaire 30 jours"],
    },
    {
      name: "Pack E-commerce",
      tagline: "Vendez en ligne 24h/24",
      price: 300000,
      featured: false,
      features: ["Boutique en ligne complète", "Intégration paiement", "Formation gestion boutique", "Campagne de lancement", "Support 30 jours"],
    },
    {
      name: "Pack Formation Pro",
      tagline: "Montez en compétences",
      price: 100000,
      featured: false,
      features: ["3 formations au choix", "Accès présentiel & en ligne", "Certificat de participation", "Groupe privé d'entraide"],
    },
    {
      name: "Pack SaaS Sur-Mesure",
      tagline: "Digitalisez votre métier",
      price: 500000,
      featured: false,
      features: ["Application web personnalisée", "Cahier des charges complet", "Hébergement 1 an", "Formation à l'outil", "Maintenance 3 mois"],
    },
    {
      name: "Pack Élite 360°",
      tagline: "L'accompagnement total",
      price: 1000000,
      featured: false,
      features: ["Stratégie digitale complète", "Site + SaaS + E-commerce", "Community management 3 mois", "Campagnes publicitaires", "Accompagnement VIP illimité"],
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
