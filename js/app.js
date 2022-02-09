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
const sort = document.getElementById("sort");
const filter = document.getElementById("filter");
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

let productsList;
let cartItems = [];
let isBuyer = true;

productsList = getProducts("products");
render(productsList);

// add event listener to buyer and seller buttons
btnBuyer.addEventListener("click", () => {
    btnSellerMain.classList.remove("btn-active");
    btnBuyerMain.classList.add("btn-active");
    btnAddProduct.style.display = "none";
    userTyper(true);
    productsList = getProducts("products");
    render(productsList);
});

btnSeller.addEventListener("click", () => {
    btnBuyerMain.classList.remove("btn-active");
    btnSellerMain.classList.add("btn-active");
    btnAddProduct.style.display = "block";
    userTyper(false);
    productsList = getProducts("products");
    render(productsList);
});

btnBuyerMain.addEventListener("click", () => {
    btnSellerMain.classList.remove("btn-active");
    btnBuyerMain.classList.add("btn-active");
    btnAddProduct.style.display = "none";
    userTyper(true);
    productsList = getProducts("products");
    render(productsList);
});

btnSellerMain.addEventListener("click", () => {
    btnBuyerMain.classList.remove("btn-active");
    btnSellerMain.classList.add("btn-active");
    btnAddProduct.style.display = "block";
    userTyper(false);
    productsList = getProducts("products");
    render(productsList);
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
        productsList.push(newProductObject);

        // ------ *** --------   Save data in local storage      -------- *** --------
        // storeArrayDataOf("product", convertArrayToString(newListProducts));
        postProducts("products", productsList);
        let products = getProducts("products");

        // ------ *** --------   Clean data After send and close modal     -------- *** --------
        cleanInputForm();

        // ------ *** --------   Refresh dom to render dom       -------- *** --------
        render(products);
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
        listProducts.innerHTML = "";
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
            addCart.setAttribute("data-index", order);
            addCart.className = "add-cart";

            let iconForAdd = document.createElement("i");

            if (isBuyer) {
                addCart.addEventListener("click", () => addToCartDom(product));
                iconForAdd.className = "far fa-cart-plus";
            } else {
                addCart.addEventListener("click", () =>
                    deleteProductDom(product, order++)
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
        cartItems.forEach((item, i) => {
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
                        <span class="quantity-number">1</span>
                        <button class="plus" onclick="increment(${i})" >
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
postProducts("cartItems", cartItems);
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
//remove all items from cart and from local storage
removeAll.addEventListener("click", () => {
    cartItems = [];
    postProducts("cartItems", cartItems);
});
//increment quantity function
const increment = (i) => {
    let quantity = document.getElementById(`index-${i}`).childNodes[3]
        .childNodes[3].childNodes[1].childNodes[3];
    quantity.textContent = parseInt(quantity.textContent) + 1;
    totalPrice();
};

//decrement quantity function
const decrement = (i) => {
    let quantity = document.getElementById(`index-${i}`).childNodes[3]
        .childNodes[3].childNodes[1].childNodes[3];
    if (parseInt(quantity.textContent) === 1) {
        quantity.textContent = 1;
    } else {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
};

// Filter Products
filter.addEventListener("click", () => {
    render(
        filterProduct(
            filter.options[filter.selectedIndex].value,
            getProducts("products")
        )
    );
});

// Sort Products
sort.addEventListener("click", () => {
    render(
        sortProduct(
            sort.options[sort.selectedIndex].value,
            getProducts("products")
        )
    );
});

const totalPrice = () => {
    let items = document.querySelectorAll(".item");
    console.log(items);
    let total = document.getElementById("total-number");
    // console.log(total)
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let priceElement = item.querySelector(".price-item");
        console.log(priceElement);
        let quantity = item.querySelector(".quantity-number").textContent;
        console.log(quantity);
        let price = priceElement.textContent;
        price = parseFloat(price.replace("$", ""));
        sum = sum + price * quantity;
    }
    total.innerText = sum.toFixed(2) + "$";
    postProducts("total", sum);
};
totalPrice();

postProducts("cartItems", cartItems);
renderCart();

// Remove all product from cart
removeAll.addEventListener("click", () => {
    cartItems = [];
    postProducts("cartItems", cartItems);
});

// ------------------------ *** Function For delete product *** ------------------
function deleteProductDom(object, indexProduct) {
    // For delete product form array
    productsList.splice(indexProduct, 1);

    // ------ *** --------   Save data in local storage      -------- *** --------
    postProducts("products", productsList);
    let products = getProducts("products");

    // ------ *** --------   Refresh dom to render dom       -------- *** --------
    render(products);
}

// Get Products when the user reload the page
window.onload = () => {
    productsList = getProducts("products");
    render(productsList);
};

// Create toggle view (grid, list)
const item1 = document.querySelector(".product-list");
const item2 = document.querySelector(".wrap-img");
const item3 = document.querySelector(".img");
const item4 = document.querySelector(".info-product");
const item5 = document.querySelector(".name");
const item6 = document.querySelector(".price");

const btnList = document.querySelector("#btnList");
const btnGrid = document.querySelector("#btnGrid");

btnList.addEventListener("click", () => {
    const item1 = document.querySelector(".product-list");
    const item2 = document.querySelector(".wrap-img");
    const item3 = document.querySelector(".img");
    const item4 = document.querySelector(".info-product");
    const item5 = document.querySelector(".name");
    const item6 = document.querySelector(".price");

    item1.classList.remove("product-list");
    item1.classList.add("product-list-list");

    item2.classList.remove("wrap-img");
    item2.classList.add("wrap-img-list");

    item3.classList.remove("img");
    item3.classList.add("img-list");

    item4.classList.remove("info-product");
    item4.classList.add("info-product-list");

    item5.classList.remove("name");
    item5.classList.add("name-list");

    item6.classList.remove("price");
    item6.classList.add("price-list");
});

btnGrid.addEventListener("click", () => {
    const item1 = document.querySelector(".product-list-list");
    const item2 = document.querySelector(".wrap-img-list");
    const item3 = document.querySelector(".img-list");
    const item4 = document.querySelector(".info-product-list");
    const item5 = document.querySelector(".name-list");
    const item6 = document.querySelector(".price-list");

    item1.classList.remove("product-list-list");
    item1.classList.add("product-list");

    item2.classList.remove("wrap-img-list");
    item2.classList.add("wrap-img");

    item3.classList.remove("img-list");
    item3.classList.add("img");

    item4.classList.remove("info-product-list");
    item4.classList.add("info-product");

    item5.classList.remove("name-list");
    item5.classList.add("name");

    item6.classList.remove("price-list");
    item6.classList.add("price");
});
