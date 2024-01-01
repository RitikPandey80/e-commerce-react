import BlogCard from "./BlogCard.tsx"

const data = [
    {
        id: 0,
        img: "blog1.png",
        title: "Healthy Food Healthy Life",
        date: "Aug 27 2023",
        comment: 10,
    },
    {
        id: 1,
        img: "blog2.png",
        title: "Healthy Food Healthy Life",
        date: "Aug 30 2023",
        comment: 6,
    },
    {
        id: 2,
        img: "blog3.png",
        title: "Healthy Food Healthy Life",
        date: "Sept 10 2023",
        comment: 1,
    }
]
const BlogSection = () => {
  return (
    <div className="container py-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
            Presents posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) => (
                <BlogCard key={el.id} img={el.img} date={el.date} comment={el.comment} title={el.title}
             />   
            ))}
        </div>
    </div>
  )
}

export default BlogSection
