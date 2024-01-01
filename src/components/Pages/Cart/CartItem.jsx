import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "../../Context/useCart";
import React, { useState } from 'react';


const CartItem = () => {
  const { cartItems, setCartItems } = useCart();
  const [count, setCount] = useState(1);

  const handleInc = () => {
    setCount(count + 1);
 }
 const handleDec = () => {
    setCount(count - 1);
 }
 const removeItem = (index) => {
  console.log("objectftyujbij")
  const updatedItems = cartItems.filter((item, i) => i !== index);
  setCartItems(updatedItems); // Update the state
}

  return (
    <>
      <div className="min-h-[80vh] h-auto">
        <div className="flex ml-[230px] items-center mt-9">
          <div className="grid grid-cols-5 gap-[120px] text-lg">
            <span>ITEM</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>SUBTOTAL</span>
            <span>REMOVE</span>
          </div>
        </div>
        <hr className="rule mx-[175px]"></hr>

        <div className="mx-[175px] h-auto relative">
          {
          cartItems.length > 0 ? (
            cartItems.map((cart, index) => {
              return (
                <div key={index}
                  className="w-auto my-4 p-4 bg-slate-200 grid text-2xl
                  place-items-center grid-cols-5 gap-[70px] shadow-xl">
                  <span className="hover:scale-105">
                    <img src={cart.img} alt=""></img>
                    <p>{cart.title}</p>
                  </span>
                  <span>{cart.price}</span>
                  <span className="flex items-center gap-3">
                    
                    <AiOutlineMinus onClick={handleDec}/> {cart.qty} 
                    <AiOutlinePlus onClick={handleInc}/>
                  </span>
                  <span>₹ 1000/-</span>
                  <span onClick={() => removeItem(index)} className="hover:scale-125 hover:text-red-600">
                     <AiFillDelete />
                  </span>
                </div>
              );
            })
          ) : (
            <h1>No items in cart</h1>
          )}
        </div>

        <div className="mx-[175px] min-h-[200px] relative text-[18px]">
          <div className="absolute right-0 bottom-0 w-[220px] my-4 font-semibold p-5 bg-slate-200">
            <p>
              Sub Total : <span className="text-red-600">₹</span> 1000/-
            </p>
            <p>
              Shipping Fee : <span className="text-red-600">₹</span> 50/-
            </p>
            <hr></hr>
            <p>
              Order Total : <span className="text-red-600">₹</span> 1050/-
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
