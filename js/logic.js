let products = [
    {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        name: "second",
        price: 20,
        category: "Games",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
];

const sortProductList = [
    {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        name: "first",
        price: 20,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 3,
        name: "first",
        price: 15.2,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
];

//logic for edit product
const editProduct = (i, editProduct) => {
    return products.map((product) => {
        if (product.id === i) {
            return { ...editProduct };
        } else {
            return product;
        }
    });
};
//logic for search product by name
const searchProduct = (name) => {
    return products.filter((product) => {
        return product.name.toLowerCase() === name.toLowerCase();
    });
};

// logic For filter Products
const filterProduct = (nameCategory, products) => {
    if (nameCategory === "None" || nameCategory === undefined) {
        return products;
    } else {
        return products.filter((product) => {
            return product.category === nameCategory;
        });
    }
};

// logic For Sort Products
const sortProduct = (sortType, products) => {
    if (sortType === "None" || sortType === undefined) {
        return products;
    } else {
        const newProducts = [...products];
        if (sortType === "Maximum")
            return newProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
        if (sortType === "Minimum")
            return newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
};

// ------ *** --------  convert data product to object   -------- *** --------
const convertToObject = (id, name, category, price, image) => {
    return {
        id,
        name,
        category,
        price,
        image,
    };
};

// ------ *** --------       Convert array to String        -------- *** --------
const convertArrayToString = (array) => {
    return JSON.stringify(array);
};

// ------ *** --------      Reverse Convert array to String        -------- *** --------
const convertStringArrayToArray = (stringArray) => {
    return JSON.parse(stringArray);
};

// ------ *** --------  Function Save data in local storage      -------- *** --------
const storeArrayDataOf = (nameLocalStorage, products) => {
    localStorage.setItem(nameLocalStorage, products);
};

// ------ *** --------        Check Form Data            -------- *** --------
const checkFormData = (name, price, category, image) => {
    let isValid = false;
    if (name === "" || price === "" || category === "" || image === "") {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
};

if (typeof module !== "undefined") {
    module.exports = {
        editProduct,
        searchProduct,
        filterProduct,
        sortProduct,
        convertToObject,
        convertArrayToString,
        convertStringArrayToArray,
        checkFormData,
    };
}
