const closeModal = document.getElementById("close-modal");
const modalStarter = document.getElementById("modal-starter");
const navbarContent = document.getElementById("navbar-content");
const btnCloseNav = document.getElementById("btn-close-navbar");
const cartSection = document.getElementById("cart-section");
const btnCloseCart = document.getElementById("btn-close-cart");
const btnShowCart = document.getElementById("btn-shopping-bag");

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
closeModal.addEventListener("click", () => {
    modalStarter.classList.toggle("modal-hidden");
});

// Function  close nav
btnCloseNav.addEventListener("click", () => {
    navbarContent.classList.toggle("navbar-hidden");
});

// Function  close Cart
btnCloseCart.addEventListener("click", () => {
    cartSection.classList.toggle("cart-hidden");
});

// Function  open/close Cart
btnShowCart.addEventListener("click", () => {
    cartSection.classList.toggle("cart-hidden");
});

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