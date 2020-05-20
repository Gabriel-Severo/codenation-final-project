import React from 'react'
import './TopBar.css'

function TopBar(){
    function handleOpenSearch(event){
        event.preventDefault()
        document.querySelector('.search__modal').classList.remove('modal__search__hidden')
        document.querySelector('.app').classList.add('blur')
    }

    function handleOpenCart(event){
        event.preventDefault()
        document.querySelector('.cart__modal').classList.remove('modal__cart__hidden')
        document.querySelector('.app').classList.add('blur')
    }

    return (
        <header>
            <div className="content">
                <a href="/" className="header__logo">
                    <p>Fashionista</p>
                </a>
                <div className="header__icons">
                    <button onClick={handleOpenSearch} className="header__icons--search">
                        <i className="fas fa-search"></i>
                    </button>
                    <button onClick={handleOpenCart} className="header__icons--cart">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default TopBar