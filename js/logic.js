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
const editProduct = (array,i,editProduct) =>{
    return array.map((product)=>{
        if(product.id === i) {
            return {...product,...editProduct}
        }else{
            return product
        }
    })  
    }

module.exports = {
    addProduct,
    deleteProduct,
    beforeDeleteProductList,
    editProduct
};
