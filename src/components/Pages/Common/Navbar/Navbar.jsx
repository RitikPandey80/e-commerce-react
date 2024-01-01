import {BsSearch} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Cartcountbadge from "./Cartcountbadge.tsx";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-[#232f3e] py-3">
   <div className="container hidden lg:block p-2">
    <div className="justify-between flex items-center">
    <Link to="/">
      <h1 className="text-2xl bg-[#cfd4e1] hover:scale-105 px-4 py-1 hover:bg-white 
      cursor-pointer rounded-xl text-gray-800">
        E-Commerce Website</h1>
        </Link>

      <div className="sm:w-full relative max-w-[650px] w-full">
        <input
        className="bg-[#cfd4e1] border-none outline-none text-gray-800 text-xl px-4 py-2 rounded-[30px] w-full"
         type="text" placeholder="Search Products...."
         />
        <BsSearch className="absolute top-0 right-0 mt-2 mr-4 text-gray-800" size={22} 
         />
      </div>

      <div className="flex gap-5">
      <Link to="/login">
      <div className="icon__wrapper bg-[#cfd4e1] hover:scale-110 hover:bg-white">
        <img className="image" src="ritik.jpeg" alt="">
        </img> 
      </div>
      </Link>
      <Link to="/cart">
      <div className="icon__wrapper relative bg-[#cfd4e1] hover:scale-110 hover:bg-white">
        <AiOutlineShoppingCart />
        <Cartcountbadge size="w-[25px] h-[25px]"/>
      </div>
    </Link>
     
      </div>
    </div>
   </div>
   </div>

  )
}

export default Navbar
