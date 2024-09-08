import React from "react";

const sizes = {
  textxs: "text-[18px] font-normal not-italic lg:text-[15px]",
  texts: "text-[20px] font-normal not-italic lg:text-[17px]",
  textmd: "text-[22px] font-normal not-italic lg:text-[18px]",
  textlg: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  textxl: "text-[25px] font-normal not-italic lg:text-[21px] md:text-[23px] sm:text-[21px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
