import React from 'react'
import './Search.css'
import Result from './Result'

class Search extends React.Component {
    render(){
        return (
            <div className="search__modal">
                <div className="search__top">
                    <button className="return__button">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <strong>Buscar Produtos</strong>
                </div>
                <div className="search__form">
                    <input className="search__input" placeholder="Buscar por produto..." type="text"/>
                </div>
                <div className="search__results">
                    <Result/>
                </div>
            </div>
        )
    }
}

export default Search