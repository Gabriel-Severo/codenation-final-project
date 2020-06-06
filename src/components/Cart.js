import React, {useEffect} from 'react'
import './Cart.css'
import CartProduct from './CartProduct'
import { useSelector, useDispatch } from 'react-redux'
import { setPrice } from '../actions'
function Cart() {
    const { cart, quantity, price } = useSelector(state => state)
    const dispatch = useDispatch()
    function handleCloseCart(event){
        event.preventDefault()
        document.querySelector('.cart__modal').classList.add('modal__cart__hidden')
        document.querySelector('.app').classList.remove('blur')
    }

    useEffect(() => {
        let price = 0
        for(let p of cart){
            price += parseFloat(p.actual_price.split('R$ ')[1].replace(',', '.')) * p.quantity
        }
        dispatch(setPrice(price))
    }, [cart, dispatch, quantity])

    return(
        <div className="cart__modal modal__cart__hidden">
            <div className="cart__top">
                <button onClick={handleCloseCart} className="return__button">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <strong>Sacola ({quantity})</strong>
            </div>
            <div className="cart__products">
                {cart && cart.map((product, index) => {
                    return <CartProduct key={index} product={product}/>
                })}
            </div>
            <div className="cart__price">
                <strong className="cart__price__text">Subtotal - R$ {price.toFixed(2)}</strong>
            </div>
        </div>
    )
}

export default Cart