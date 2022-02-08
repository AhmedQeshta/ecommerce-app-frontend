let beforeDeleteProductList = [
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
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
];

let productList = [];
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

// logic For Add Products
const addProduct = (newProduct) => {
    if (newProduct == undefined) {
        return productList;
    } else {
        return [...productList, newProduct];
    }
};

// logic For Delete Products
const deleteProduct = (indexProduct) => {
    if (indexProduct == undefined) {
        return beforeDeleteProductList;
    } else {
        beforeDeleteProductList.splice(indexProduct, 1);
        return beforeDeleteProductList;
    }
};
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
const filterProduct = (nameCategory) => {
    if (nameCategory === "None" || nameCategory === undefined) {
        return products;
    } else {
        return products.filter((product) => {
            return product.category === nameCategory;
        });
    }
};

module.exports = {
    addProduct,
    deleteProduct,
    beforeDeleteProductList,
    editProduct,
    searchProduct,
    filterProduct,
};
