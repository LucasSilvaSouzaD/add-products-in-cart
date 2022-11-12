import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.scss'

const ProductList = () => {
  const [dados, setDados] = useState();

  const getProducts = async () => {
    const getProducts = await fetch('http://localhost:3030/products').then(data => data.json())
    setDados(getProducts)
  }

  getProducts()

  if (!dados) return null;

  return(
    <div className="product-list-container">
      {dados.map(({ id, name, price, imgBase64 }) => (
        <ProductCard key={id} id={id} name={name} price={price} imgBase64={imgBase64} />
      ))}
    </div>
  )
}
export default ProductList