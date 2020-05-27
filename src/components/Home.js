import React from 'react'
import Products from './Products'
import TopBar from './TopBar'
import './Home.css'
import {useSelector} from 'react-redux'

function Home() {
    const {products} = useSelector(state => state)
    return (
        <div className="app">
            <TopBar products={products}/>
            <Products products={products}/>
        </div>
    )
}

export default Home