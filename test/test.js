const {
    deleteProduct,
    beforeDeleteProductList,
    editProduct,
    searchProduct,
    filterProduct,
    sortProduct,
    convertToObject,
    convertArrayToString,
    convertStringArrayToArray,
    checkFormData,
} = require("../js/logic");


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

describe("Test Edit Product function", () => {
    test("edit name for product ", () => {
        const editedProduct = {
            id: 1,
            name: "T-shirt",
            price: 10.15,
            category: "clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        };

        const actual = editProduct(1, editedProduct);
        const expected = [
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
            },
        ];
        expect(actual).toEqual(expected);
    });

    test("edit price and image for product ", () => {
        const editedProduct = {
            id: 1,
            name: "T-shirt",
            price: 20,
            category: "clothing",
            image: "https://fakestoreapi.com/images/81fPKd-2AYL._AC_SL1500_.jpg",
        };
        const actual = editProduct(1, editedProduct);
        const expected = [
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
            },
        ];
        expect(actual).toEqual(expected);
    });

    test("edit price for product ", () => {
        const editedProduct = {
            id: 1,
            name: "T-shirt",
            price: 30,
            category: "clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        };
        const actual = editProduct(1, editedProduct);
        const expected = [
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
            },
        ];
        expect(actual).toEqual(expected);
    });
});

describe("Test search Product function", () => {
    test("producst should be display that have name written ", () => {
        const productList = [
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
        const name = "First";
        const actual = searchProduct(name);
        const expected = [
            {
                id: 1,
                name: "first",
                price: 10.15,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(actual).toEqual(expected);
    });
});

describe("Filter Function", () => {
    test("should return array with clothes cateogre products", () => {
        const nameCategory = "clothing";
        const filteredList = [
            {
                id: 1,
                name: "first",
                price: 10.15,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(filterProduct(nameCategory)).toEqual(filteredList);
    });

    test("should return the same array without any change", () => {
        let nameCategory;
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
        expect(filterProduct(nameCategory)).toEqual(products);
    });
});

describe("Sort Function", () => {
    test("should order the products by maximum price", () => {
        const sortType = "Minimum";
        const sortedList = [
            {
                id: 1,
                name: "first",
                price: 10.15,
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
            {
                id: 2,
                name: "first",
                price: 20,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(sortProduct(sortType)).toEqual(sortedList);
    });

    test("should order the products by minimum price", () => {
        const sortType = "Maximum";
        const sortedList = [
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
            {
                id: 1,
                name: "first",
                price: 10.15,
                category: "clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
        ];
        expect(sortProduct(sortType)).toEqual(sortedList);
    });

    test("should return the array as it", () => {
        const sortType = "None";
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
        expect(sortProduct(sortType)).toEqual(sortProductList);
    });
});

// ----------- Test convert data product to object -----------
describe("Test convert data product to object", () => {
    test("Product should be object", () => {
        let imgLink =
            "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80";
        let expected = {
            id: 15,
            name: "name",
            price: 150.15,
            category: "Clothes",
            image: imgLink,
        };
        expect(convertToObject(15, "name", 150.15, "Clothes", imgLink)).toEqual(
            expected
        );
    });
});

// ----------- Test convert array product to string -----------
describe("Test convert array product to string", () => {
    test("Array Product should be string", () => {
        let array = [1, 2, 3];
        let expected = "[1,2,3]";
        expect(convertArrayToString(array)).toEqual(expected);
    });
});

// ----------- Test convert stringArray product to Array -----------
describe("Test convert stringArray product to Array", () => {
    test("stringArray Product should be Array", () => {
        let array = "[1,2,3]";
        let expected = [1, 2, 3];
        expect(convertStringArrayToArray(array)).toEqual(expected);
    });
});

// ----------- Test  Check Form Data -----------
describe("Test  Check Form Data", () => {
    test("Check Form Data is Valid", () => {
        expect(
            checkFormData("name", "price", "category", "image")
        ).toBeTruthy();
        expect(checkFormData("name", "price", "category", "")).toBeFalsy();
        expect(checkFormData("name", "price", "", "image")).toBeFalsy();
        expect(checkFormData("name", "", "category", "image")).toBeFalsy();
        expect(checkFormData("", "price", "category", "image")).toBeFalsy();
        expect(checkFormData("", "", "", "")).toBeFalsy();
    });
});
