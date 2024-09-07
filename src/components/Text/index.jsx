import React from "react";

const sizes = {
  textxs: "text-[7px] font-normal not-italic",
  texts: "text-[10px] font-normal not-italic",
  textlg: "text-[20px] font-normal not-italic lg:text-[17px]",
  textxl: "text-[22px] font-normal not-italic lg:text-[18px]",
  text2xl: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  text3xl: "text-[25px] font-normal not-italic lg:text-[21px] md:text-[23px] sm:text-[21px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
