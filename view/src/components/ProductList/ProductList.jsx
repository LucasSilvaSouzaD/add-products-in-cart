import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.scss'

const ProductList = () => {
  const [dados, setDados] = useState('')

  useEffect(() => {
    try {
      fetch('http://localhost:3030/products')
      .then((response) => response.json())
      .then((data) => setDados(data))
    } catch(e) {
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
