import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai';
import { useCart } from '../../../Context/useCart';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface propsType {
    img: string;
    name: string;
    price: string;
    qty : number;
}

const ProductCard:React.FC<propsType> = ({img, name, price, qty}) => {
    const { cartItems,setCartItems } = useCart()
      const [isAdded,setIsAdded] = useState(false);
      const [count, setCount] = useState(1);

      useEffect(()=>{
        setCount(qty);
      },[])

     const handleClick = () => {
        setCartItems((prev)=>[...prev,{img: img, name: name, price: price, qty:count}])
        setIsAdded(true)    
     } 
     const handleInc = () => {
        setCount(count + 1);
     }
     const handleDec = () => {
        setCount(count - 1);
     }
 return (
    <div className="border border-gray-400 hover:border-gray-600
                     hover:scale-105 transition-transform rounded-lg">
        <img className='w-full h-[60%]' src={img} alt={name}/>
        <div className='space-y-2 relative p-4'>
            <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
              <h3 className='font-medium'>{name}</h3>
              <h3 className='text-2xl font-medium text-red-600'>{price}</h3>
        {
              isAdded && count >0 ?
              <span className="place-items-center flex flex-row gap-2 absolute top-1 right-4 text-[22px]
                                 cursor-pointer">
                    <AiOutlineMinus onClick={handleDec}/> {count} 
                     <AiOutlinePlus onClick={handleInc}  />
               </span>  :
             <div className='absolute top-2 right-4 bg-accent hover:bg-accentDark text-white text-[28px] w-[50px]
                        h-[50px] rounded-full grid place-items-center cursor-pointer'>
                            <AiOutlineShopping onClick={handleClick} />
             </div>
        }
      </div>
    </div>
 )
}

export default ProductCard;
