import React from 'react'
import './SearchResult.css'
function SearchResult({product}) {
    return (
        <div className="product__result">
            <div className="product__result__image">
                <img className="product__image" src={product.image ? product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt="Produto"/>
            </div>
            <div className="product__result__name">{product.name}</div>
            <div className="product__result__prices">
                <div className="product__result__price">{product.actual_price}</div>
                <div className="product__result__installments">{product.installments}</div>
            </div>
        </div>
    )
}

export default SearchResult