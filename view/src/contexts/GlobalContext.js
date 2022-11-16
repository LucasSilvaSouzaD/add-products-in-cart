import { useEffect } from "react";
import {createContext, useState} from "react";

export const GlobalContext = createContext();

export const QntdItemsCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
	const [qntdItems, setQntdItems] = useState(0);

	function addItem(name, price, imgBase64, number) {
		setQntdItems(qntdItems + number);
    var obj = {}
    
    if(cartProducts.length){
      cartProducts.forEach((item) => {
        if(item.name === name){
          item.qtd += number
        }else{
          obj = {
            name: name,
            price: price,
            img: imgBase64,
            qtd: number
          }
          setCartProducts([...cartProducts, obj])
        }
      })
    }else{
      obj = {
        name: name,
        price: price,
        img: imgBase64,
        qtd: number
      }
      setCartProducts([...cartProducts, obj])
    }
	}

  useEffect(() => {
    console.log('GLOBAL mudou cartProducts  --> ', cartProducts)
  }, [cartProducts])

	return <GlobalContext.Provider value={{ qntdItems, addItem, cartProducts }}>{children}</GlobalContext.Provider>;
};
