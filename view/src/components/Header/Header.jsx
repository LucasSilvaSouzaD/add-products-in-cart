import ShopLogo from "../../assets/img/logo.svg";
import Cart from "../Cart";
import React from "react";

import "./Header.scss";

const Header = () => {
	return (
		<header>
			<div className="links-container">
				<div className="store-icon">
					<img src={ShopLogo} alt="Logo da Loja" />
					<h1>Golden Store</h1>
				</div>
				<Cart />
			</div>
		</header>
	);
};
export default Header;
