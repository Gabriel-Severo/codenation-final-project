import React from 'react'
import './Search.css'
import Result from './Result'

class Search extends React.Component {

    constructor(){
        super()
        this.state = {products: []}
    }

    handleCloseSearch(event){
        event.preventDefault()
        document.querySelector('.search__modal').classList.add('modal__hidden')
    }

    handleSearch(event){
        event.preventDefault()
        const text = event.target.value
        if (event.target.value){
            const products = this.props.products.filter(product => {
                return new RegExp(text, 'i').test(product.name)
            })
            this.setState({products})
        }else{
            this.setState({products: []})
        }
    }

    render(){
        return (
            <div className="search__modal modal__hidden">
                <div className="search__top">
                    <button onClick={e => {this.handleCloseSearch(e)}} className="return__button">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <strong>Buscar Produtos</strong>
                </div>
                <div className="search__form">
                    <input onChange={e => {this.handleSearch(e)}} className="search__input" placeholder="Buscar por produto..." type="text"/>
                </div>
                <div className="search__results">
                    {this.props.products && this.state.products.map(product => {
                        return <Result key={product.code_color} product={product}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Search