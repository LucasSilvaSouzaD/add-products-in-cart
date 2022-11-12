import ProductImg from "../../assets/img/ouro.jpg";
import "./ProductCard.scss";
import { GlobalContext } from "../../contexts/GlobalContext";
import React from "react";

const ProductCard = () => {
	const [dados, setDados] = React.useState();

	const [qntdProduct, setQntdProduct] = React.useState(0);

	const data = React.useContext(GlobalContext);

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
		return value.replace(".", ",");
	}

	function handleClick() {
		data.addItem(qntdProduct);
		setQntdProduct(0);
		document.querySelectorAll("[id=product-quantity]").forEach((e) => {
			e.value = "";
		});
	}

	const response = [
		{
			id: 5000,
			name: "Piada Merda",
			price: 10.25,
			inStock: 10,
			maxCartQuantity: 5,
			imgBase64: "",
		},
		{
			id: 53412,
			name: "A Volta dos que não foram",
			inStock: 10,
			price: 10.25,
			maxCartQuantity: 5,
			imgBase64: "",
		},
		{
			id: 31532,
			name: "Febre DU rato",
			price: 10.25,
			inStock: 10,
			maxCartQuantity: 5,
			imgBase64: "",
		},
	];

	//setDados(response);

	if (!response) return null;

	return (
		<div className="container-cards">
			{response.map(({ id, name, price, imgBase64 }) => (
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
							<span className="price">R$ {convertPrice(price)}</span>
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
