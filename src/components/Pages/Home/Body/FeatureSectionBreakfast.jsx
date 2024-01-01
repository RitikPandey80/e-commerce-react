import ProductCard from "./ProductCard.tsx";

const data = [
    { id:0, img: "feat6.jpg", name: "Tomatoes", price: "₹30/-", qty: 5 },
    { id:1, img: "feat7.jpg", name: "Potatoes", price: "₹25/-", qty: 0 },
    { id:2, img: "feat8.jpg", name: "Cauliflowers", price: "₹40/-", qty: 0 },
    { id:3, img: "feat9.jpg", name: "Cabbage", price: "₹30/-", qty: 0 },
  ];



const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
     <div className="lg:flex justify-between items-center">
        <div>
       <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
       <p className="text-gray-600 mt-2">
        Buy best quality breakfast online from big-basket stop near you.
       </p>
       </div>
     
     <div className="space-x-4 mt-8 lg:mt-0">
     <button className="feature_btn">Vegetables</button>
     <button className="text-gray-600 hover:text-accent">Pizza</button>
     <button className="text-gray-600 hover:text-accent" >Snacks</button>
     </div>
     </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover" src="feat1.png" alt="banner"/>
            </div>

            {data.map((el) => ( <ProductCard key={el.id} img={el.img} name={el.name}
                                            price={el.price} qty={el.qty} /> ))}
        </div>


    </div>
  )
}

export default FeatureSectionBreakfast;
