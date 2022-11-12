import "./App.scss";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import React from "react";
import { QntdItemsCart } from "./contexts/GlobalContext";

function App() {
	return (
		<div className="App">
			<QntdItemsCart>
				<Header />

				<div className="products-list" style={{ padding: "50px 30px" }}>
					<ProductCard />
				</div>
			</QntdItemsCart>
		</div>
	);
}

export default App;
