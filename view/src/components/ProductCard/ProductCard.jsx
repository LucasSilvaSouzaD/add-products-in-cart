import ProductImg from '../../assets/img/ouro.jpg'
import './ProductCard.scss'

const ProductCard = () => {

  const getProducts = async () => {
    const teste = await fetch('http://localhost:3030/products').then(data => data.json())
    console.log('teste ==>', teste)
  }

  getProducts()

  return(
    <div className="card-container">
      <div className="image-container">
        <img src={ProductImg} alt="" />
      </div>
      <div className="text-container">
        <div className="product-ref">
          <span className="name">Nome do Produto</span>
          <span className="measure">terá medida no produto?</span>
        </div>
        <div className="product-price">
          <span className="price">R$ 00,00</span>
        </div>
      </div>
      <div className="quantity-container">
        <input type="number" name="product-quantity" id="product-quantity" />
      </div>
      <div className="button-container">
        <button>Comprar</button>
      </div>
    </div>
  )
}
export default ProductCard