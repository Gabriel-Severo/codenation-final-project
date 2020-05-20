import React from 'react'
import './Products.css'
import Product from './Product'

function Products({products}){
    return(
        <section className="products">
            <div className="container">
                <div className="number__items">{products.length} items</div>
                <div className="products__grid">
                    {products && products.map((product, index) => {
                        return <Product key={index} product={product}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products