import ProductImg from '../../assets/img/ouro.jpg'
import './ProductCard.scss'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useState, useContext } from 'react'

const ProductCard = ({ id, name, price, imgBase64 }) => {
  const [qntdProduct, setQntdProduct] = useState(0)
  const [stockError, setStockError] = useState(false)

  const data = useContext(GlobalContext)

  function haveStock(){
    console.log("Produto sem estoque");
      // setStockError(true)
  }

  function convertPrice(price) {
    var value = price ? price.toString() : 0.00
    return value ? 'R$ ' + value.replace('.', ',') : 0
  }

  function addProductGlobal(id, name, price, imgBase64){
    data.addItem(id, name, price, imgBase64, qntdProduct)
    setQntdProduct(0)
  }

  function handleAddToCart(id, quantity, name, price) {
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
        .then((json) => json.code === 403 ? haveStock() : addProductGlobal(id, name, price, imgBase64));

    } catch (e) {
      console.error('request error', e)
    }
  }

  return (
    <div className="card-container" key={id}>
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
        <button onClick={() => handleAddToCart(id, qntdProduct, name, Number(price), imgBase64)}>Comprar</button>
      </div>
    </div>
  )
}
export default ProductCard
