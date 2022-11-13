import { useEffect } from "react";
import {createContext, useState} from "react";

export const GlobalContext = createContext();

export const QntdItemsCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
	const [qntdItems, setQntdItems] = useState(0);

	function addItem(name, number) {
		setQntdItems(qntdItems + number);

    setCartProducts(prevState => {
      return [...prevState, name]
    })
	}

  useEffect(() => {
    console.log('mudou cartProducts', cartProducts)
  }, [cartProducts])

	return <GlobalContext.Provider value={{ qntdItems, addItem, cartProducts, setCartProducts }}>{children}</GlobalContext.Provider>;
};
