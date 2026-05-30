// =========================
// PRODUCTS DATA
// =========================

const products = [

    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.8,
        inStock: true
    },

    {
        id: 2,
        name: "Samsung S25",
        price: 21990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.6,
        inStock: true
    },

    {
        id: 3,
        name: "MacBook Pro",
        price: 45990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 5,
        inStock: true
    },

    {
        id: 4,
        name: "Asus ROG",
        price: 32990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 4.7,
        inStock: false
    },

    {
        id: 5,
        name: "AirPods Pro",
        price: 5990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.9,
        inStock: true
    },

    {
        id: 6,
        name: "Sony WH-1000XM5",
        price: 7990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.8,
        inStock: true
    },

    {
        id: 7,
        name: "Apple Watch",
        price: 9990000,
        category: "watch",
        image: "https://placehold.co/300x220",
        rating: 4.5,
        inStock: true
    },

    {
        id: 8,
        name: "Galaxy Watch",
        price: 7490000,
        category: "watch",
        image: "https://placehold.co/300x220",
        rating: 4.4,
        inStock: false
    },

    {
        id: 9,
        name: "Xiaomi 15",
        price: 15990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.3,
        inStock: true
    },

    {
        id: 10,
        name: "Dell XPS",
        price: 38990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 4.7,
        inStock: true
    },

    {
        id: 11,
        name: "JBL Flip",
        price: 2990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.2,
        inStock: true
    },

    {
        id: 12,
        name: "Huawei Watch",
        price: 6490000,
        category: "watch",
        image: "https://placehold.co/300x220",
        rating: 4.1,
        inStock: true
    }

];

// =========================
// STATE
// =========================

let currentCategory = "all";

let searchTerm = "";

let sortValue = "";

let cartCount = 0;

// =========================
// CREATE LAYOUT
// =========================

const header = document.createElement("header");

header.classList.add("header");

header.innerHTML = `
    <div class="logo">
        Product Catalog
    </div>

    <div class="cart">
        🛒
        <span class="cart-badge">
            0
        </span>
    </div>
`;

document.body.appendChild(header);

// CONTROLS

const controls = document.createElement("div");

controls.classList.add("controls");

controls.innerHTML = `
    <input
        type="text"
        id="searchInput"
        placeholder="Search products..."
    >

    <button class="category-btn active"
            data-category="all">
        All
    </button>

    <button class="category-btn"
            data-category="phone">
        Phones
    </button>

    <button class="category-btn"
            data-category="laptop">
        Laptops
    </button>

    <button class="category-btn"
            data-category="audio">
        Audio
    </button>

    <button class="category-btn"
            data-category="watch">
        Watches
    </button>

    <select id="sortSelect">

        <option value="">
            Sort By
        </option>

        <option value="price-asc">
            Giá tăng
        </option>

        <option value="price-desc">
            Giá giảm
        </option>

        <option value="name">
            Tên A-Z
        </option>

        <option value="rating">
            Đánh giá cao nhất
        </option>

    </select>

    <button id="darkModeBtn">
        🌙 Dark Mode
    </button>
`;

document.body.appendChild(controls);

// PRODUCTS GRID

const productsGrid =
    document.createElement("div");

productsGrid.classList.add("products-grid");

document.body.appendChild(productsGrid);

// =========================
// RENDER PRODUCTS
// =========================

function renderProducts(){

    productsGrid.innerHTML = "";

    let filteredProducts = [...products];

    // SEARCH

    filteredProducts =
        filteredProducts.filter(product =>
            product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );

    // CATEGORY

    if(currentCategory !== "all"){

        filteredProducts =
            filteredProducts.filter(product =>
                product.category === currentCategory
            );

    }

    // SORT

    if(sortValue === "price-asc"){

        filteredProducts.sort((a,b) =>
            a.price - b.price
        );

    }

    if(sortValue === "price-desc"){

        filteredProducts.sort((a,b) =>
            b.price - a.price
        );

    }

    if(sortValue === "name"){

        filteredProducts.sort((a,b) =>
            a.name.localeCompare(b.name)
        );

    }

    if(sortValue === "rating"){

        filteredProducts.sort((a,b) =>
            b.rating - a.rating
        );

    }

    // CREATE CARDS

    filteredProducts.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.dataset.id = product.id;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-price">
                    ${product.price.toLocaleString()}đ
                </p>

                <p class="product-rating">
                    ⭐ ${product.rating}
                </p>

                <p class="stock ${
                    product.inStock ? "" : "out"
                }">

                    ${
                        product.inStock
                            ? "Còn hàng"
                            : "Hết hàng"
                    }

                </p>

                <button class="add-cart">
                    Thêm giỏ
                </button>

            </div>
        `;

        // MODAL

        card.addEventListener("click", e => {

            if(
                e.target.classList.contains("add-cart")
            ){
                return;
            }

            openModal(product);

        });

        // ADD TO CART

        const addCartBtn =
            card.querySelector(".add-cart");

        addCartBtn.addEventListener("click", e => {

            e.stopPropagation();

            cartCount++;

            document.querySelector(
                ".cart-badge"
            ).textContent = cartCount;

        });

        productsGrid.appendChild(card);

    });

}

// =========================
// MODAL
// =========================

function openModal(product){

    const modal =
        document.createElement("div");

    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">

            <img src="${product.image}">

            <div class="modal-body">

                <h2>${product.name}</h2>

                <p>
                    Giá:
                    ${product.price.toLocaleString()}đ
                </p>

                <p>
                    Rating:
                    ⭐ ${product.rating}
                </p>

                <p>
                    Category:
                    ${product.category}
                </p>

                <button class="close-modal">
                    Close
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    modal
        .querySelector(".close-modal")
        .addEventListener("click", () => {

            modal.remove();

        });

}

// =========================
// SEARCH
// =========================

document
    .getElementById("searchInput")
    .addEventListener("input", e => {

        searchTerm = e.target.value;

        renderProducts();

    });

// =========================
// CATEGORY FILTER
// =========================

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentCategory =
                button.dataset.category;

            document
                .querySelectorAll(".category-btn")
                .forEach(btn => {

                    btn.classList.remove("active");

                });

            button.classList.add("active");

            renderProducts();

        });

    });

// =========================
// SORT
// =========================

document
    .getElementById("sortSelect")
    .addEventListener("change", e => {

        sortValue = e.target.value;

        renderProducts();

    });

// =========================
// DARK MODE
// =========================

document
    .getElementById("darkModeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

    });

// =========================
// INITIAL RENDER
// =========================

renderProducts();