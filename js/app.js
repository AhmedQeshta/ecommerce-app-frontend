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
const removeAll = document.querySelector('.remove-all')

let cartItems=[ {
    "id": 1,
    "name": "Fjallraven Foldsack Backpack",
    "price": 109.95,
    "category": "Art",
    "image": "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
  },
  {
    "id": 2,
    "name": "Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "category": "Clothes",
    "image": "https://images.unsplash.com/photo-1630750793977-b9189e00594f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
  }]

//Import data from JSON files
let fetchData = () => {
    fetch("../data/products.json")
        .then((response) => {
            return response.json();
        })
        .then((productListJson) => render(productListJson));
};
fetchData();
postProducts('cartItems',cartItems)
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
// Function  show Cart
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
// function for render items in cart content
const renderCart= () => {
    if(hasProduct(cartItems)) {
        cartItems.forEach((item,i)=>{
            cartContent.innerHTML += ` <div class="item" id="index-${i}">
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
                        <button class="minus" onclick="decrement(${i})" >
                            <i class="far fa-minus"></i>
                        </button>
                        <span class="quantity-number"  >1</span>
                        <button class="plus" onclick="increment(${i})" >
                            <i class="far fa-plus"></i>
                        </button>
                    </div>
                    <h4 class="remove">Remove</h4>
                </div>
            </div>
        </div>`
        })
    }
    else {
        cartContent.innerHTML ='There is no items yet'
    }
}
renderCart()
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
//remove all items from cart and from local storage
removeAll.addEventListener('click',()=>{
    cartItems = []
    postProducts('cartItems',cartItems)
})
//increment quantity function 
const increment = (i) => {
    let quantity =document.getElementById(`index-${i}`).childNodes[3].childNodes[3].childNodes[1].childNodes[3]
    quantity.textContent =  parseInt(quantity.textContent) + 1
}
//decrement quantity function 
const decrement = (i) => {
    let quantity =document.getElementById(`index-${i}`).childNodes[3].childNodes[3].childNodes[1].childNodes[3]
    if (parseInt(quantity.textContent) ===1) {
        quantity.textContent =1
    }
    else {
        quantity.textContent =  parseInt(quantity.textContent) -1
    }
  
}
