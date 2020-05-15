import React from 'react'

class Result extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Result