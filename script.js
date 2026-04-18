/* ===========================
   GUNSHOT KAFE — script.js
=========================== */

// ===== PRODUCT DATA =====
const products = [
  // BURGERS
  {
    id: 1, name: "Classic Smash Burger", category: "burger",
    price: 149, popular: true,
    desc: "Crispy smash patty, melted cheddar, caramelised onions, secret sauce.",
    fullDesc: "Our signature smash burger features a thin, crispy-edged beef patty smashed to perfection on a hot griddle. Loaded with melted cheddar, caramelised onions, pickles, fresh lettuce, and our signature secret sauce — all nestled in a toasted brioche bun.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
  },
  {
    id: 2, name: "Double Inferno Burger", category: "burger",
    price: 199, popular: true,
    desc: "Double patty, jalapeños, habanero mayo, ghost pepper sauce.",
    fullDesc: "Not for the faint-hearted. Two thick beef patties stacked with fresh jalapeños, fiery habanero mayo, ghost pepper sauce, crispy onion rings, and smoked cheese. One bite and your taste buds will never be the same.",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80"
  },
  {
    id: 3, name: "Crispy Chicken Burger", category: "burger",
    price: 159, popular: false,
    desc: "Golden fried chicken, sriracha slaw, pickled cucumbers.",
    fullDesc: "A juicy buttermilk-marinated chicken breast fried to a golden crisp, topped with crunchy sriracha slaw, pickled cucumbers, and smoky aioli, all packed in a sesame brioche bun.",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80"
  },
  {
    id: 4, name: "Mushroom Swiss Burger", category: "burger",
    price: 169, popular: false,
    desc: "Grilled portobello, Swiss cheese, truffle aioli.",
    fullDesc: "A hearty grilled beef patty topped with sautéed portobello mushrooms, melted Swiss cheese, caramelised onions, fresh rocket, and a drizzle of truffle aioli — elevated fast food at its finest.",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80"
  },

  // PIZZA
  {
    id: 5, name: "Gunshot BBQ Blaze", category: "pizza",
    price: 249, popular: true,
    desc: "BBQ sauce base, smoked chicken, caramelised onion, mozzarella.",
    fullDesc: "A bold BBQ pizza with a smoky tomato base, generous chunks of smoked chicken, caramelised onions, roasted capsicum, and a generous melt of mozzarella. Finished with a BBQ drizzle and fresh coriander.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
  },
  {
    id: 6, name: "Margherita Royale", category: "pizza",
    price: 199, popular: false,
    desc: "San Marzano tomato, buffalo mozzarella, fresh basil.",
    fullDesc: "The classic done right. San Marzano tomato sauce, hand-stretched dough, creamy buffalo mozzarella, and fresh basil leaves — simple, pure, and utterly satisfying.",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
  },
  {
    id: 7, name: "Spicy Paneer Volcano", category: "pizza",
    price: 229, popular: true,
    desc: "Tandoori paneer, red onion, chilli chutney, mozzarella.",
    fullDesc: "An Indian-fusion masterpiece. Spicy chilli chutney base topped with marinated tandoori paneer, thinly sliced red onion, green chillies, and a double layer of mozzarella. Expect heat with every slice.",
    img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=600&q=80"
  },
  {
    id: 8, name: "Meat Lover's Inferno", category: "pizza",
    price: 279, popular: false,
    desc: "Chicken, beef pepperoni, sausage, double mozzarella.",
    fullDesc: "A meat-lover's dream loaded with spiced chicken, beef pepperoni, Italian sausage crumbles, crispy bacon bits, and a double-stack of mozzarella over a rich tomato base.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80"
  },

  // JUICES
  {
    id: 9, name: "Tropical Sunrise", category: "juice",
    price: 79, popular: true,
    desc: "Mango, pineapple, orange, hint of chilli.",
    fullDesc: "A refreshing tropical blend of ripe mango, sweet pineapple, fresh orange juice, and a surprising hint of chilli for a kick that lingers. Served chilled with a salted rim.",
    img: "https://i.pinimg.com/736x/09/65/79/096579af1e71e0b773e5f37098ed7100.jpg"
  },
  {
    id: 10, name: "Berry Blast Cooler", category: "juice",
    price: 89, popular: false,
    desc: "Strawberry, blueberry, raspberry, mint lemonade.",
    fullDesc: "A vibrant mix of fresh strawberries, blueberries, and raspberries blended with zesty mint lemonade. Packed with antioxidants and refreshingly light.",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80"
  },
  {
    id: 11, name: "Green Detox Punch", category: "juice",
    price: 99, popular: false,
    desc: "Cucumber, spinach, apple, ginger, lemon.",
    fullDesc: "Our healthy hero. Fresh cucumber, baby spinach, Granny Smith apple, a thumb of ginger, and a squeeze of lemon. Cold-pressed and served over ice — guilt-free deliciousness.",
    img: "https://i.pinimg.com/1200x/b3/7a/dc/b37adc79c48f008284f23e8c285fa06a.jpg"
  },
  {
    id: 12, name: "Choco Peanut Shake", category: "juice",
    price: 119, popular: true,
    desc: "Chocolate milkshake, peanut butter, banana, whipped cream.",
    fullDesc: "Our thick, indulgent shake blends rich chocolate milk, creamy peanut butter, frozen banana, and vanilla ice cream. Topped with whipped cream and a drizzle of chocolate sauce.",
    img: "https://i.pinimg.com/736x/f9/20/65/f92065355cf7bdc8d051e43f435aa140.jpg"
  },

  // FAST FOOD
  {
    id: 13, name: "Loaded Gunshot Fries", category: "fastfood",
    price: 109, popular: true,
    desc: "Crispy fries, cheddar sauce, jalapeños, crispy onions.",
    fullDesc: "Our signature thick-cut fries, piled high with house-made cheddar cheese sauce, pickled jalapeños, crispy fried onions, and a drizzle of chipotle mayo. Sharing is optional.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80"
  },
  {
    id: 14, name: "Crispy Chicken Wings (6pc)", category: "fastfood",
    price: 179, popular: false,
    desc: "Double-fried wings, buffalo sauce, blue cheese dip.",
    fullDesc: "Six double-fried wings coated in your choice of sauces: classic buffalo, honey garlic, or ghost pepper. Served with creamy blue cheese dip and crunchy celery sticks.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80"
  },
  {
    id: 15, name: "Spicy Corn Dog Bites", category: "fastfood",
    price: 89, popular: false,
    desc: "Battered corn dog bites, sriracha ketchup dip.",
    fullDesc: "Bite-sized corn dog nuggets in a golden crispy batter, served with a fiery sriracha ketchup dip. The perfect snack to kick off your meal.",
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80"
  },
  {
    id: 16, name: "Veg Spring Roll Basket", category: "fastfood",
    price: 99, popular: false,
    desc: "Crispy spring rolls, sweet chilli dip, fresh mint.",
    fullDesc: "A basket of eight crispy golden spring rolls filled with seasoned vegetables, glass noodles, and fragrant herbs. Served alongside a sweet chilli dipping sauce with fresh mint.",
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80"
  },
];

// ===== COMBO DATA =====
const combos = [
  {
    name: "Gunshot Duo Meal",
    desc: "Classic Smash Burger + Loaded Fries + Tropical Sunrise Juice",
    price: 299, oldPrice: 387,
    save: "Save ₹88",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80",
    items: "Classic Smash Burger + Loaded Gunshot Fries + Tropical Sunrise"
  },
  {
    name: "Pizza Party Pack",
    desc: "Any 8\" Pizza + 2 Juices + Crispy Fries",
    price: 399, oldPrice: 497,
    save: "Save ₹98",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    items: "Pizza Party Pack (Pizza + 2 Juices + Fries)"
  },
  {
    name: "Fire Squad Feast",
    desc: "2 Burgers + 1 Pizza + 2 Shakes + Loaded Fries",
    price: 699, oldPrice: 895,
    save: "Save ₹196",
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    items: "Fire Squad Feast (2 Burgers + Pizza + 2 Shakes + Fries)"
  },
];

// ===== STATE =====
let currentCategory = "all";
let currentSearch = "";
let selectedProductName = "";
let selectedProductId = null;

// ===== LOADER =====
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  }, 2000);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== RENDER MENU CARDS =====
function renderProducts() {
  const grid = document.getElementById("menuGrid");
  const filtered = products.filter(p => {
    const matchCat = currentCategory === "all" || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(currentSearch) || p.desc.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">🔍 No items found. Try a different search!</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.05}s">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.popular ? `<div class="popular-badge">⭐ Popular</div>` : ""}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div class="card-price">₹${p.price}</div>
          <div class="card-actions">
            <button class="card-btn" onclick="openProductModal(${p.id})">View</button>
            <button class="card-btn icon-btn" onclick="openOrderForm(${p.id})" title="Order">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== RENDER COMBOS =====
function renderCombos() {
  const grid = document.getElementById("combosGrid");
  grid.innerHTML = combos.map(c => `
    <div class="combo-card">
      <div class="combo-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy" />
        <div class="combo-badge-wrap">
          <span class="combo-save-badge">${c.save}</span>
        </div>
      </div>
      <div class="combo-body">
        <div class="combo-name">${c.name}</div>
        <div class="combo-desc">${c.desc}</div>
        <div class="combo-pricing">
          <span class="combo-price">₹${c.price}</span>
          <span class="combo-old-price">₹${c.oldPrice}</span>
        </div>
        <button class="combo-order-btn" onclick="orderCombo('${c.items}', ${c.price})">
          Order This Combo 🔥
        </button>
      </div>
    </div>
  `).join("");
}

// ===== FILTER BUTTONS =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  });
});

// ===== SEARCH =====
document.getElementById("searchInput").addEventListener("input", e => {
  currentSearch = e.target.value.toLowerCase().trim();
  renderProducts();
});

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalImg").alt = p.name;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.fullDesc;
  document.getElementById("modalPrice").textContent = `₹${p.price}`;
  document.getElementById("modalBadge").textContent = p.popular ? "⭐ Popular" : "";
  document.getElementById("modalBadge").style.display = p.popular ? "block" : "none";
  selectedProductId = id;

  document.getElementById("modalOrderBtn").onclick = () => {
    closeModal("productModal");
    openOrderForm(id);
  };
  openModal("productModal");
}

// ===== ORDER FORM =====
function openOrderForm(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  selectedProductName = p.name;
  document.getElementById("custProduct").value = p.name;
  document.getElementById("custQty").value = 1;
  openModal("orderModal");
}

function orderCombo(name, price) {
  selectedProductName = name;
  document.getElementById("custProduct").value = name;
  document.getElementById("custQty").value = 1;
  openModal("orderModal");
}

// qty buttons
document.getElementById("qtyMinus").addEventListener("click", () => {
  const q = document.getElementById("custQty");
  if (parseInt(q.value) > 1) q.value = parseInt(q.value) - 1;
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  const q = document.getElementById("custQty");
  if (parseInt(q.value) < 20) q.value = parseInt(q.value) + 1;
});

// ===== WHATSAPP SUBMIT =====
document.getElementById("submitOrder").addEventListener("click", () => {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const product = document.getElementById("custProduct").value.trim();
  const qty = document.getElementById("custQty").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in all required fields.");
    return;
  }

  const message = `Hello Gunshot Kafe,\n\nI would like to order:\n\n🍔 Product: ${product}\n📦 Quantity: ${qty}\n👤 Name: ${name}\n📞 Phone: ${phone}\n📍 Address: ${address}\n\nPlease confirm my order. Thank you!`;

  const encoded = encodeURIComponent(message);
  const waNumber = "918608865811"; // Replace with actual number
  window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  closeModal("orderModal");
});

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", () => closeModal("productModal"));
document.getElementById("orderModalClose").addEventListener("click", () => closeModal("orderModal"));

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// Close on ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal("productModal");
    closeModal("orderModal");
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== INIT =====
renderProducts();
renderCombos();
