import { Heading } from "./..";
import React from "react";

export default function PricingDetails({
  priceText = "CSRD Report for supplier SMEs in accordance with the Voluntary ",
  manualText = "Manual",
  automatedText = "Automated",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center p-2.5 md:px-5 flex-1 rounded-[5px]`}
    >
      <div className="flex flex-1 self-end md:self-stretch">
        <Heading as="p" className="!font-normal !text-gray-600">
          {priceText}
        </Heading>
      </div>
      <div className="flex self-end sm:self-auto">
        <Heading as="p" className="pl-[100px] pr-[400px] !font-normal !text-gray-600">
          {manualText}
        </Heading>
      </div>
      <div className="flex self-end sm:self-auto">
        <Heading as="p" className="!font-normal !text-gray-600">
          {automatedText}
        </Heading>
      </div>
    </div>
  );
}
