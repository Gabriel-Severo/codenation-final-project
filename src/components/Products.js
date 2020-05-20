import React from 'react'
import './Products.css'
import Product from './Product'
import { Link } from 'react-router-dom'

function Products({products}){
    return(
        <section className="products">
            <div className="container">
                <div className="number__items">{products.length} items</div>
                <div className="products__grid">
                    {products && products.map((product, index) => {
                        const link = `/products/${product.code_color}`
                        return (
                            <Link key={index} to={link}>
                                <Product product={product}/>
                            </Link>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products