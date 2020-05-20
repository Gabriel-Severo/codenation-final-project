import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Sale.css'

function Sale() {
    const [products, setProducts] = useState([])
    const { id } = useParams(null)

    useEffect( () => {
        async function getProducts(){
            const products = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(products => products.json())
            setProducts(products)
        }
        getProducts()
    }, [])

    return (
        <div className="sale__box">
            <div className="sale__image">
                <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912" alt="Produto"/>
            </div>
            <div className="sale__info">
                <span className="sale__name">T-SHIRT LEATHER DULL</span>
                <div className="sale__prices">
                    <span className="sale__price strikethrough">R$ 139,90</span>
                    <span className="sale__price--new">R$ 119,90</span>
                    <span className="sale__price__installments">em até 3x R$ 39,97</span>
                </div>
                <div className="sale__sizes">
                    <span className="sizes__text">Escolha o tamanho</span>
                    <div className="sale__size__options">
                        <button className="sale__size sale__size--selected">PP</button>
                        <button className="sale__size">P</button>
                        <button className="sale__size">M</button>
                    </div>
                </div>
                <button className="sale__addcart">Adicionar à Sacola</button>
            </div>
        </div>
    )
}

export default Sale