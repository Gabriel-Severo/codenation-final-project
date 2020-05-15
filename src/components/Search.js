import React from 'react'
import './Search.css'

class Search extends React.Component {
    render(){
        return (
            <div className="search__modal">
                <div className="search__top">
                    <button className="return__button">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <strong>Buscar Produtos</strong>
                </div>
                <div className="search__form">
                    <input className="search__input" placeholder="Buscar por produto..." type="text"/>
                </div>
                <div className="search__results">
                    <div className="product__result">
                        <div className="product__result__image">
                            <img className="product__image" src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001609_002_catalog_1.jpg?" alt="Produto"/>
                        </div>
                        <div className="product__result__name">VESTIDO FRANZIDO RECORTES</div>
                        <div className="product__result__prices">
                            <div className="product__result__price">R$ 69,90</div>
                            <div className="product__result__installments">2x R$ 34,95</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search