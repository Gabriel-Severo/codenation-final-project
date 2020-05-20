import React, {useState, useEffect} from 'react'
import Products from './Products'
import TopBar from './TopBar'
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
            <TopBar products={products}/>
            <Products products={products}/>
        </div>
    )
}

export default Home