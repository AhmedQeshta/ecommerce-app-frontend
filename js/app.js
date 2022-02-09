const closeModal = document.getElementById("close-modal");
const modalStarter = document.getElementById("modal-starter");
const navbarContent = document.getElementById("navbar-content");
const btnCloseNav = document.getElementById("btn-close-navbar");
const cartSection = document.getElementById("cart-section");
const btnCloseCart = document.getElementById("btn-close-cart");
const btnShowCart = document.getElementById("btn-shopping-bag");
const modalCreateProduct = getElement("modal-create-product");
const btnCloseProductModal = getElement("close-product-modal");
const btnAddProduct = getElement("btnAddProduct");
const modalProductOverview = getElement("modal-product-overview");

//Import data from JSON files
let fetchData = () => {
    fetch("../data/products.json")
        .then((response) => {
            return response.json();
        })
        .then((productListJson) => render(productListJson));
};
fetchData();

// Function post Products to localStorage
function postProducts(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    getProducts(key);
}

// Function get Products from localStorage
function getProducts(key) {
    data =
        localStorage.getItem(key) === null
            ? []
            : JSON.parse(localStorage.getItem(key));
    render(data);
    return data;
}

// Function  close Modal
toggleClass(closeModal, modalStarter, "modal-hidden");

// Function  close nav
toggleClass(btnCloseNav, navbarContent, "navbar-hidden");

// Function  close Cart
toggleClass(btnCloseCart, cartSection, "cart-hidden");

// Function  open/close Cart
btnShowCart.addEventListener("click", () => {
    cartSection.classList.toggle("cart-hidden");
});

toggleClass(btnShowCart, cartSection, "cart-hidden");

// Function  Product Modal
toggleClass(btnCloseProductModal, modalCreateProduct, "modal-hidden");
toggleClass(modalProductOverview, modalCreateProduct, "modal-hidden");
toggleClass(btnAddProduct, modalCreateProduct, "modal-hidden");

// ------ Function to Toggle Class ---------
function toggleClass(element, section, className) {
    element.addEventListener("click", () => {
        section.classList.toggle(className);
    });
}

// ------ Function to get Element by id ---------
function getElement(idName) {
    return document.getElementById(idName);
}

// Function Check if the product list has a product
function hasProduct(productList) {
    if (
        productList.length == 0 ||
        productList == undefined ||
        productList == null
    ) {
        return false;
    }
    return true;
}
