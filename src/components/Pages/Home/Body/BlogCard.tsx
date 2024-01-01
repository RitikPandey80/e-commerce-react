import React from "react";

interface propsType {
    img:string;
    date: String;
    comment: String;
    title: String;
}

const BlogCard:React.FC<propsType> = ({ img, date, title, comment }) => {
  return (
    <div className="space-y-4">
      <img className="border border-gray-300 hover:border-gray-600
                        hover:scale-105 transition-transform rounded-lg"
          src={img} alt='post'
      />
    <div className="text-accent font-medium">
      <span>{date} /</span>
      <span>{comment} comments</span>
    </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCard
