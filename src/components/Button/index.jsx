import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[36px]",
};
const variants = {
  fill: {
    purple_A700: "bg-purple-a700 text-white-a700",
    deep_purple_A400: "bg-deep_purple-a400 text-white-a700",
    yellow_100: "bg-yellow-100 text-lime-800",
    white_A700: "bg-white-a700 text-gray-900",
    green_500_02: "bg-green-500_02 text-white-a700",
  },
  outline: {
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-900",
  },
};
const sizes = {
  xl: "h-[60px] px-0.5",
  xs: "h-[18px] px-3 text-[6px]",
  lg: "h-[54px]",
  md: "h-[54px] px-[34px] text-[18px]",
  sm: "h-[42px] pl-7 pr-[34px] text-[20px]",
  "2xl": "h-[68px] px-[34px] text-[18px]",
  "3xl": "h-[74px] px-[34px] text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "3xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xl", "xs", "lg", "md", "sm", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "purple_A700",
    "deep_purple_A400",
    "yellow_100",
    "white_A700",
    "green_500_02",
    "blue_gray_100",
  ]),
};

export { Button };
