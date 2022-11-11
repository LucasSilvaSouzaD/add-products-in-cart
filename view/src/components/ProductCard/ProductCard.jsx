import ProductImg from '../../assets/img/ouro.jpg'
import './ProductCard.scss'

const ProductCard = () => {
  const getProducts = async () => {
    // const teste = fetch('localhost:3030/products').then(data => data.json())
    // const teste = await fetch('http://localhost:3030/products', {
    //   headers: {
    //     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'accept-language': 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
    //     'cache-control': 'no-cache',
    //     pragma: 'no-cache',
    //     'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-ch-ua-platform': '"Linux"',
    //     'sec-fetch-dest': 'document',
    //     'sec-fetch-mode': 'navigate',
    //     'sec-fetch-site': 'none',
    //     'sec-fetch-user': '?1',
    //     'upgrade-insecure-requests': '1',
    //   },
    //   referrerPolicy: 'strict-origin-when-cross-origin',
    //   body: null,
    //   method: 'GET',
    //   mode: 'no-cors',
    //   credentials: 'include',
    // })
    // .then(data => data.json())

    // console.log('teste', teste.json())

    const response = [
      {
        id: 5000,
        name: 'Piada Merda',
        price: 10.25,
        inStock: 10,
        maxCartQuantity: 5,
        imgBase64: '',
      },
      {
        id: 53412,
        name: 'A Volta dos que não foram',
        inStock: 10,
        price: 10.25,
        maxCartQuantity: 5,
        imgBase64: '',
      },
      {
        id: 31532,
        name: 'Febre DU rato',
        price: 10.25,
        inStock: 10,
        maxCartQuantity: 5,
        imgBase64: '',
      },
    ]

    console.log('response', response)
  }

  getProducts()

  return (
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
