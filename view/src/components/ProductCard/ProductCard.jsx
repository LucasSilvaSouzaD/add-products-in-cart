import ProductImg from '../../assets/img/ouro.jpg'
import './ProductCard.scss'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useState, useContext } from 'react'

const ProductCard = ({ id, name, price, imgBase64 }) => {
  const [qntdProduct, setQntdProduct] = useState(0)
  const data = useContext(GlobalContext)

  function convertPrice(price) {
    var value = price.toString()
    return 'R$ ' + value.replace('.', ',')
  }

  function handleClick() {
    data.addItem(name, qntdProduct)
    setQntdProduct(0)
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={ProductImg} alt="" />
      </div>
      <div className="text-container">
        <div className="product-ref">
          <span className="name">{name}</span>
          {/* TODO: VERIFICAR COM O TIME SE REALMENTE TERÁ*/}
          {/* <span className="measure">terá medida no produto?</span> */}
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
        <button onClick={handleClick}>Comprar</button>
      </div>
    </div>
  )
}
export default ProductCard
