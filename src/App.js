import React, {useState, useEffect} from 'react';
import './App.css';
import TopBar from './components/TopBar'
import Products from './components/Products'
import Search from './components/Search'
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([])

  useEffect( () => {
    async function getProducts(){
      const products = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(products => products.json())
      setProducts(products)
    }
    getProducts()
  }, [])

    return (
      <React.Fragment>
        <div className="app">
          <TopBar/>
          <Products products={products}/>
          <Search products={products}/>
          <Cart/>
        </div>
      </React.Fragment>
    )
}

export default App;
