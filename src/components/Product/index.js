import React from 'react'
import './style.css'
function Product({product}){
    return(
        <div className="product__box">
            <div className="image__box">
                {product.discount_percentage && <span className="discount">{product.discount_percentage}</span>}
                <img className="product__image" src={product.image ? product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt={product.name}/>
            </div>
            <div className="product__info">
                <h3 className="product__name">{product.name}</h3>
                <div className="product__prices">
                    {product.discount_percentage ?
                    <>
                        <span className="product__price strikethrough">{product.regular_price}</span>
                        <span className="product__price--new">{product.actual_price}</span>
                    </> : <span className="product__price">{product.regular_price}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product