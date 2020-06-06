import React from 'react'
import './CartProduct.css'
import {setQuantity, setCart} from '../actions'
import {useDispatch, useSelector} from 'react-redux'

function CartProduct({product}) {
    const {quantity, cart} = useSelector(state => state)
    const dispatch = useDispatch()
    function handlePlus(event){
        event.preventDefault()
        product.quantity++
        dispatch(setQuantity(quantity+1))

    }
    function handleMinus(event){
        event.preventDefault()
        if(product.quantity > 1){
            product.quantity--
            dispatch(setQuantity(quantity-1))
        }
    }

    function handleRemoveProduct(event) {
        event.preventDefault()
        dispatch(setQuantity(quantity-product.quantity))
        dispatch(setCart(cart.filter(cart => {
            return cart.code_color !== product.code_color || cart.size !== product.size
        })))
    }

    return (
        <div className="cart__product">
            <div className="cart__product__image">
                <img className="product__image" src={product.image} alt="Produto"/>
            </div>
            <div className="cart__info">
                <div className="cart__product__name">{product.name}</div>
                <div className="cart__product__size">TAM. {product.size}</div>
                <div className="cart__product__quantity">
                    <button onClick={handleMinus} className="cart__product__remove">
                        <i className="fas fa-minus"></i>
                    </button>
                    <span className="cart__product__cont">{product.quantity}</span>
                    <button onClick={handlePlus} className="cart__product__add">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="cart__prices">
                <span className="cart__product__price">{product.actual_price}</span>
                <span className="cart__product__installments">{product.installments}</span>
            </div>
            <button onClick={handleRemoveProduct} className="cart__remove__item">Remover Item</button>
        </div>
    )
}

export default CartProduct