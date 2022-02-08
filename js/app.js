const closeModal = document.getElementById("close-modal");
const modalStarter = document.getElementById("modal-starter");
const navbarContent = document.getElementById("navbar-content");
const btnCloseNav = document.getElementById("btn-close-navbar");
const cartSection = document.getElementById("cart-section");
const btnCloseCart = document.getElementById("btn-close-cart");
const btnShowCart = document.getElementById("btn-show-cart");

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
