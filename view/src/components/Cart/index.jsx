import React from "react";
import CartLogo from "../../assets/img/cart.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./style.scss";

const Cart = () => {
	const data = React.useContext(GlobalContext);

	return (
		<div>
			<img className="logoIcon" src={CartLogo} alt="Logo para o Cart" />
			{data.qntdItems > 0 && (
				<div className="cartQntd">
					<span>{data.qntdItems}</span>
				</div>
			)}
		</div>
	);
};

export default Cart;
