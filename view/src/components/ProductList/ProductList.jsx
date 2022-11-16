import { useEffect, useState, useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import './ProductList.scss'

const ProductList = () => {
  const [dados, setDados] = useState('')
  const { setCartProducts, data } = useContext(GlobalContext)

  function handleFormatProducts(productsResponse) {
    setDados(productsResponse)
  }

  useEffect(() => {
    try {
      fetch('http://localhost:3030/products')
        .then((response) => response.json())
        .then((data) => handleFormatProducts(data))
    } catch (e) {
      console.error('request error', e)
    }
  }, [])

  if (!dados) return null

  return (
    <div className="product-list-container">
      {dados.map(({ id, name, price, imgBase64 }) => (
        <ProductCard key={id} id={id} name={name} price={price} imgBase64={imgBase64} />
      ))}
    </div>
  )
}
export default ProductList
