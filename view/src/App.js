import "./App.scss";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import React from "react";
import { QntdItemsCart } from "./contexts/GlobalContext";

function App() {
	return (
		<div className="App">
			<QntdItemsCart>
				<Header />

				<div className="products-list" style={{ padding: "50px 30px" }}>
					<ProductList />
				</div>
			</QntdItemsCart>
		</div>
	);
}

export default App;
