import React from "react";
import { useCart } from "../../../Context/useCart";

interface propsType {
    size: String;
}

const Cartcountbadge:React.FC<propsType> = ({size}) => {
  const {cartItems,} = useCart();
  
  
  return (
    <div className={`absolute bg-red-600 text-white text-[14px]
        ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {cartItems?cartItems.length:'0'}
    </div>
  )
}

export default Cartcountbadge
