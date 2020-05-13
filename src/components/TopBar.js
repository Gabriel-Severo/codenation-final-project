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
                <div class="header__icons">
                    <button className="header__icons--search">
                        <i class="fas fa-search"></i>
                    </button>
                    <button className="header__icons--cart">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </header>
    )}
}

export default TopBar