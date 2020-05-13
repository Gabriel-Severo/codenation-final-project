import React from 'react'
import './TopBar.css'

class TopBar extends React.Component{
    render(){
        return (
        <header>
            <div className="content">
                <a href="/" className="header__logo">
                    <p>Fashionista</p>
                </a>
                <div className="header__icons">
                    <button className="header__icons--search">
                        <i className="fas fa-search"></i>
                    </button>
                    <button className="header__icons--cart">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </header>
    )}
}

export default TopBar