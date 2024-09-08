import { Button, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center gap-10 px-14 mx-24 md:px-5 md:mx-0 sm:px-4`}
    >
      <div className="flex flex-1 justify-center rounded-[36px] bg-white-a700_19 p-6 sm:p-5">
        <ul className="flex flex-wrap gap-14 sm:gap-5">
          <li>
            <a href="#" className="sm:text-[15px]">
              <Text as="p" className="!font-poppins !font-medium !text-white-a700">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="sm:text-[15px]">
              <Text as="p" className="!font-poppins !font-medium !text-white-a700">
                About
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="sm:text-[15px]">
              <Text as="p" className="!font-poppins !font-medium !text-white-a700">
                Products 
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="sm:text-[15px]">
              <Text as="p" className="!font-poppins !font-medium !text-white-a700">
                Blog 
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="sm:text-[15px]">
              <Text as="p" className="!font-poppins !font-medium !text-white-a700">
                FAQs
              </Text>
            </a>
          </li>
        </ul>
      </div>
      <Button color="white_A700" variant="fill" shape="round" className="min-w-[202px] font-bold">
        Contact us!
      </Button>
    </header>
  );
}
