import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import './Sale.css'
import { useSelector } from 'react-redux'
import TopBar from './TopBar'


function Sale() {
    const { products } = useSelector(state => state)
    const [product, setProduct] = useState({})
    const { id } = useParams(null)

    useEffect(() => {
        function getProduct(){
            return products.filter(product => {
                return product.code_color === id
            })[0]
        }
        setProduct(getProduct())
    }, [id, products])
    
    return (
        <div className="app">
            <TopBar products={products}/>
            <div className="sale__box">
                <div className="sale__image">
                    <img src={product && product.image ? product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'} alt="Produto"/>
                </div>
                <div className="sale__info">
                    <span className="sale__name">{product && product.name}</span>
                    <div className="sale__prices">
                        {product && product.on_sale ?
                            <>
                                <span className="sale__price strikethrough">{product && product.regular_price}</span>
                                <span className="sale__price--new">{product && product.actual_price}</span>
                                <span className="sale__price__installments">em até {product && product.installments}</span>
                            </>
                            :
                            <>
                                <span className="sale__price">{product && product.actual_price}</span>
                                <span className="sale__price__installments">em até {product && product.installments}</span>
                            </>
                        }
                    </div>
                    <div className="sale__sizes">
                        <span className="sizes__text">Escolha o tamanho</span>
                        <div className="sale__size__options">
                            {product && product.sizes && product.sizes.map((size, index) => {
                                return size.available && <button key={index} className="sale__size">{size.size}</button>
                            })}
                        </div>
                    </div>
                    <button className="sale__addcart">Adicionar à Sacola</button>
                    <Link to="/">Voltar</Link>
                </div>
            </div>
        </div>
    )
}

export default Sale