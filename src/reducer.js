const INITIAL_STATE = {
    products: [],
    cart: JSON.parse(window.localStorage.getItem('cart')) || [],
    quantity: Number(window.localStorage.getItem('quantity')) || 0,
    price: Number(window.localStorage.getItem('price')) || 0
}

function reducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_CART": {
            window.localStorage.setItem('cart', JSON.stringify(action.payload))
            return {
                ...state,
                cart:  action.payload
            }
        }
        case "SET_QUANTITY": {
            window.localStorage.setItem('quantity', action.payload)
            window.localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state,
                quantity: action.payload
            }
        }
        case "SET_PRICE": {
            window.localStorage.setItem('price', action.payload)
            return {
                ...state,
                price: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer