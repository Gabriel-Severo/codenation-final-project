import React from 'react'
import './Product.css'
class Product extends React.Component{
    render(){
        return(
            <div className="product__box">
                <div className="image__box">
                    {this.props.product.discount_percentage && <span class="discount">{this.props.product.discount_percentage}</span>}
                    <img class="product__image" src={this.props.product.image ? this.props.product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt={this.props.product.name}/>
                </div>
                <div className="product__info">
                    <h3 className="product__name">{this.props.product.name}</h3>
                    <div className="product__prices">
                        {this.props.product.discount_percentage ?
                        <>
                            <span className="product__price strikethrough">{this.props.product.regular_price}</span>
                            <span class="product__price--new">{this.props.product.actual_price}</span>
                        </> : <span className="product__price">{this.props.product.regular_price}</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Product