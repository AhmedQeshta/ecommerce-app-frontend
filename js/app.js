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
const cartContent=document.querySelector('.content-cart')
const minusBtn=document.querySelector('.minus')
const plusBtn=document.querySelector('.plus')

let cartItems=[]

// Function  close Modal
toggleClass(closeModal, modalStarter, "modal-hidden");

// Function  close nav
toggleClass(btnCloseNav, navbarContent, "navbar-hidden");

// Function  close Cart
toggleClass(btnCloseCart, cartSection, "cart-hidden");

// Function  open/close Cart
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

const renderCart= () => {
    if(cartItems.length === 0) cartContent.innerHTML ='There is no items yet'
    else {
        cartItems.forEach((item)=>{
            cartContent.innerHTML += ` <div class="item">
            <img
                src="${item.image}"
                alt="${item.name}"
            />
            <div class="info-item">
                <div class="data">
                    <h3 class="name-item">
                    ${item.name}
                    </h3>
                    <h3 class="price-item">$ ${item.price}</h3>
                </div>
                <div class="data">
                    <div class="quentity">
                        <button class="minus" >
                            <i class="far fa-minus"></i>
                        </button>
                        <span class="quantity-number">1</span>
                        <button class="plus" >
                            <i class="far fa-plus"></i>
                        </button>
                    </div>
                    <h4 class="remove">Remove</h4>
                </div>
            </div>
        </div>`
        })
    }
}
renderCart()
