const {
    addProduct,
    deleteProduct,
    beforeDeleteProductList,
} = require("../js/logic");

describe("Test Add Products", () => {
    test("Product should be ", () => {
        const newProduct = {
            id: 1,
            name: "first",
            price: 10.15,
            category: "clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        };
        const productList = [
            {
                id: 1,
                name: "first",
                price: 10.15,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(addProduct(newProduct)).toEqual(productList);
        expect(addProduct()).toEqual([]);
    });
});

describe("Test Delete Products", () => {
    test("delete Product 1 and product List should be ", () => {
        const AfterDeleteProductList = [
            {
                id: 1,
                name: "first",
                price: 10.15,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(deleteProduct(1)).toEqual(AfterDeleteProductList);
        expect(deleteProduct()).toEqual(beforeDeleteProductList);
        expect(deleteProduct(9)).toEqual(beforeDeleteProductList);
    });
});
