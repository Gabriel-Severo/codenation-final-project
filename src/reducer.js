const INITIAL_STATE = {
    products: []
}

function reducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default reducer