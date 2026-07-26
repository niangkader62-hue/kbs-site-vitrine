/* =====================================================================
   KBS DIGITAL AGENCY — LOGIQUE FRONT-END
   Rendu dynamique depuis config.js · Tilt 3D · Hover reveal ·
   Modale d'achat (Paiement / WhatsApp) · Scroll reveal
   ===================================================================== */

(function () {
  "use strict";

  const CFG = window.KBS_CONFIG;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const fmt = (n) => new Intl.NumberFormat("fr-FR").format(n);
  const cur = CFG.brand.currency;

  /* ------------------------------------------------------------
     PROMO : calcul du prix réduit + affichage barré/nouveau prix
     (la promo s'éteint automatiquement après la date de fin)
  ------------------------------------------------------------ */
  const promoNotExpired =
    !CFG.promo || !CFG.promo.endDate || new Date() < new Date(CFG.promo.endDate);
  const promoActive = !!(CFG.promo && CFG.promo.active && promoNotExpired);
  const promoPct = promoActive ? CFG.promo.percent : 0;
  const discounted = (price) => Math.round((price * (100 - promoPct)) / 100);
  const priceHTML = (price) =>
    promoActive
      ? `<span class="price-old">${fmt(price)}</span><span class="price-new">${fmt(discounted(price))}</span>`
      : `<span class="price-new">${fmt(price)}</span>`;
  const promoBadge = promoActive
    ? `<span class="promo-badge">${CFG.promo.label}</span>`
    : "";

  /* ------------------------------------------------------------
     BANDEAU PROMO + COMPTE A REBOURS
     (base sur le temps -> fonctionne aussi bien au doigt qu'a la souris)
  ------------------------------------------------------------ */
  const promoBanner = $("#promoBanner");
  if (promoBanner && promoActive && CFG.promo.endDate) {
    const endTime = new Date(CFG.promo.endDate).getTime();
    promoBanner.innerHTML = `
      <span class="promo-banner-text">🔥 Offre de lancement <strong>${CFG.promo.label}</strong> sur tous nos services</span>
      <span class="promo-banner-count" id="promoCountdown"></span>`;
    promoBanner.classList.add("visible");
    const countdownEl = $("#promoCountdown");

    function tickCountdown() {
      const now = Date.now();
      const diff = endTime - now;
      if (diff <= 0) {
        promoBanner.classList.remove("visible");
        clearInterval(timer);
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      countdownEl.textContent = `${d}j ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
    }
    tickCountdown();
    const timer = setInterval(tickCountdown, 1000);

    function syncBannerOffset() {
      const h = promoBanner.classList.contains("visible") ? promoBanner.offsetHeight : 0;
      document.documentElement.style.setProperty("--banner-h", h + "px");
    }
    syncBannerOffset();
    window.addEventListener("resize", syncBannerOffset);
  } else if (promoBanner) {
    promoBanner.remove();
  }

  /* ------------------------------------------------------------
     MODALE D'ACHAT
  ------------------------------------------------------------ */
  const modal = $("#buyModal");
  const modalProduct = $("#modalProduct");
  const modalPay = $("#modalPay");
  const modalWa = $("#modalWhatsapp");

  function openBuyModal(productName, payUrl) {
    modalProduct.textContent = productName;
    modalPay.href = payUrl || CFG.payment.prestationsUrl;

    // Génère un bouton WhatsApp par numéro de l'agence
    const msg = encodeURIComponent(
      CFG.payment.whatsappTemplate.replace("{PRODUCT}", productName)
    );
    modalWa.innerHTML = CFG.contact.phones
      .map(
        (p) =>
          `<a class="wa-btn" href="https://wa.me/${p.wa}?text=${msg}" target="_blank" rel="noopener">
             <span>💬</span> WhatsApp · ${p.label}
           </a>`
      )
      .join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeBuyModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  $("#modalClose").addEventListener("click", closeBuyModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeBuyModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBuyModal();
  });

  // Délégation : tout élément [data-buy] ouvre la modale
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-buy]");
    if (trigger) {
      e.preventDefault();
      openBuyModal(trigger.getAttribute("data-buy"), trigger.getAttribute("data-pay"));
    }
  });

  // label, nom du produit (message WhatsApp), et URL de paiement automatisé de la catégorie
  const buyBtn = (label, product, payUrl) =>
    `<button class="btn btn-primary btn-block" data-buy="${product}" data-pay="${payUrl}">${label}</button>`;

  /* ------------------------------------------------------------
     RENDU : HERO STATS
  ------------------------------------------------------------ */
  $("#heroStats").innerHTML = CFG.stats
    .map(
      (s) =>
        `<li><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></li>`
    )
    .join("");

  /* ------------------------------------------------------------
     RENDU : APPS / SOLUTIONS
  ------------------------------------------------------------ */
  $("#appsGrid").innerHTML = CFG.apps
    .map((app) => {
      const glyph = app.icon || app.title.charAt(0);
      const tags = app.features.map((f) => `<span class="card-tag">${f}</span>`).join("");
      return `
      <article class="card app-card tilt">
        <div class="app-visual"><span class="glyph">${glyph}</span></div>
        <span class="card-cat">${app.category}</span>
        <h3 class="card-title">${app.title}</h3>
        <p class="card-desc">${app.description}</p>
        <div class="card-tags">${tags}</div>
        <a class="app-link" href="${app.url}" target="_blank" rel="noopener">
          Découvrir l'application <span class="arrow">→</span>
        </a>
      </article>`;
    })
    .join("");

  /* ------------------------------------------------------------
     RENDU : EQUIPE
  ------------------------------------------------------------ */
  $("#teamGrid").innerHTML = CFG.team
    .map((m) => {
      const visual = m.photo
        ? `<img src="${m.photo}" alt="${m.name}, ${m.role}" loading="lazy">`
        : `<span class="team-avatar-initial">${m.initial}</span>`;
      return `
      <article class="card team-card">
        <div class="team-photo-wrap">${visual}</div>
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
        <a class="team-contact" href="https://wa.me/${m.wa}" target="_blank" rel="noopener">💬 WhatsApp</a>
      </article>`;
    })
    .join("");

  /* ------------------------------------------------------------
     RENDU : FORMATIONS
  ------------------------------------------------------------ */
  $("#formationsGrid").innerHTML = CFG.formations
    .map((f) => {
      let visual;
      if (f.image) {
        visual = `<div class="app-visual"><img src="${f.image}" alt="${f.title}" loading="lazy"></div>`;
      } else if (f.brandIcons) {
        const logos = f.brandIcons
          .map((slug) => `<img class="brand-logo" src="https://cdn.simpleicons.org/${slug}/1c1815" alt="${slug}">`)
          .join("");
        visual = `<div class="app-visual brand-visual">${logos}</div>`;
      } else {
        visual = `<div class="app-visual"><span class="glyph">${f.icon || f.title.charAt(0)}</span></div>`;
      }
      return `
      <article class="card formation-card tilt">
        ${promoBadge}
        ${visual}
        <h3 class="card-title">${f.title}</h3>
        <p class="card-desc">${f.desc}</p>
        <div class="formation-prices">
          <div class="price-pill">
            <span class="p-label">En ligne</span>
            <span class="p-val">${priceHTML(f.online)}</span>
          </div>
          <div class="price-pill presentiel">
            <span class="p-label">Présentiel</span>
            <span class="p-val">${priceHTML(f.presentiel)}</span>
          </div>
        </div>
        ${buyBtn("S'inscrire", "Formation " + f.title, CFG.payment.formationsUrl)}
      </article>`;
    })
    .join("");

  /* ------------------------------------------------------------
     RENDU : PRESTATIONS
  ------------------------------------------------------------ */
  const icons = {
    target: "🎯",
    globe: "🌐",
    chat: "💬",
    cube: "🧊",
  };
  $("#prestationsGrid").innerHTML = CFG.prestations
    .map((p) => {
      const visual = p.image
        ? `<div class="app-visual"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>`
        : `<div class="app-visual"><span class="glyph">${icons[p.icon] || "✦"}</span></div>`;
      return `
      <article class="card prestation-card tilt">
        ${promoBadge}
        ${visual}
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="prestation-price">${priceHTML(p.price)} <span style="font-size:.8rem;color:var(--text-dim)">${cur}</span></div>
        <div class="prestation-unit">${p.unit}</div>
        ${buyBtn("Commander", "Prestation : " + p.title, CFG.payment.prestationsUrl)}
      </article>`;
    })
    .join("");

  /* ------------------------------------------------------------
     RENDU : PACKS
  ------------------------------------------------------------ */
  $("#packsGrid").innerHTML = CFG.packs
    .map((pack) => {
      const feats = pack.features
        .map((f) => `<li><span class="check">✓</span> ${f}</li>`)
        .join("");
      // Pack sur devis : tarif unique ; sinon double prix En ligne / Présentiel
      const priceBlock = pack.devis
        ? `<div class="pack-price">
             <span class="amount">${priceHTML(pack.online)}</span><span class="cur">${cur}</span>
             <div class="prestation-unit" style="margin-top:6px">sur devis</div>
           </div>`
        : `<div class="formation-prices">
             <div class="price-pill">
               <span class="p-label">En ligne</span>
               <span class="p-val">${priceHTML(pack.online)}</span>
             </div>
             <div class="price-pill presentiel">
               <span class="p-label">Présentiel</span>
               <span class="p-val">${priceHTML(pack.presentiel)}</span>
             </div>
           </div>`;
      return `
      <article class="card pack-card tilt ${pack.featured ? "featured" : ""}">
        ${promoBadge}
        ${pack.featured ? '<span class="pack-badge">Populaire</span>' : ""}
        <h3 class="pack-name">${pack.name}</h3>
        <p class="pack-tagline">${pack.tagline}</p>
        ${priceBlock}
        <ul class="pack-features">${feats}</ul>
        ${buyBtn("Choisir ce pack", pack.name, CFG.payment.packsUrl)}
      </article>`;
    })
    .join("");

  /* ------------------------------------------------------------
     RENDU : CONTACT
  ------------------------------------------------------------ */
  const genMsg = encodeURIComponent(
    CFG.payment.whatsappTemplate.replace("{PRODUCT}", "votre accompagnement digital")
  );
  $("#contactActions").innerHTML = CFG.contact.phones
    .map(
      (p) =>
        `<a class="btn btn-primary btn-lg" href="https://wa.me/${p.wa}?text=${genMsg}" target="_blank" rel="noopener">
           💬 WhatsApp ${p.label}
         </a>`
    )
    .join("");
  const emailLink = $("#contactEmailLink");
  emailLink.textContent = CFG.contact.email;
  emailLink.href = "mailto:" + CFG.contact.email;

  /* ------------------------------------------------------------
     RENDU : FOOTER
  ------------------------------------------------------------ */
  $("#footerBaseline").textContent = CFG.brand.baseline;
  $("#footerPhones").innerHTML = CFG.contact.phones
    .map((p) => `<li><a href="https://wa.me/${p.wa}" target="_blank" rel="noopener">${p.label}</a></li>`)
    .join("");
  const fe = $("#footerEmail");
  fe.textContent = CFG.contact.email;
  fe.href = "mailto:" + CFG.contact.email;

  const socialIcons = {
    tiktok: "🎵",
    facebook: "f",
  };
  $("#footerSocials").innerHTML = CFG.contact.socials
    .map(
      (s) =>
        `<li><a href="${s.url}" target="_blank" rel="noopener">
           <span class="social-dot">${socialIcons[s.icon] || "◆"}</span> ${s.name}
         </a></li>`
    )
    .join("");
  $("#footerCopy").textContent = `© ${new Date().getFullYear()} ${CFG.brand.name}. Tous droits réservés.`;

  /* ------------------------------------------------------------
     NAVBAR : scroll + menu mobile
  ------------------------------------------------------------ */
  const navWrap = $("#navWrap");
  window.addEventListener(
    "scroll",
    () => navWrap.classList.toggle("scrolled", window.scrollY > 30),
    { passive: true }
  );

  const burger = $("#navBurger");
  const mobileMenu = $("#mobileMenu");
  const toggleMenu = (open) => {
    burger.classList.toggle("open", open);
    mobileMenu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => toggleMenu(!mobileMenu.classList.contains("open")));
  $$("#mobileMenu a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  /* ------------------------------------------------------------
     SCROLL REVEAL (IntersectionObserver)
  ------------------------------------------------------------ */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal, .card").forEach((el, i) => {
    el.style.setProperty("--i", i % 8);
    io.observe(el);
  });

  /* ------------------------------------------------------------
     TILT 3D + HOVER REVEAL (halo qui suit la souris)
     Désactivé sur écrans tactiles / mobile.
  ------------------------------------------------------------ */
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (isFinePointer) {
    $$(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rotX = (0.5 - py) * 8; // inclinaison verticale
        const rotY = (px - 0.5) * 8; // inclinaison horizontale
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        // Position du halo (hover reveal)
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
})();
