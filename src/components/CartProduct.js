import React from 'react'
import './CartProduct.css'

function CartProduct({product}) {
    return (
        <div className="cart__product">
            <div className="cart__product__image">
                <img className="product__image" src={product.image} alt="Produto"/>
            </div>
            <div className="cart__info">
                <div className="cart__product__name">{product.name}</div>
                <div className="cart__product__size">TAM. {product.size}</div>
                <div className="cart__product__quantity">
                    <button className="cart__product__add">
                        <i className="fas fa-plus"></i>
                    </button>
                    <span className="cart__product__cont">{product.quantity}</span>
                    <button className="cart__product__remove">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="cart__prices">
                <span className="cart__product__price">{product.actual_price}</span>
                <span className="cart__product__installments">{product.installments}</span>
            </div>
            <button className="cart__remove__item">Remover Item</button>
        </div>
    )
}

export default CartProduct