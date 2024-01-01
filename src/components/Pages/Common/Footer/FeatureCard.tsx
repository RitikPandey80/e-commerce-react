import React from "react";

interface propsType {
    title: String;
    icon: React.ReactNode;
}

const FeatureCard:React.FC<propsType> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className=" w-[50px] h-[50px] bg-accent text-[24px] grid
                        place-items-center rounded-full hover:bg-accentDark">
                   {icon}</div>
        <div>
          <h3 className="text-accent font-medium text-xl">{title}</h3>
          <p className="text-[16px]">Hello Ritik Pandey</p>
        </div>
    </div>
  )
}

export default FeatureCard
