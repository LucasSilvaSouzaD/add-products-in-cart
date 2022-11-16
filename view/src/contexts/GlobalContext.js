import { useEffect } from "react";
import {createContext, useState} from "react";

export const GlobalContext = createContext();

export const QntdItemsCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
	const [qntdItems, setQntdItems] = useState(0);
	const [productsIds, setProductsIds] = useState([]);

	function addItem(id, name, price, imgBase64, number) {
		setQntdItems(qntdItems + number);
    var obj = {}

    if(cartProducts.length > 0){
      if(!productsIds.includes(id)){
        cartProducts.forEach((item) => {
          if(item.id !== id){
            obj = {
              id: id,
              name: name,
              price: price,
              img: imgBase64,
              qtd: number
            }

            setCartProducts([...cartProducts, obj])
            setProductsIds([...productsIds, id])
          }
        })
      }else{
        cartProducts[productsIds.indexOf(id)].qtd += number;
      }
    }else{
      obj = {
        id: id,
        name: name,
        price: price,
        img: imgBase64,
        qtd: number
      }

      setCartProducts([...cartProducts, obj])
      setProductsIds([...productsIds, id])
    }
	}

  useEffect(() => {
    console.log('GLOBAL mudou cartProducts  --> ', cartProducts)
  }, [cartProducts])

	return <GlobalContext.Provider value={{ qntdItems, addItem, cartProducts }}>{children}</GlobalContext.Provider>;
};
