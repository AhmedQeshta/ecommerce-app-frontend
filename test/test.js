const {addProduct} = require('../js/logic');





describe('Test Add Products', () => {
    test('Product should be ', () => {
      const newProduct = {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      };
      const productList = [{
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      }];
      expect(addProduct(newProduct)).toEqual(productList);
    });
});