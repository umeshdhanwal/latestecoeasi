import React from "react";

const sizes = {
  headingxs: "text-[18px] font-bold lg:text-[15px]",
  headings: "text-[20px] font-bold lg:text-[17px]",
  headingmd: "text-[30px] font-bold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headinglg: "text-[36px] font-extrabold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headingxl: "text-[40px] font-extrabold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading2xl: "text-[50px] font-extrabold lg:text-[42px] md:text-[46px] sm:text-[40px]",
  heading3xl: "text-[75px] font-extrabold lg:text-[75px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headingmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
