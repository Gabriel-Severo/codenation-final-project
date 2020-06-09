import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import TopBar from '../TopBar'
import {setCart, setQuantity} from '../../actions'


function Sale() {
    const { products, cart, quantity } = useSelector(state => state)
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const [selected, setSelected] = useState('')
    const { id } = useParams(null)

    useEffect(() => {
        function getProduct(){
            return products.filter(product => {
                return product.code_color === id
            })[0]
        }
        setProduct(getProduct())
    }, [id, products])

    function handleSelected(event) {
        event.preventDefault()
        document.querySelector('.sale__size--selected') && document.querySelector('.sale__size--selected').classList.remove('sale__size--selected')
        event.target.classList.add('sale__size--selected')
        setSelected(event.target.textContent)
    }
    
    function handleAddCart(event) {
        event.preventDefault()
        if(!selected){
            document.querySelector('.sale__sizenotselected').classList.remove('hidden')
            setTimeout(() => {
                document.querySelector('.sale__sizenotselected').classList.add('hidden')
            }, 5000)
            return;
        }
        let cont = cart.filter(cart=> {
            return cart.code_color === id && selected === cart.size
        })
        cont = cont.length ? ++cont[0].quantity : 1
        if(cont === 1){
            dispatch(setCart([...cart, {
                name: product.name,
                code_color: product.code_color,
                size: selected,
                quantity: cont,
                actual_price: product.actual_price,
                installments: product.installments,
                image: product.image
            }]))
        }else{
            dispatch(setCart(cart))
        }
        dispatch(setQuantity(quantity+1))
    }
    
    return (
        <div className="app">
            <TopBar products={products}/>
            <div className="sale__box">
                <div className="sale__image">
                    {product && <span className="discount">{product.discount_percentage}</span>}
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
                    <span className="sale__sizenotselected hidden">Você não selecionou um tamanho para o produto.</span>
                    <div className="sale__sizes">
                        <span className="sizes__text">Escolha o tamanho</span>
                        <div className="sale__size__options">
                            {product && product.sizes && product.sizes.map((size, index) => {
                                return size.available && <button key={index} onClick={handleSelected} className="sale__size">{size.size}</button>
                            })}
                        </div>
                    </div>
                    <button onClick={handleAddCart} className="sale__addcart">Adicionar à Sacola</button>
                </div>
            </div>
        </div>
    )
}

export default Sale