import React from 'react'
import Products from './Products'
import TopBar from './TopBar'
import './Home.css'
import {useSelector} from 'react-redux'
import Loading from './Loading'

function Home() {
    const {products, loading} = useSelector(state => state)
    return (
        <div className="app">
            <TopBar products={products}/>
            {loading && <Loading/>}
            <Products products={products}/>
        </div>
    )
}

export default Home