import React from "react";

export const GlobalContext = React.createContext();

export const QntdItemsCart = ({ children }) => {
	const [qntdItems, setQntdItems] = React.useState(0);

	function addItem(number) {
		setQntdItems(qntdItems + number);
	}

	return <GlobalContext.Provider value={{ qntdItems, addItem }}>{children}</GlobalContext.Provider>;
};
