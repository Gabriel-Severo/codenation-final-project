import React from 'react'
import './Cart.css'
import CartProduct from './CartProduct'
class Cart extends React.Component {

    handleCloseCart(event){
        event.preventDefault()
        document.querySelector('.cart__modal').classList.add('modal__cart__hidden')
        document.querySelector('.app').classList.remove('blur')
    }

    render(){
        return(
            <div className="cart__modal modal__cart__hidden">
                <div className="cart__top">
                    <button onClick={e => {this.handleCloseCart(e)}} className="return__button">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <strong>Sacola (0)</strong>
                </div>
                <div className="cart__products">
                    <CartProduct/>
                    <CartProduct/>
                    <CartProduct/>
                    <CartProduct/>
                    <CartProduct/>
                </div>
                <div className="cart__price">
                    <strong className="cart__price__text">Subtotal - R$ 12162,40</strong>
                </div>
            </div>
        )
    }
}

export default Cart