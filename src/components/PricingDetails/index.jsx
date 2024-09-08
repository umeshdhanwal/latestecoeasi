<<<<<<< HEAD
import { Text } from "./..";
import React from "react";

export default function PricingDetails({
  priceText = "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
  manualText = "Manual ",
=======
import { Heading } from "./..";
import React from "react";

export default function PricingDetails({
  priceText = "CSRD Report for supplier SMEs in accordance with the Voluntary ",
  manualText = "Manual",
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
  automatedText = "Automated",
  ...props
}) {
  return (
<<<<<<< HEAD
    <div {...props} className={`${props.className} flex sm:flex-col items-center p-2.5 flex-1 rounded-[5px]`}>
      <div className="flex flex-1 self-end md:self-stretch">
        <Text as="p">{priceText}</Text>
      </div>
      <div className="flex w-[40%] justify-center self-end md:w-full sm:self-auto">
        <div className="flex px-6 sm:px-5">
          <Text as="p">{manualText}</Text>
        </div>
        <div className="flex flex-1 justify-center">
          <Text as="p">{automatedText}</Text>
        </div>
=======
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
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
      </div>
    </div>
  );
}
