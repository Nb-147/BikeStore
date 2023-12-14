import { createContext, useContext, useState } from "react";
import { updateDoc, doc, getFirestore } from 'firebase/firestore';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isProduct = (productId) => cartList.findIndex((prod) => prod.id === productId);

  const addProduct = (newProduct) => {
    const index = isProduct(newProduct.id);

    if (index !== -1) {
      cartList[index].quantity += newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([
        ...cartList,
        newProduct
      ]);
    }
  };

  const removeProduct = (productId) => {
    const removedProduct = cartList.find((prod) => prod.id === productId);

    if (removedProduct) {
      const db = getFirestore();
      const productDocRef = doc(db, 'products', removedProduct.id);

      updateDoc(productDocRef, { stock: removedProduct.stock })
        .then(() => {
          setCartList(cartList.filter((prod) => prod.id !== productId));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const totalQuantity = () => cartList.reduce((total, product) => total += product.quantity, 0);
  const totalPrice = () => cartList.reduce((total, product) => total += (product.price * product.quantity), 0);

  const clearCart = () => {
    setCartList([]);
  };

  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{
      cartList,
      addProduct,
      clearCart,
      deleteCart,
      totalQuantity,
      totalPrice,
      removeProduct
    }}>
      {children}
    </CartContext.Provider>
  );
};