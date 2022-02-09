// ------ *** --------       Get Data From Dom   (Element)       -------- *** --------
const closeModal = document.getElementById("close-modal");
const modalStarter = document.getElementById("modal-starter");
const navbarContent = document.getElementById("navbar-content");
const btnCloseNav = document.getElementById("btn-close-navbar");
const cartSection = document.getElementById("cart-section");
const btnCloseCart = document.getElementById("btn-close-cart");
const btnShowCart = document.getElementById("btn-shopping-bag");
const modalCreateProduct = getElement("modal-create-product");
const btnCloseProductModal = getElement("close-product-modal");
const modalProductOverview = getElement("modal-product-overview");
const btnAddProduct = document.getElementById("btnAddProduct");
const btnBuyer = document.querySelector(".btn-modal-buyer");
const btnSeller = document.querySelector(".btn-modal-seller");
const cartContent = document.querySelector(".content-cart");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const removeAll = document.querySelector(".remove-all");
const btnBuyerMain = document.querySelector(".btn-buyer");
const btnSellerMain = document.querySelector(".btn-seller");
const productName = getElement("name");
const productCategory = getElement("category");
const productPrice = getElement("product-price");
const productImageUrl = getElement("image-url");
const btnSubmitFormProduct = getElement("btn-submit-form-product");

let cartItems = [];
let isBuyer = true;

// add event listener to buyer and seller buttons
btnBuyer.addEventListener("click", () => {
    btnSellerMain.classList.remove("btn-active");
    btnBuyerMain.classList.add("btn-active");
    userTyper(true);
    getProducts("products");
});
btnSeller.addEventListener("click", () => {
    btnBuyerMain.classList.remove("btn-active");
    btnSellerMain.classList.add("btn-active");
    userTyper(false);
    getProducts("products");
});

btnBuyerMain.addEventListener("click", () => {
    btnSellerMain.classList.remove("btn-active");
    btnBuyerMain.classList.add("btn-active");
    userTyper(true);
    getProducts("products");
});

btnSellerMain.addEventListener("click", () => {
    btnBuyerMain.classList.remove("btn-active");
    btnSellerMain.classList.add("btn-active");
    userTyper(false);
    getProducts("products");
});

// Function to check if the user buyer or seller
function userTyper(isABuyer) {
    isBuyer = isABuyer;
    modalStarter.style.display = "none";
}

// Show modalStarter popup;
if (localStorage.getItem("popState") !== "shown") {
    window.addEventListener("load", function () {
        modalStarter.style.display = "flex";
        localStorage.setItem("popState", "shown");
    });
}

// Function post Products to localStorage
function postProducts(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    getProducts(key);
}

//Import data from JSON files
// let fetchData = () => {
//     fetch("../data/products.json")
//         .then((response) => {
//             return response.json();
//         })
//         .then((productListJson) => render(productListJson));
// };
// fetchData();
postProducts("cartItems", cartItems);
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

// --------------- Function to add Product ------------------

btnSubmitFormProduct.addEventListener("click", () =>
    SubmitFormToCreateProduct()
);

// ------ *** --------      Submit Form To Create Product       -------- *** --------
let newListProducts;
if (localStorage.product != null) {
    newListProducts = convertStringArrayToArray(localStorage.product);
} else {
    newListProducts = [];
}

const SubmitFormToCreateProduct = () => {
    if (
        checkFormData(
            productName.value,
            productCategory.value,
            productPrice.value,
            productImageUrl.value
        )
    ) {
        // ------ *** --------  convert data product to object   -------- *** --------
        let id = Math.floor(Math.random() * 999);
        let newProductObject = convertToObject(
            id,
            productName.value,
            productCategory.value,
            productPrice.value,
            productImageUrl.value
        );

        // ------ *** --------   push a abject to new array      -------- *** --------
        newListProducts.push(newProductObject);

        // ------ *** --------   Save data in local storage      -------- *** --------
        storeArrayDataOf("product", convertArrayToString(newListProducts));

        // ------ *** --------   Clean data After send and close modal     -------- *** --------
        cleanInputForm();

        // ------ *** --------   Refresh dom to render dom       -------- *** --------
        getProducts("product");
    } else {
        alert("Input is not Valid");
    }
};

getProducts("product");

const cleanInputForm = () => {
    productName.value = "";
    productCategory.value = "";
    productPrice.value = "";
    productImageUrl.value = "";
    modalCreateProduct.classList.add("modal-hidden");
};

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

// Function to Render Products at home page
function render(productList) {
    if (hasProduct(productList)) {
        let order = 0;
        let listProducts = document.querySelector(".product-list");

        productList.forEach((product) => {
            let list = document.createElement("li");
            let wrapImg = document.createElement("div");
            wrapImg.className = "wrap-img";
            let infoProduct = document.createElement("div");
            infoProduct.className = "info-product";

            let imgProduct = document.createElement("img");
            imgProduct.className = "img";
            imgProduct.setAttribute("src", product.image);
            let category = document.createElement("div");
            category.innerText = product.category;
            category.className = "category";

            let edit = document.createElement("div");
            let iconForEdit = document.createElement("i");

            if (!isBuyer) {
                edit.setAttribute("data-index", order);
                edit.className = "edit";
                edit.addEventListener("click", () => editProductDom(product));
                iconForEdit.className = "fa fa-pencil";
                edit.appendChild(iconForEdit);
                wrapImg.appendChild(edit);
            }

            let nameAndPrice = document.createElement("div");
            nameAndPrice.className = "name-price";
            let addCart = document.createElement("div");
            addCart.setAttribute("data-index", order++);
            addCart.className = "add-cart";

            let iconForAdd = document.createElement("i");

            if (isBuyer) {
                addCart.addEventListener("click", () => addToCartDom(product));
                iconForAdd.className = "far fa-cart-plus";
            } else {
                addCart.addEventListener("click", () =>
                    deleteProductDom(product)
                );
                iconForAdd.className = "far fa-trash-alt";
            }

            let name = document.createElement("h3");
            name.innerText = product.name;
            name.className = "name";
            let price = document.createElement("p");
            price.innerText = `$${product.price}`;
            price.className = "price";

            addCart.appendChild(iconForAdd);
            nameAndPrice.appendChild(name);
            nameAndPrice.appendChild(price);

            wrapImg.appendChild(category);
            wrapImg.appendChild(imgProduct);

            infoProduct.appendChild(nameAndPrice);
            infoProduct.appendChild(addCart);

            list.appendChild(wrapImg);
            list.appendChild(infoProduct);

            listProducts.insertBefore(list, listProducts.childNodes[0]);
        });
    }
}

// function for render items in cart content
const renderCart = () => {
    if (hasProduct(cartItems)) {
        cartItems.forEach((item) => {
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
        </div>`;
        });
    } else {
        cartContent.innerHTML = "There is no items yet";
    }
};

renderCart();
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

removeAll.addEventListener("click", () => {
    cartItems = [];
    postProducts("cartItems", cartItems);
});

postProducts("cartItems", cartItems);
renderCart();

// Remove all product from cart
removeAll.addEventListener("click", () => {
    cartItems = [];
    postProducts("cartItems", cartItems);
});
