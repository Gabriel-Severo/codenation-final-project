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

export function setQuantity(quantity){
    return {
        type: "SET_QUANTITY",
        payload: quantity
    }
}

export function setPrice(price){
    return {
        type: "SET_PRICE",
        payload: price
    }
}