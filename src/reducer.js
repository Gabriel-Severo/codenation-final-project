const INITIAL_STATE = {
    products: [],
    cart: [],
    quantity: 0
}

function reducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "SET_QUANTITY": {
            return {
                ...state,
                quantity: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer