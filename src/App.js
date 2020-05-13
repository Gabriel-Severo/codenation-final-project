import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import Products from './components/Products'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <TopBar/>
        <Products/>
      </React.Fragment>
    )
  }
}

export default App;
