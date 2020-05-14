import React from 'react'
import './Products.css'
import Product from './Product'

class Products extends React.Component{
    render(){
        return(
            <section className="products">
                <div className="container">
                    <div className="number__items">{this.props.products.length} items</div>
                    <div className="products__grid">
                        {this.props.products && this.props.products.map((product, index) => {
                            return <Product key={index} product={product}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Products