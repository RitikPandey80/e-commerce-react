import Navbar from "./components/Pages/Common/Navbar/Navbar.jsx";
import BodyIndex from "./components/Pages/Home/Body/index.jsx";
import FooterIndex from "./components/Pages/Common/Footer/index.jsx";
import CartProvider from "./components/Context/useCart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from "./components/Pages/Cart/CartItem.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Contact from './components/Pages/Contact/Contact.jsx';

function App() {
  return (
    <>
     <CartProvider>
   
    <BrowserRouter>
    <Navbar />
      <Routes>
       
          <Route exact path="/" element={<BodyIndex/>}></Route>
          <Route path="/cart" element={<CartItem />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      
      </Routes>
      <FooterIndex />
    </BrowserRouter>
 
    </CartProvider>
    </>

  );
}

export default App;
