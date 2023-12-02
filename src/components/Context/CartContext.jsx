import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const isProduct = (pid) => cartList.findIndex(prod => prod.id === pid)
    const addProduct = (newProduct) => {

        const index = isProduct(newProduct.id) 
        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity 
            setCartList([...cartList]) 
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])
        }
    }

    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))
    const cantidadTotal = () => cartList.reduce((cantidadTotal, objProduct) => cantidadTotal += objProduct.quantity, 0)
    const precioTotal = () => cartList.reduce((precioTotal, objProduct) => precioTotal += (objProduct.price * objProduct.quantity), 0)

    const deleteCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addProduct, 
            deleteCart, 
            cantidadTotal, 
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}
