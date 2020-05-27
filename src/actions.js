export function setProducts(products) {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export function setCart(products) {
    return {
        type: "SET_CART",
        payload: products
    }
}