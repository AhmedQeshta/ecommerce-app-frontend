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

// --------------- Function to add Product ------------------

// ------ *** --------       Get Data From Dom   (Element)       -------- *** --------
const productName = getElement("name");
const productCategory = getElement("category");
const productPrice = getElement("product-price");
const productImageUrl = getElement("image-url");
const btnSubmitFormProduct = getElement("btn-submit-form-product");

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
    if(checkFormData(  productName.value,productCategory.value,productPrice.value,productImageUrl.value)){
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
    }else{
        alert("Input is not Valid")
    }
};


const cleanInputForm = ()=>{
    productName.value = '';
    productCategory.value= '';
    productPrice.value= '';
    productImageUrl.value= '';
    modalCreateProduct.classList.add('modal-hidden');
}

// ------ *** --------   Refresh dom to render dom       -------- *** --------
