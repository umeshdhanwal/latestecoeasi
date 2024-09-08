import { Text } from "./..";
import React from "react";

export default function PricingDetails({
  priceText = "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
  manualText = "Manual ",
  automatedText = "Automated",
  ...props
}) {
  return (
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
      </div>
    </div>
  );
}
