import ProductImg from "../../assets/img/ouro.jpg";
import "./ProductCard.scss";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useState, useContext } from "react";

const ProductCard = () => {
	const [dados, setDados] = useState();

	const [qntdProduct, setQntdProduct] = useState(0);

	const data = useContext(GlobalContext);

  const getProducts = async () => {
    const getProducts = await fetch('http://localhost:3030/products').then(data => data.json())
    setDados(getProducts)
  }

  getProducts()

	// async function handleClick() {
	// 	await fetch("http://localhost:3030/products", {
	// 		mode: "cors",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then((json) => setDados(json))
	// 		.then(console.log("dados  --> ", dados));
	// }

	//handleClick();

	function convertPrice(price) {
		var value = price.toString();
		return "R$ " + value.replace(".", ",");
	}

	function handleClick() {
		data.addItem(qntdProduct);
		setQntdProduct(0);
		document.querySelectorAll("[id=product-quantity]").forEach((e) => {
			e.value = "";
		});
	}

	if (!dados) return null;

	return (
		<div className="container-cards">
      
			{dados.map(({ id, name, price, imgBase64 }) => (
				<div className="card-container" key={id}>
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
							id={`product-quantity`}
							onChange={(event) => {
								setQntdProduct(Number(event.target.value));
							}}
							valeu={qntdProduct}
						/>
					</div>
					<div className="button-container">
						<button onClick={handleClick}>Comprar</button>
					</div>
				</div>
			))}
		</div>
	);
};
export default ProductCard;
