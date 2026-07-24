# 🚀 Guide de déploiement — KBS Digital Agency

Ce guide vous accompagne pas à pas pour **mettre votre site en ligne gratuitement**
sur Netlify, puis pour **acheter un nom de domaine professionnel** (ex. `kbsdigital.com`).

---

## PARTIE 1 — Déployer gratuitement sur Netlify

Netlify héberge gratuitement les sites statiques (HTML/CSS/JS), avec HTTPS inclus.
Vous avez **deux méthodes**. La méthode B est recommandée pour les mises à jour futures.

### ✅ Méthode A — La plus rapide (glisser-déposer, 2 minutes)

1. Créez un compte gratuit sur **https://app.netlify.com** (connexion possible avec Google ou GitHub).
2. Sur votre ordinateur, ouvrez le dossier du projet `kbs-site-vitrine`.
3. Allez sur **https://app.netlify.com/drop**.
4. **Glissez-déposez le dossier complet** `kbs-site-vitrine` dans la zone indiquée.
5. C'est fait ✨ Netlify génère une URL du type `https://kbs-digital-agency.netlify.app`.

> Pour mettre à jour le site plus tard avec cette méthode, il faut re-glisser le dossier à chaque fois.

### ✅ Méthode B — Recommandée (via GitHub, mises à jour automatiques)

Le site est déjà sur GitHub. En le connectant à Netlify, **chaque modification poussée sur GitHub
met automatiquement le site à jour** en ligne.

1. Connectez-vous sur **https://app.netlify.com**.
2. Cliquez sur **« Add new site »** → **« Import an existing project »**.
3. Choisissez **GitHub** et autorisez Netlify à accéder à vos dépôts.
4. Sélectionnez le dépôt **`kbs-site-vitrine`**.
5. Réglages de build (déjà configurés dans le fichier `netlify.toml`) :
   - **Build command** : *(laisser vide)*
   - **Publish directory** : `.` (le point, c'est-à-dire la racine)
6. Cliquez sur **« Deploy site »**.
7. Après ~30 secondes, votre site est en ligne, avec HTTPS automatique 🔒.

> À chaque fois que vous modifierez `config.js` (prix, liens…) et pousserez sur GitHub,
> le site se mettra à jour tout seul.

### 🔧 Personnaliser le nom `.netlify.app`

Dans Netlify : **Site settings → Domain management → Options → Edit site name**.
Choisissez par exemple `kbs-digital-agency` → votre site devient
`https://kbs-digital-agency.netlify.app`.

---

## PARTIE 2 — Acheter un nom de domaine professionnel

Un domaine comme **`kbsdigital.com`** renforce votre crédibilité et remplace l'URL `.netlify.app`.

### Étape 1 — Choisir et acheter le domaine

Chez un **registrar** (vendeur de domaines) fiable. Comparatif :

| Registrar | Prix indicatif `.com` / an | Avantages |
|-----------|----------------------------|-----------|
| **Namecheap** (recommandé) | ~10–12 € | Interface simple, WHOIS privé gratuit, bon support |
| **Cloudflare Registrar** | Prix coûtant (~9 €) | Le moins cher, mais compte Cloudflare requis |
| **OVH** (🇫🇷/🌍 Afrique) | ~10–15 € | Support en français, paiement local plus facile |
| **Gandi** | ~15 € | Sérieux, éthique, francophone |
| **GoDaddy** | ~1ʳᵉ année pas chère, renouvellement + cher | Très connu, attention aux prix de renouvellement |

**Marche à suivre :**
1. Allez sur le site du registrar (ex. **https://www.namecheap.com**).
2. Recherchez `kbsdigital.com` (ou `.net`, `.io`, `.agency`, `.ml` pour le Mali…).
3. Si disponible, ajoutez-le au panier et payez (carte bancaire, PayPal, parfois Mobile Money via OVH).
4. Activez la **protection WHOIS / vie privée** (souvent gratuite) pour masquer vos coordonnées personnelles.

> 💡 Astuce : achetez aussi `.net` ou `.digital` en plus si le budget le permet, pour protéger votre marque.

### Étape 2 — Relier le domaine à Netlify

1. Dans Netlify : **Site settings → Domain management → Add a domain**.
2. Saisissez `kbsdigital.com` puis validez.
3. Netlify vous propose deux options :

   **Option recommandée — utiliser les serveurs DNS de Netlify :**
   - Netlify affiche 4 adresses de serveurs de noms (ex. `dns1.p01.nsone.net`…).
   - Allez chez votre registrar → section **DNS / Nameservers** de votre domaine.
   - Remplacez les serveurs de noms par ceux fournis par Netlify.
   - Attendez la propagation (de 1 h à 24 h).

   **Option alternative — garder le DNS du registrar :**
   - Ajoutez chez le registrar un enregistrement **A** pointant vers l'IP de Netlify (`75.2.60.5`).
   - Ajoutez un enregistrement **CNAME** pour `www` pointant vers votre `xxx.netlify.app`.

4. Une fois relié, Netlify génère **automatiquement un certificat HTTPS gratuit** (Let's Encrypt) 🔒.
5. Votre site est désormais accessible sur **https://kbsdigital.com** 🎉.

### Étape 3 — Mettre à jour les liens dans le site

Après avoir mis vos vraies pages de paiement en ligne, ouvrez **`config.js`** et mettez à jour :
- `payment.automatedBaseUrl` → l'URL de votre tunnel Systeme.io / Chariow.
- Les URL des applications si elles migrent vers votre nouveau domaine
  (ex. `app.kbsdigital.com` au lieu de `xxx.netlify.app`).

Puis poussez sur GitHub (Méthode B) ou re-déposez le dossier (Méthode A).

---

## 📋 Récapitulatif express

1. **Héberger** → Netlify (gratuit, HTTPS inclus) via glisser-déposer ou GitHub.
2. **Nommer** → acheter `kbsdigital.com` chez Namecheap / OVH (~10–15 €/an).
3. **Relier** → pointer le domaine vers Netlify (serveurs DNS).
4. **Mettre à jour** → éditer `config.js` pour les liens de paiement et vos apps.

Besoin d'aide sur une étape précise ? Contactez KBS Digital Agency.
