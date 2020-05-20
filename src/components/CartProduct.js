import React from 'react'
import './CartProduct.css'

function CartProduct() {
    return (
        <div className="cart__product">
            <div className="cart__product__image">
                <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
            </div>
            <div className="cart__info">
                <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                <div className="cart__product__size">Tam.: M</div>
                <div className="cart__product__quantity">
                    <button className="cart__product__add">
                        <i className="fas fa-plus"></i>
                    </button>
                    <span className="cart__product__cont">1</span>
                    <button className="cart__product__remove">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="cart__prices">
                <span className="cart__product__price">R$ 189,90</span>
                <span className="cart__product__installments">3x R$ 63,30</span>
            </div>
            <button className="cart__remove__item">Remover Item</button>
        </div>
    )
}

export default CartProduct