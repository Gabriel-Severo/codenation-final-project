import React from 'react'
import './TopBar.css'

class TopBar extends React.Component{

    handleOpenSearch(event){
        event.preventDefault()
        document.querySelector('.search__modal').classList.remove('modal__hidden')
        document.querySelector('.app').classList.add('blur')
    }

    render(){
        return (
        <header>
            <div className="content">
                <a href="/" className="header__logo">
                    <p>Fashionista</p>
                </a>
                <div className="header__icons">
                    <button onClick={e => {this.handleOpenSearch(e)}} className="header__icons--search">
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