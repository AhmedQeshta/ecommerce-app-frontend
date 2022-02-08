let productList=[];

// logic For Add Products
const addProduct = (newProduct) => {
    productList.push(newProduct);
    return productList;
};


module.exports = {
    addProduct,
};
