import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Sale from './components/Sale'

function App() {
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
