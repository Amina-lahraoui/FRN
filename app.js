/* Maklat Lwalida — prototype data & interactions */

const ALLERGENS = [
  { id: "gluten", label: "Sans gluten" },
  { id: "dairy", label: "Sans lactose" },
  { id: "nuts", label: "Sans noix" },
  { id: "eggs", label: "Sans œufs" },
];

const DIETARY = [
  { id: "halal", label: "Halal" },
  { id: "vegetarian", label: "Végétarien" },
  { id: "vegan", label: "Végan" },
];

const COOKS = [
  {
    id: "fatima",
    name: "Fatima Bennani",
    initials: "FB",
    specialty: "Tajines traditionnels",
    tags: ["Tajine Barkouk", "Tajine Sardines", "Maraq"],
    bio: "Spécialiste des tajines mijotés à la maison — prunes, amandes et chermoula comme à Meknès.",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: "aicha",
    name: "Aïcha El Fassi",
    initials: "AE",
    specialty: "Pastilla & pâtisserie Fès",
    tags: ["Pastilla mer", "Seffa", "Sellou"],
    bio: "Maîtresse de la pastilla croustillante et des douceurs de Fès, safran et cannelle.",
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "khadija",
    name: "Khadija Amrani",
    initials: "KA",
    specialty: "Pain khobz & msemen",
    tags: ["Khobz", "Msemen", "Batbout"],
    bio: "Boulangère du quartier — pain de semoule cuit au four chaque matin pour AUI.",
    rating: 4.9,
    reviews: 163,
  },
  {
    id: "nouria",
    name: "Nouria Tazi",
    initials: "NT",
    specialty: "Rfisa & plats de fête",
    tags: ["Rfisa", "Couscous", "Harira"],
    bio: "Les grands plats du vendredi et des fêtes — rfisa, couscous et harira réconfortante.",
    rating: 4.7,
    reviews: 112,
  },
];

const CONTAINER_DESIGNS = [
  {
    id: "rond",
    name: "Bol verre Isolé",
    subtitle: "Idéal pour tajines & sauces",
    photo: "assets/container-rond.jpg?v=4",
    features: ["Verre + housse isolante", "Motif zellige or", "Réutilisable"],
  },
  {
    id: "sac",
    name: "Sac isotherme",
    subtitle: "Idéal pour pain & plateaux",
    photo: "assets/container-sac.jpg?v=4",
    features: ["Sac livraison isolé", "Zip doré", "Écologique"],
  },
];

const DISHES = [
  {
    id: "barkouk",
    name: "Tajine Barkouk",
    cookId: "fatima",
    price: 34.92,
    section: "daily",
    allergens: ["nuts"],
    dietary: ["halal"],
    rating: 4.9,
    photo: "assets/dish-barkouk.jpg?v=3",
    description:
      "Tajine mijoté aux pruneaux (barkouk), amandes torréfiées et sésame — fait maison avec amour.",
    reviews: [
      { user: "Youssef", stars: 5, text: "Bssahtk ! Les pruneaux sont parfaits." },
      { user: "Lina", stars: 5, text: "Goût de chez Lwalida. Portion généreuse." },
    ],
  },
  {
    id: "sardin",
    name: "Tajine Sardines",
    cookId: "fatima",
    price: 34.77,
    section: "daily",
    allergens: [],
    dietary: ["halal"],
    rating: 4.8,
    photo: "assets/dish-sardin.jpg?v=5",
    description:
      "Sardines à la chermoula, pommes de terre et tomates — le classique de la côte, version maison.",
    reviews: [
      { user: "Amine", stars: 5, text: "Frais et bien assaisonné. Wallah delicious." },
    ],
  },
  {
    id: "bastila",
    name: "Pastilla fruit de mer",
    cookId: "aicha",
    price: 49.47,
    section: "traditions",
    allergens: ["gluten", "eggs", "dairy"],
    dietary: ["halal"],
    rating: 4.9,
    photo: "assets/dish-bastila.jpg?v=3",
    description:
      "Pastilla croustillante aux fruits de mer, crevettes, citron et fromage — un bijou de fête fait maison.",
    reviews: [
      { user: "Sara", stars: 5, text: "Croustillant dehors, fondant dedans. Waaaw." },
    ],
  },
  {
    id: "seffa",
    name: "Seffa",
    cookId: "aicha",
    price: 48.79,
    section: "traditions",
    allergens: ["gluten", "nuts"],
    dietary: ["halal", "vegetarian"],
    rating: 4.8,
    photo: "assets/dish-seffa.jpg?v=3",
    description:
      "La bonté maison de notre Seffa, faite avec amour et soin, juste comme maman — vermicelle, amandes et cannelle.",
    reviews: [
      { user: "Hajar", stars: 5, text: "Présentation magnifique, goût authentique." },
    ],
  },
  {
    id: "rfisa",
    name: "Rfisa",
    cookId: "nouria",
    price: 48.9,
    section: "traditions",
    allergens: ["gluten", "dairy"],
    dietary: ["halal"],
    rating: 4.9,
    photo: "assets/dish-rfisa.jpg?v=3",
    description:
      "Rfissa cuisinée avec amour — un goût de la cuisine de maman à chaque bouchée savoureuse.",
    reviews: [
      { user: "Mehdi", stars: 5, text: "Comme chez ma grand-mère. Choukran Nouria!" },
    ],
  },
  {
    id: "khobz",
    name: "Khobz de semoule",
    cookId: "khadija",
    price: 8.5,
    section: "bread",
    allergens: ["gluten"],
    dietary: ["halal", "vegetarian", "vegan"],
    rating: 4.9,
    photo:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    description:
      "Pain rond traditionnel cuit le matin — croûte dorée, mie moelleuse. Parfait avec un tajine.",
    reviews: [
      { user: "Imane", stars: 5, text: "Le meilleur khobz du campus." },
    ],
  },
  {
    id: "msemen",
    name: "Msemen (x4)",
    cookId: "khadija",
    price: 18.0,
    section: "bread",
    allergens: ["gluten", "dairy"],
    dietary: ["halal", "vegetarian"],
    rating: 4.8,
    photo: "assets/dish-msemen.jpg?v=5",
    description:
      "Galettes feuilletées beurrées, servies avec miel — idéales au petit-déj ou en accompagnement.",
    reviews: [
      { user: "Omar", stars: 5, text: "Croustillants et tièdes. Bssaha!" },
    ],
  },
  {
    id: "batbout",
    name: "Batbout farci",
    cookId: "khadija",
    price: 15.0,
    section: "bread",
    allergens: ["gluten"],
    dietary: ["halal"],
    rating: 4.7,
    photo: "assets/dish-batbout.jpg?v=5",
    description:
      "Mini pains farcis viande, laitue et tomate — snack parfait entre deux cours.",
    reviews: [
      { user: "Nadia", stars: 4, text: "Pratique et délicieux." },
    ],
  },
];

const state = {
  activeFilters: new Set(),
  search: "",
  allergyPrefs: {
    gluten: false,
    dairy: false,
    nuts: false,
    eggs: false,
  },
  favorites: ["fatima", "aicha", "khadija"],
  containerWithStudent: true,
  depositPaid: false,
  selectedContainer: "rond",
  activeScreen: "home",
};

/* ---------- helpers ---------- */
function cookById(id) {
  return COOKS.find((c) => c.id === id);
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.add("hidden"), 2600);
}

function dishMatchesFilters(dish) {
  if (state.search) {
    const q = state.search.toLowerCase();
    const cook = cookById(dish.cookId);
    const hay = `${dish.name} ${cook.name} ${dish.description}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }

  for (const f of state.activeFilters) {
    if (ALLERGENS.some((a) => a.id === f)) {
      // "Sans X" filter → dish must NOT contain allergen X
      if (dish.allergens.includes(f)) return false;
    } else if (DIETARY.some((d) => d.id === f)) {
      if (!dish.dietary.includes(f)) return false;
    }
  }
  return true;
}

/* ---------- filters ---------- */
function renderFilters() {
  const bar = document.getElementById("filters-bar");
  const chips = [...DIETARY, ...ALLERGENS];

  bar.innerHTML = chips
    .map((c) => {
      const active = state.activeFilters.has(c.id);
      const fromPref =
        state.allergyPrefs[c.id] && ALLERGENS.some((a) => a.id === c.id);
      const cls = [
        "filter-chip",
        active ? "active" : "",
        active && fromPref ? "allergy-active" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<button type="button" class="${cls}" data-filter="${c.id}">${c.label}</button>`;
    })
    .join("");

  bar.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.filter;
      if (state.activeFilters.has(id)) state.activeFilters.delete(id);
      else state.activeFilters.add(id);
      renderFilters();
      renderDishes();
    });
  });
}

function applyAllergyPrefsToFilters() {
  Object.entries(state.allergyPrefs).forEach(([id, on]) => {
    if (on) state.activeFilters.add(id);
    else state.activeFilters.delete(id);
  });
}

function formatPrice(n) {
  return `MAD ${Number(n).toFixed(2)}`;
}

/* ---------- chefs ---------- */
function renderChefs() {
  const el = document.getElementById("chef-rail");
  if (!el) return;
  el.innerHTML = COOKS.map(
    (c) => `
    <article class="chef-card">
      <div class="chef-avatar">${c.initials}</div>
      <strong>${c.name}</strong>
      <span class="chef-spec">${c.specialty}</span>
      <div class="chef-tags">${c.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <small>★ ${c.rating} · ${c.reviews} avis</small>
    </article>`
  ).join("");
}

/* ---------- section menus ---------- */
function renderMenuSections() {
  const daily = DISHES.filter((d) => d.section === "daily" && dishMatchesFilters(d));
  const traditions = DISHES.filter(
    (d) => d.section === "traditions" && dishMatchesFilters(d)
  );
  const bread = DISHES.filter((d) => d.section === "bread" && dishMatchesFilters(d));

  const dailyEl = document.getElementById("daily-grid");
  const tradEl = document.getElementById("tradition-list");
  const breadEl = document.getElementById("bread-rail");
  const dailyCount = document.getElementById("daily-count");

  if (dailyCount) {
    dailyCount.textContent =
      daily.length === 1 ? "1 plat" : `${daily.length} plats`;
  }

  if (dailyEl) {
    dailyEl.innerHTML = daily.length
      ? daily
          .map(
            (d) => `
        <button type="button" class="daily-card" data-dish="${d.id}">
          <img src="${d.photo}" alt="${d.name}" loading="lazy" />
          <span class="daily-name">${d.name}</span>
          <span class="daily-price">${formatPrice(d.price)}</span>
        </button>`
          )
          .join("")
      : `<p class="empty-mini">Aucun plat du jour pour ces filtres</p>`;
    dailyEl.querySelectorAll("[data-dish]").forEach((btn) => {
      btn.addEventListener("click", () => openDishSheet(btn.dataset.dish));
    });
  }

  if (tradEl) {
    tradEl.innerHTML = traditions.length
      ? traditions
          .map((d) => {
            const cook = cookById(d.cookId);
            return `
        <button type="button" class="tradition-row" data-dish="${d.id}">
          <div class="tradition-text">
            <strong>${d.name}</strong>
            <p>${d.description}</p>
            <span class="tradition-meta">${cook.name} · ${formatPrice(d.price)}</span>
          </div>
          <img src="${d.photo}" alt="${d.name}" loading="lazy" />
        </button>`;
          })
          .join("")
      : `<p class="empty-mini">Aucune tradition pour ces filtres</p>`;
    tradEl.querySelectorAll("[data-dish]").forEach((btn) => {
      btn.addEventListener("click", () => openDishSheet(btn.dataset.dish));
    });
  }

  if (breadEl) {
    breadEl.innerHTML = bread.length
      ? bread
          .map(
            (d) => `
        <button type="button" class="bread-card" data-dish="${d.id}">
          <img src="${d.photo}" alt="${d.name}" loading="lazy" />
          <strong>${d.name}</strong>
          <span>${formatPrice(d.price)}</span>
        </button>`
          )
          .join("")
      : `<p class="empty-mini">Pas de pain pour ces filtres</p>`;
    breadEl.querySelectorAll("[data-dish]").forEach((btn) => {
      btn.addEventListener("click", () => openDishSheet(btn.dataset.dish));
    });
  }
}

/* ---------- dishes ---------- */
function renderDishes() {
  renderMenuSections();
  const list = document.getElementById("dish-list");
  const filtered = DISHES.filter(dishMatchesFilters);

  document.getElementById("dish-count").textContent =
    filtered.length === 1 ? "1 plat" : `${filtered.length} plats`;

  if (!filtered.length) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Walu pour l'instant</strong>
        Aucun plat ne correspond. Essaie une demande personnalisée !
      </div>`;
    return;
  }

  list.innerHTML = filtered
    .map((d, i) => {
      const cook = cookById(d.cookId);
      const tags = [
        ...d.dietary.slice(0, 2).map((t) => {
          const label = DIETARY.find((x) => x.id === t)?.label || t;
          return `<span class="tag">${label}</span>`;
        }),
        ...d.allergens.slice(0, 2).map((a) => {
          const map = {
            gluten: "Gluten",
            dairy: "Lactose",
            nuts: "Noix",
            eggs: "Œufs",
          };
          return `<span class="tag warn">${map[a] || a}</span>`;
        }),
      ].join("");

      return `
        <button type="button" class="dish-card" data-dish="${d.id}" style="animation-delay:${i * 0.04}s">
          <img class="dish-photo" src="${d.photo}" alt="${d.name}" loading="lazy" />
          <div class="dish-body">
            <div class="dish-name">${d.name}</div>
            <div class="dish-cook">par ${cook.name} · ${cook.specialty}</div>
            <div class="dish-meta">${tags}</div>
            <div class="dish-footer">
              <span class="dish-price">${formatPrice(d.price)}</span>
              <span class="dish-rating">★ ${d.rating}</span>
            </div>
          </div>
        </button>`;
    })
    .join("");

  list.querySelectorAll(".dish-card").forEach((card) => {
    card.addEventListener("click", () => openDishSheet(card.dataset.dish));
  });
}

/* ---------- dish sheet ---------- */
function openDishSheet(id) {
  const d = DISHES.find((x) => x.id === id);
  if (!d) return;
  const cook = cookById(d.cookId);
  const content = document.getElementById("sheet-content");

  const tags = [
    ...d.dietary.map((t) => {
      const label = DIETARY.find((x) => x.id === t)?.label || t;
      return `<span class="tag">${label}</span>`;
    }),
    ...d.allergens.map((a) => {
      const map = { gluten: "Contient gluten", dairy: "Contient lactose", nuts: "Contient noix", eggs: "Contient œufs" };
      return `<span class="tag warn">${map[a]}</span>`;
    }),
  ].join("");

  const reviews = d.reviews
    .map(
      (r) => `
      <div class="review">
        <div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)} · ${r.user}</div>
        <p>${r.text}</p>
      </div>`
    )
    .join("");

  content.innerHTML = `
    <img class="sheet-photo" src="${d.photo}" alt="${d.name}" />
    <h2 class="sheet-title">${d.name}</h2>
    <p class="sheet-cook">${cook.name} · ${cook.specialty} · ★ ${cook.rating}</p>
    <div class="sheet-tags">${tags}</div>
    <p class="sheet-desc">${d.description}</p>
    <div class="sheet-reviews">
      <h4>Avis</h4>
      ${reviews}
    </div>
    <div class="sheet-actions">
      <button type="button" class="btn-secondary" id="sheet-fav">♥ Favorite</button>
      <button type="button" class="btn-primary" id="sheet-order">Commander · ${formatPrice(d.price)}</button>
    </div>`;

  document.getElementById("sheet-backdrop").classList.remove("hidden");

  document.getElementById("sheet-fav").addEventListener("click", () => {
    if (!state.favorites.includes(cook.id)) {
      state.favorites.push(cook.id);
      renderFavorites();
    }
    showToast(`${cook.name} ajoutée aux favorites`);
  });

  document.getElementById("sheet-order").addEventListener("click", () => {
    closeSheet();
    showToast(`Commande envoyée — ${d.name}. Bssaha!`);
  });
}

function closeSheet() {
  document.getElementById("sheet-backdrop").classList.add("hidden");
}

/* ---------- QR (simple pattern, not a real encoder) ---------- */
function renderQR() {
  const el = document.getElementById("qr-code");
  const seed = "ML-AUI-2847";
  const size = 21;
  const cells = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const isFinder =
        (x < 7 && y < 7) ||
        (x > size - 8 && y < 7) ||
        (x < 7 && y > size - 8);
      const finderOn =
        isFinder &&
        ((x % 7 === 0 || y % 7 === 0 || (x > 1 && x < 5 && y > 1 && y < 5) ||
          (x > size - 6 && x < size - 2 && y > 1 && y < 5) ||
          (x > 1 && x < 5 && y > size - 6 && y < size - 2)) ||
          (x === 0 || y === 0 || x === 6 || y === 6 ||
           x === size - 1 || x === size - 7 || y === size - 1 || y === size - 7));

      let on = false;
      if (isFinder) {
        const inTL = x < 7 && y < 7;
        const inTR = x > size - 8 && y < 7;
        const inBL = x < 7 && y > size - 8;
        const lx = inTR ? x - (size - 7) : x;
        const ly = inBL ? y - (size - 7) : y;
        const border = lx === 0 || ly === 0 || lx === 6 || ly === 6;
        const center = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
        on = border || center;
      } else {
        const h =
          (seed.charCodeAt((x + y) % seed.length) * (x + 3) * (y + 7)) % 7;
        on = h > 2;
      }
      if (on) cells.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
    }
  }
  el.innerHTML = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/><g fill="#0D0D0D">${cells.join("")}</g></svg>`;
}

function updateContainerStatus() {
  const pill = document.getElementById("status-pill");
  const text = document.getElementById("status-text");
  const btn = document.getElementById("btn-toggle-return");

  if (state.containerWithStudent) {
    pill.classList.add("with-student");
    pill.classList.remove("returned");
    text.textContent = "Chez l'étudiant";
    btn.textContent = "Marquer retourné";
  } else {
    pill.classList.remove("with-student");
    pill.classList.add("returned");
    text.textContent = "Retourné";
    btn.textContent = "Marquer chez moi";
  }
}

function renderContainerPick() {
  const el = document.getElementById("container-pick");
  const confirm = document.getElementById("pick-confirm");
  if (!el) return;

  el.innerHTML = CONTAINER_DESIGNS.map((c) => {
    const selected = state.selectedContainer === c.id;
    return `
      <button type="button" class="design-card ${selected ? "selected" : ""}" data-design="${c.id}" role="radio" aria-checked="${selected}">
        <img src="${c.photo}" alt="${c.name}" />
        <div class="design-body">
          <strong>${c.name}</strong>
          <span>${c.subtitle}</span>
          <ul>${c.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        </div>
        <span class="design-check">${selected ? "✓ Choisi" : "Choisir"}</span>
      </button>`;
  }).join("");

  el.querySelectorAll("[data-design]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedContainer = btn.dataset.design;
      renderContainerPick();
      const chosen = CONTAINER_DESIGNS.find((c) => c.id === state.selectedContainer);
      showToast(`Design « ${chosen.name} » sélectionné`);
    });
  });

  if (confirm) {
    const chosen = CONTAINER_DESIGNS.find((c) => c.id === state.selectedContainer);
    confirm.textContent = `Ton contenant actuel : ${chosen.name}`;
  }
}

/* ---------- impact chart ---------- */
function renderChart() {
  const chart = document.getElementById("bar-chart");
  // 12 deliveries × avg 4 km: car ~192g CO2/km, e-bike ~19g → ~90% less
  const ebikeKg = 0.9;
  const carKg = 9.2;

  chart.innerHTML = `
    <div class="bar-group">
      <div class="bar ebike" style="height: ${(ebikeKg / carKg) * 100}%">
        <span class="bar-value">${ebikeKg} kg</span>
      </div>
      <span class="bar-label">E-bike</span>
    </div>
    <div class="bar-group">
      <div class="bar car" style="height: 100%">
        <span class="bar-value">${carKg} kg</span>
      </div>
      <span class="bar-label">Voiture</span>
    </div>`;
}

/* ---------- profile ---------- */
function renderAllergyToggles() {
  const el = document.getElementById("allergy-toggles");
  el.innerHTML = ALLERGENS.map((a) => {
    const on = state.allergyPrefs[a.id];
    return `
      <div class="toggle-row">
        <span>${a.label}</span>
        <button type="button" class="toggle ${on ? "on" : ""}" data-allergy="${a.id}" role="switch" aria-checked="${on}" aria-label="${a.label}"></button>
      </div>`;
  }).join("");

  el.querySelectorAll(".toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.allergy;
      state.allergyPrefs[id] = !state.allergyPrefs[id];
      applyAllergyPrefsToFilters();
      renderAllergyToggles();
      renderFilters();
      renderDishes();
      showToast(
        state.allergyPrefs[id]
          ? `Filtre « ${ALLERGENS.find((a) => a.id === id).label} » activé`
          : `Filtre désactivé`
      );
    });
  });
}

function renderFavorites() {
  const el = document.getElementById("fav-list");
  const favs = state.favorites.map(cookById).filter(Boolean);

  if (!favs.length) {
    el.innerHTML = `<p style="color:var(--muted);font-size:0.85rem">Aucune favorite pour l'instant.</p>`;
    return;
  }

  el.innerHTML = favs
    .map(
      (c) => `
      <div class="fav-item">
        <div class="fav-avatar">${c.initials}</div>
        <div>
          <strong>${c.name}</strong>
          <small>${c.specialty} · ★ ${c.rating}</small>
        </div>
        <span class="fav-heart">♥</span>
      </div>`
    )
    .join("");
}

function renderTimeline() {
  const el = document.getElementById("order-timeline");
  const steps = [
    { label: "En préparation", time: "11:42 · Fatima", status: "done" },
    { label: "Récupéré (e-bike)", time: "12:05 · Campus gate", status: "done" },
    { label: "Livré", time: "12:18 · Résidence Al Akhawayn", status: "current" },
  ];

  el.innerHTML = steps
    .map(
      (s) => `
      <div class="timeline-step ${s.status}">
        <div class="tl-dot"></div>
        <div>
          <div class="tl-label">${s.label}</div>
          <div class="tl-time">${s.time}</div>
        </div>
      </div>`
    )
    .join("");
}

/* ---------- custom request modal ---------- */
function openModal() {
  const select = document.getElementById("req-cook");
  select.innerHTML = COOKS.map(
    (c) => `<option value="${c.id}">${c.name} — ${c.specialty}</option>`
  ).join("");

  const date = document.getElementById("req-date");
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  date.min = tomorrow.toISOString().slice(0, 10);
  date.value = tomorrow.toISOString().slice(0, 10);

  // Prefill allergy notes from prefs
  const notes = ALLERGENS.filter((a) => state.allergyPrefs[a.id])
    .map((a) => a.label)
    .join(", ");
  document.getElementById("req-allergies").value = notes
    ? `Préférences : ${notes}`
    : "";

  document.getElementById("custom-form").classList.remove("hidden");
  document.getElementById("modal-success").classList.add("hidden");
  document.getElementById("modal-backdrop").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-backdrop").classList.add("hidden");
}

/* ---------- navigation ---------- */
function switchScreen(name) {
  state.activeScreen = name;
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.toggle("active", s.dataset.screen === name);
  });
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.tab === name);
  });
}

/* ---------- init ---------- */
function init() {
  applyAllergyPrefsToFilters();
  renderFilters();
  renderChefs();
  renderDishes();
  renderQR();
  updateContainerStatus();
  renderContainerPick();
  renderChart();
  renderAllergyToggles();
  renderFavorites();
  renderTimeline();

  // Search
  document.getElementById("search-input").addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    renderDishes();
  });

  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchScreen(tab.dataset.tab));
  });

  // Custom request
  document.getElementById("btn-open-request").addEventListener("click", openModal);
  document.getElementById("btn-custom-cta").addEventListener("click", openModal);
  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  document.getElementById("btn-success-ok").addEventListener("click", closeModal);
  document.getElementById("modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });

  document.getElementById("custom-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const cook = cookById(document.getElementById("req-cook").value);
    const desc = document.getElementById("req-desc").value.trim();
    const date = document.getElementById("req-date").value;
    const formatted = new Date(date + "T12:00:00").toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    document.getElementById("custom-form").classList.add("hidden");
    document.getElementById("modal-success").classList.remove("hidden");
    document.getElementById("success-detail").textContent =
      `${cook.name} a reçu ta demande « ${desc.slice(0, 40)}${desc.length > 40 ? "…" : ""} » pour le ${formatted}. Elle peut accepter, refuser ou proposer une alternative.`;
  });

  // Container toggle
  document.getElementById("btn-toggle-return").addEventListener("click", () => {
    state.containerWithStudent = !state.containerWithStudent;
    updateContainerStatus();
    if (!state.containerWithStudent) {
      const n = document.getElementById("stat-packages");
      n.textContent = String(Number(n.textContent) + 1);
      showToast("Contenant retourné — +1 emballage évité !");
    } else {
      showToast("Contenant marqué chez toi");
    }
  });

  // Deposit
  document.getElementById("btn-pay-deposit").addEventListener("click", () => {
    if (state.depositPaid) return;
    state.depositPaid = true;
    const btn = document.getElementById("btn-pay-deposit");
    btn.disabled = true;
    btn.textContent = "Payé ✓";
    document.getElementById("deposit-paid-msg").classList.remove("hidden");
    showToast("Caution de 50 MAD payée. Choukran!");
  });

  // Sheet backdrop
  document.getElementById("sheet-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "sheet-backdrop") closeSheet();
  });
}

document.addEventListener("DOMContentLoaded", init);
