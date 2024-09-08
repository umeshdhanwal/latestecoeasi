import { Button, Text, Img } from "./..";
import React from "react";

export default function Header({ onAboutClick, onProductsClick, onContactClick, currentPage, ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center w-full top-[5%] right-0 left-0 py-14 m-auto lg:px-5 md:p-5 sm:px-5 sm:py-4 max-w-[1402px] absolute`}
    >
      <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
        <Img
          src="images/img_ecoeasi_logo_2.png"
          alt="Logo Image"
          className="h-[88px] w-[16%] object-contain md:w-full"
        />
        <div className="mr-10 flex w-[62%] justify-center gap-10 md:mr-0 md:w-full md:flex-col">
          <div className="flex flex-1 justify-center rounded-[36px] bg-gray-50_19 p-6 md:self-stretch sm:p-4">
            <ul className="flex flex-wrap gap-[58px] lg:gap-5 md:gap-5">
              <li>
                <a href="#">
                  <Text size="textxl" className="!font-poppins !font-medium !text-gray-900">
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <Text size="textxl" as="li" className="!font-poppins !font-medium !text-gray-900 cursor-pointer" onClick={() => onAboutClick(currentPage)}>
                  About
                </Text>
              </li>
              <li>
                <Text size="textxl" as="li" className="!font-poppins !font-medium !text-gray-900 cursor-pointer" onClick={() => onProductsClick(currentPage)}>
                  Products
                </Text>
              </li>
              <li>
                <a href="#">
                  <Text size="textxl" className="!font-poppins !font-medium !text-gray-900">
                    Blog
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textxl" className="!font-poppins !font-medium !text-gray-900">
                    FAQs
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <Button shape="round" className="min-w-[202px] font-bold bg-green-500 text-white hover:bg-green-700 transition-colors duration-300" onClick={() => onContactClick(currentPage)}>
            Contact us!
          </Button>
        </div>
      </div>
    </header>
  );
}
