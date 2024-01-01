import { useState,useContext,createContext } from "react"

const cartContext = createContext();
export const useCart = () => {
    return useContext(cartContext)
}

const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{
        cartItems,
        setCartItems,
    }}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
