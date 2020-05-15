import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import Products from './components/Products'
import Search from './components/Search'

class App extends React.Component {
  constructor(){
    super()
    this.state = {products: []}
  }

  async componentDidMount(){
    const products = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(products => products.json())
    this.setState({products})
  }

  render(){
    return (
      <React.Fragment>
        <TopBar/>
        <Products products={this.state.products}/>
        <Search/>
      </React.Fragment>
    )
  }
}

export default App;
