import React from 'react'
import './Cart.css'
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
                    <div className="cart__product">
                        <div className="cart__product__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
                        </div>
                        <div className="cart__info">
                            <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                            <div className="cart__product__size">Tam.: M</div>
                            <div className="cart__product__quantity">
                                <button className="cart__product__add">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <span className="cart__product__cont">1</span>
                                <button className="cart__product__remove">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart__prices">
                            <span className="cart__product__price">R$ 189,90</span>
                            <span className="cart__product__installments">3x R$ 63,30</span>
                        </div>
                        <button className="cart__remove__item">Remover Item</button>
                    </div>
                    <div className="cart__product">
                        <div className="cart__product__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
                        </div>
                        <div className="cart__info">
                            <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                            <div className="cart__product__size">Tam.: M</div>
                            <div className="cart__product__quantity">
                                <button className="cart__product__add">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <span className="cart__product__cont">1</span>
                                <button className="cart__product__remove">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart__prices">
                            <span className="cart__product__price">R$ 189,90</span>
                            <span className="cart__product__installments">3x R$ 63,30</span>
                        </div>
                        <button className="cart__remove__item">Remover Item</button>
                    </div>
                    <div className="cart__product">
                        <div className="cart__product__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
                        </div>
                        <div className="cart__info">
                            <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                            <div className="cart__product__size">Tam.: M</div>
                            <div className="cart__product__quantity">
                                <button className="cart__product__add">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <span className="cart__product__cont">1</span>
                                <button className="cart__product__remove">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart__prices">
                            <span className="cart__product__price">R$ 189,90</span>
                            <span className="cart__product__installments">3x R$ 63,30</span>
                        </div>
                        <button className="cart__remove__item">Remover Item</button>
                    </div>
                    <div className="cart__product">
                        <div className="cart__product__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
                        </div>
                        <div className="cart__info">
                            <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                            <div className="cart__product__size">Tam.: M</div>
                            <div className="cart__product__quantity">
                                <button className="cart__product__add">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <span className="cart__product__cont">1</span>
                                <button className="cart__product__remove">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart__prices">
                            <span className="cart__product__price">R$ 189,90</span>
                            <span className="cart__product__installments">3x R$ 63,30</span>
                        </div>
                        <button className="cart__remove__item">Remover Item</button>
                    </div>
                    <div className="cart__product">
                        <div className="cart__product__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139" alt="Produto"/>
                        </div>
                        <div className="cart__info">
                            <div className="cart__product__name">CAMISA SUEDE SPAN</div>
                            <div className="cart__product__size">Tam.: M</div>
                            <div className="cart__product__quantity">
                                <button className="cart__product__add">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <span className="cart__product__cont">1</span>
                                <button className="cart__product__remove">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart__prices">
                            <span className="cart__product__price">R$ 189,90</span>
                            <span className="cart__product__installments">3x R$ 63,30</span>
                        </div>
                        <button className="cart__remove__item">Remover Item</button>
                    </div>
                </div>
                <div className="cart__price">
                    <strong className="cart__price__text">Subtotal - R$ 12162,40</strong>
                </div>
            </div>
        )
    }
}

export default Cart