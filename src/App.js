import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Sale from './components/Sale'
import { useDispatch } from 'react-redux'

import { setProducts } from './actions'

function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    async function getProducts(){
        const products = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(products => products.json())
        dispatch(setProducts(products))
    }
    getProducts()
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products/:id' component={Sale}/>
      </Switch>
    </Router>
  )
}

export default App;
