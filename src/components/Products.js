import React from 'react'
import './Products.css'
import Product from './Product'

class Products extends React.Component{
    render(){
        return(
            <section className="products">
                <div className="container">
                    <div className="number__items">22 items</div>
                    <div className="products__grid">
                        <Product/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Products