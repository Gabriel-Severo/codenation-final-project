import React, {useState, useEffect} from 'react'
import TopBar from './TopBar'
import Products from './Products'
import Search from './Search'
import Cart from './Cart'
import './Home.css'

function Home() {
    const [products, setProducts] = useState([])

    useEffect( () => {
        async function getProducts(){
        const products = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(products => products.json())
        setProducts(products)
        }
        getProducts()
    }, [])

    return (
        <div className="app">
            <TopBar/>
            <Products products={products}/>
            <Search allProducts={products}/>
            <Cart/>
        </div>
    )
}

export default Home