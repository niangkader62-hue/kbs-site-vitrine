# KBS Digital Agency — Site Vitrine

Site vitrine technologique premium : **HTML / CSS / JavaScript vanilla**, sans build, 100 % responsive.
Design de luxe (glassmorphism, palette sombre navy + néons cyan, effets 3D tilt & hover reveal).

## 🗂️ Structure du projet

```
kbs-site-vitrine/
├── index.html        # Structure de la page
├── config.js         # ⭐ TOUTES les données (prix, liens, textes, contacts)
├── css/style.css     # Design premium (glassmorphism, néons, responsive)
├── js/main.js        # Logique : rendu dynamique, tilt 3D, modale d'achat
├── assets/favicon.svg
└── netlify.toml       # Configuration de déploiement
```

## ✏️ Modifier le contenu

Tout se modifie dans **`config.js`** (aucune connaissance technique requise) :
prix des formations, tarifs des packs, liens des applications, numéros WhatsApp,
liens de paiement Systeme.io / Chariow, réseaux sociaux.

> ⚠️ Pensez à remplacer `payment.automatedBaseUrl` (`https://systeme.io/`)
> par vos vraies pages de paiement Systeme.io ou Chariow.

## 🖥️ Tester en local

```bash
# Depuis le dossier du projet
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## 🚀 Déploiement Netlify (gratuit)

Voir le guide complet dans **`GUIDE-DEPLOIEMENT.md`**.

En résumé : glisser-déposer le dossier sur https://app.netlify.com/drop,
ou connecter ce dépôt GitHub à Netlify pour un déploiement automatique à chaque `git push`.
