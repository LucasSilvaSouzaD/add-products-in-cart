import { useEffect, useState, useContext } from 'react'
import CartLogo from '../../assets/img/cart.svg'
import IconClose from '../../assets/img/icon-closed.png'
import deleteProductIcon from '../../assets/img/icon-delete-product.png'
import ProductImg from '../../assets/img/ouro.jpg'
import { GlobalContext } from '../../contexts/GlobalContext'
import './Cart.scss'

const Cart = () => {
  const data = useContext(GlobalContext)
  const [openCartModal, setOpenCartModal] = useState(false)

  useEffect(() => {
    const productsState = data.cartProducts

    console.log('activedProducts')
  }, [data.cartProducts])

  const testeProdutosCart = [
    {
      id: 5000,
      name: 'Piada Merda',
      price: 10.25,
      inStock: 10,
      maxCartQuantity: 5,
      imgBase64: '',
      quantity: 1,
    },
    {
      id: 53412,
      name: 'A Volta dos que não foram',
      inStock: 10,
      price: 10.25,
      maxCartQuantity: 5,
      imgBase64: '',
      quantity: 1,
    },
  ]

  function handleOpenCartModal() {
    console.log('clicou')
    setOpenCartModal(true)
  }

  function handleCloseCartModal() {
    console.log('clicou')
    setOpenCartModal(false)
  }

  function handleDeleteCurrentProduct() {
    console.log('vai excluir producto')
  }

  return (
    <div className="cart-container">
      <div className="icon-container" onClick={handleOpenCartModal}>
        <img className="logoIcon" src={CartLogo} alt="Logo para o Cart" />
        {data.qntdItems > 0 && (
          <div className="cartQntd">
            <span>{data.qntdItems}</span>
          </div>
        )}
      </div>
      <div className={`mini-cart-container ${openCartModal ? 'open' : ''}`}>
        <div className="top-container">
          <h2>Meu Carrinho</h2>
          <div className="icon-close" onClick={handleCloseCartModal}>
            <img src={IconClose} alt="Ícone para fechar o modal" />
          </div>
        </div>
        {testeProdutosCart.length ? (
          <div className="products-cart-list">
            {testeProdutosCart.map((product) => (
              <div className="item-container" key={product.id}>
                <div className="img-container">
                  <img src={ProductImg} alt="" />
                </div>
                <div className="text-container">
                  {/* <div className="delete-icon-container" onClick={handleDeleteCurrentProduct}>
                    <img src={deleteProductIcon} alt="Ícone para excluir o produto" />
                  </div> */}
                  <span className="product-name">{product.name}</span>
                  <span className="product-ref">ref: {product.id}</span>
                  <span className="product-quantity">
                    {product.quantity}X {product.price}
                  </span>
                </div>
              </div>
            ))}

            <div className="total-cart-container">
              <span className="text">Total</span>
              <span className="total-price">{testeProdutosCart.reduce((acc, product) => (acc += product.price), 0)}</span>
            </div>
          </div>
        ) : (
          <div className="no-produtcts-container">
            <h2>Não encontramos nenhum produto adicionado!</h2>
            <span>Por favor, adicione um produto</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
