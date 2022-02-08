const {
    addProduct,
    deleteProduct,
    beforeDeleteProductList,
    editProduct
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

describe('Test Edit Product function', () => {
    test('edit name for product ', () => {
        const editedProduct= {
            id: 1,
            name: "T-shirt",
            price: 10.15,
            category: "clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }
        const productList=[
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
            }   
        ]
        const actual=editProduct(productList,1,editedProduct)
        const expected=[
            {
            
                id: 1,
                name: "T-shirt",
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
            }  
        ]
        expect(actual).toEqual(expected);

      
    })
    
  
})
describe('Test Edit Product function', () => {
    test('edit price for product ', () => {
        const editedProduct= {
            id: 1,
            name: "T-shirt",
            price: 30,
            category: "clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }
        const productList=[
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
            }   
        ]
        const actual=editProduct(productList,1,editedProduct)
        const expected=[
            {
            
                id: 1,
                name: "T-shirt",
                price: 30,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
            {
                id: 2,
                name: "second",
                price: 20,
                category: "Games",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }  
        ]
        expect(actual).toEqual(expected);

      
    })
    
  
})
describe('Test Edit Product function', () => {
    test('edit price and image for product ', () => {
        const editedProduct= {
            id: 1,
            name: "T-shirt",
            price: 20,
            category: "clothing",
            image: "https://fakestoreapi.com/images/81fPKd-2AYL._AC_SL1500_.jpg",
        }
        const productList=[
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
            }   
        ]
        const actual=editProduct(productList,1,editedProduct)
        const expected=[
            {
            
                id: 1,
                name: "T-shirt",
                price: 20,
                category: "clothing",
                image: "https://fakestoreapi.com/images/81fPKd-2AYL._AC_SL1500_.jpg",
            },
            {
                id: 2,
                name: "second",
                price: 20,
                category: "Games",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }  
        ]
        expect(actual).toEqual(expected);

      
    })
    
  
})
