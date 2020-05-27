import React from 'react'
import './Cart.css'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'
function Cart() {
    const { cart, quantity, price } = useSelector(state => state)
    function handleCloseCart(event){
        event.preventDefault()
        document.querySelector('.cart__modal').classList.add('modal__cart__hidden')
        document.querySelector('.app').classList.remove('blur')
    }

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