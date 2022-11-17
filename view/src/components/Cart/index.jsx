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

  function handleOpenCartModal() {
    setOpenCartModal(true)
  }

  function handleCloseCartModal() {
    setOpenCartModal(false)
  }

  //TODO
  // function handleDeleteCurrentProduct() {
  //   console.log('vai excluir producto')
  // }

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
        {data.cartProducts.length ? (
          <div className="products-cart-list">
            {data.cartProducts.map((product) => (
              <div className="item-container" key={product.id}>
                <div className="img-container">
                  <img src={product.img} alt="" />
                </div>
                <div className="text-container">
                  {/* <div className="delete-icon-container" onClick={handleDeleteCurrentProduct}>
                    <img src={deleteProductIcon} alt="Ícone para excluir o produto" />
                  </div> */}
                  <span className="product-name">{product.name}</span>
                  <span className="product-ref">ref: {product.id}</span>
                  <span className="product-quantity">
                    {product.qtd}X {product.price}
                  </span>
                </div>
              </div>
            ))}

            <div className="total-cart-container">
              <span className="text">Total</span>
              <span className="total-price">R$ {data.cartProducts.reduce((acc, product) => (acc += product.price * product.qtd), 0).toFixed(2)}</span>
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
