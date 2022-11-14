import ProductImg from '../../assets/img/ouro.jpg'
import './ProductCard.scss'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useState, useContext } from 'react'

const ProductCard = ({ id, name, price, imgBase64 }) => {
  // console.log('props', { id, name, price, imgBase64 })
  const [qntdProduct, setQntdProduct] = useState(0)
  const data = useContext(GlobalContext)

  function convertPrice(price) {
    console.log('price', price)
    var value = price ? price.toString() : 0.00
    return value ? 'R$ ' + value.replace('.', ',') : 0
  }

  function handleAddToCart(id, quantity) {
    // data.addItem(name, qntdProduct)
    // setQntdProduct(0)
    const payload = {
      id,
      quantity,
    }

    try {
      fetch('http://localhost:3030/cart', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        // .then((data) => setCartproducts(prevState => {
        //   return [
        //     ...prevState,
        //     data
        //   ]
        // }))
    } catch (e) {
      console.error('request error', e)
    }
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imgBase64} alt="" />
      </div>
      <div className="text-container">
        <div className="product-ref">
          <span className="name">{name}</span>
        </div>
        <div className="product-price">
          <span className="price">{convertPrice(price)}</span>
        </div>
      </div>
      <div className="quantity-container">
        <input
          type="number"
          name="product-quantity"
          onChange={(event) => {
            event.target.value < 0 ? setQntdProduct(0) : setQntdProduct(Number(event.target.value))
          }}
          value={qntdProduct}
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleAddToCart(id, qntdProduct)}>Comprar</button>
      </div>
    </div>
  )
}
export default ProductCard
