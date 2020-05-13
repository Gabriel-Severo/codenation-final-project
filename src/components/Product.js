import React from 'react'
import './Product.css'
class Product extends React.Component{
    render(){
        return(
            <div className="product__box">
                <div className="product__image">
                    <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912" alt="VESTIDO TRANSPASSE BOW"/>
                </div>
                <div className="product__info">
                    <h3 className="product__name">VESTIDO TRANSPASSE BOW</h3>
                    <span className="product__price">R$ 199,90</span>
                </div>
            </div>
        )
    }
}

export default Product