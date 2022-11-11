import ShopLogo from '../../assets/img/logo.svg'
import CartLogo from '../../assets/img/cart.svg'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="links-container">
        <div className="store-icon">
        <img src={ShopLogo} alt="Logo da Loja" />
        <h1>Golden Store</h1>
        </div>
        
        <img src={CartLogo} alt="Logo para o Cart" />
      </div>
    </header>
  )
}
export default Header
