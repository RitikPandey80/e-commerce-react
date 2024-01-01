import CategoryCard from './CategoryCard.tsx';

const data = [
    {
        id:0,
        name: "Fresh Fruits",
        count: "18 Products",
        img: "cat1.png"
    },
    {
        id:1,
        name: "Fresh Vegs",
        count: "20 Products",
        img: "cat2.png"
    },
    {
        id:2,
        name: "Canned Goods",
        count: "18 Products",
        img: "cat3.png"
    },
    {
        id:3,
        name: "Bread & Bakery",
        count: "14 Products",
        img: "cat4.png"
    },
    {
        id:4,
        name: "Fishes",
        count: "12 Products",
        img: "cat5.png"
    },
    {
        id:5,
        name: "Eggs & Dairy",
        count: "15 Products",
        img: "cat6.png"
    },
    {
        id:6,
        name: "Soft Drinks",
        count: "10 Products",
        img: "cat7.png"
    },
    {
        id:7,
        name: "Fashion",
        count: "20 Products",
        img: "cat8.jpg"
    },
]

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 py-2 px-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#ccccb3]">
        {data.map(el => <CategoryCard 
        key={el.id} img={el.img} 
        count={el.count} name={el.name} 
        />)}
      </div>
    </div>
  )
}

export default Category

