import React from 'react'
import './Product.css'
class Product extends React.Component{
    render(){
        return(
            <div className="product__box">
                <div className="product__image">
                    {this.props.product.discount_percentage && <span class="discount">{this.props.product.discount_percentage}</span>}
                    <img src={this.props.product.image ? this.props.product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt={this.props.product.name}/>
                </div>
                <div className="product__info">
                    <h3 className="product__name">{this.props.product.name}</h3>
                    <span className="product__price">{this.props.product.regular_price}</span>
                </div>
            </div>
        )
    }
}

export default Product