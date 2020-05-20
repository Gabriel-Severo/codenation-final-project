import React, {useState} from 'react'
import './Search.css'
import SearchResult from './SearchResult'

function Search({allProducts}) {
    const [products, setProducts] = useState([])

    function handleCloseSearch(event){
        event.preventDefault()
        document.querySelector('.search__modal').classList.add('modal__search__hidden')
        document.querySelector('.app').classList.remove('blur')
    }

    function handleSearch(event){
        event.preventDefault()
        const text = event.target.value
        if (event.target.value){//Se não digitar nada retorna vazio para não mostrar nenhum produto
            const products = allProducts.filter(product => {
                return new RegExp(text, 'i').test(product.name)
            })
            setProducts(products)
        }else{
            setProducts([])
        }
    }

    return (
        <div className="search__modal modal__search__hidden">
            <div className="search__top">
                <button onClick={handleCloseSearch} className="return__button">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <strong>Buscar Produtos</strong>
            </div>
            <div className="search__form">
                <input onChange={handleSearch} className="search__input" placeholder="Buscar por produto..." type="text"/>
            </div>
            <div className="search__results">
                {products.length ? products.map((product, index) => {
                    return <SearchResult key={index} product={product}/>
                }): <div className="product__notfound">Nenhum item encontrado :\</div>}
            </div>
        </div>
    )
}

export default Search