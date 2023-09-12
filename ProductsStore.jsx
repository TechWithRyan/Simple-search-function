
const productsArray = [
    {
        id: "1",
        title: "Small",
        price: 999,
    },
    {
        id: "2",
        title: "Medium",
        price: 1499,
    },
    {
        id: "3",
        title: "Large",
        price: 2000,
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist ID: " + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };

