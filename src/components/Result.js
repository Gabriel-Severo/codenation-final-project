import React from 'react'

class Result extends React.Component {
    render() {
        return (
            <div className="product__result">
                <div className="product__result__image">
                    <img className="product__image" src={this.props.product.image ? this.props.product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt="Produto"/>
                </div>
                <div className="product__result__name">{this.props.product.name}</div>
                <div className="product__result__prices">
                    <div className="product__result__price">{this.props.product.actual_price}</div>
                    <div className="product__result__installments">{this.props.product.installments}</div>
                </div>
            </div>
        )
    }
}

export default Result