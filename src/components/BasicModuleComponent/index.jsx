<<<<<<< HEAD
import { Button, Text, Heading } from "./..";
import React from "react";

export default function BasicModuleComponent({
  titleText = "Basic Module",
  descriptionText = (
    <>
      For Supplier SMEs with fewer than 10 employees
      <br />
      that want to provide a sustainability report to their mid-sized buyers.
    </>
  ),
  priceText = "Free!",
  detailedDescriptionText,
  comingSoonButtonText = "Coming soon",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full mb-[140px] gap-[30px] px-[34px] py-[52px] md:mb-0 md:py-5 sm:p-4 bg-gray-50 rounded-[30px]`}
    >
      <Heading size="headingxl" as="h1">
        {titleText}
      </Heading>
      <Text size="textlg" as="p" className="self-stretch text-center leading-[27px]">
        {descriptionText}
      </Text>
      <div className="flex flex-col items-center gap-[42px] self-stretch">
        <div className="flex flex-col items-center gap-3 self-stretch">
          <div className="h-px w-full self-stretch bg-blue_gray-100" />
          <Heading size="heading2xl" as="h1">
            {priceText}
          </Heading>
          <div className="h-px w-full self-stretch bg-blue_gray-100" />
        </div>
        <Text size="textxl" as="p" className="text-center !text-[20px] leading-[244.4%]">
          <span className="font-bold text-deep_purple-a400">ESG Assessment and Report</span>
          <span className="text-gray-600">
            <>
              <br />
              <br />
              Carbon Footprint Report Scope (1 & 2)
              <br />
              <br />
              Not exceed&nbsp;
            </>
          </span>
          <span className="font-bold text-deep_purple-a400">
            <>
              10 employees
              <br />
            </>
          </span>
          <span className="text-gray-600">
            <>
              <br />
              Less than&nbsp;
            </>
          </span>
          <span className="font-bold text-deep_purple-a400">€350k of balance sheet</span>
          <span className="text-gray-600">
            <>
              &nbsp;total
              <br />
              <br />
              Less than&nbsp;
            </>
          </span>
          <span className="font-bold text-deep_purple-a400">€700k in net turnover</span>
        </Text>
      </div>
      <Button variant="outline" shape="round" color="undefined_undefined" className="min-w-[200px] font-bold border-2 border-black text-black">
        {comingSoonButtonText}
      </Button>
    </div>
  );
}
=======
import React from 'react';
import { Button, Text, Heading } from "../../components";

const BasicModuleComponent = ({ 
  titleText, 
  descriptionText, 
  freeText, 
  detailedDescriptionText, 
  comingSoonButton, 
  className 
}) => {
  return (
    <div className={`flex flex-col items-center justify-start w-[32%] gap-[30px] py-[30px] px-5 bg-white-A700 rounded-[20px] ${className}`}>
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <Heading as="h6" className="md:text-[24px] sm:text-[22px]">
          {titleText}
        </Heading>
        <Text size="textmd" as="p" className="!text-center leading-[157.4%]">
          {descriptionText}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[30px]">
        <Heading size="heading2xl" as="h5" className="md:text-[34px] sm:text-[32px]">
          {freeText}
        </Heading>
        <Text size="textmd" as="p" className="!text-center leading-[157.4%]">
          {detailedDescriptionText}
        </Text>
      </div>
      <Button
        color="blue_gray_100"
        variant="outline"
        shape="round"
        className="min-w-[214px]"
      >
        {comingSoonButton}
      </Button>
    </div>
  );
};

export default BasicModuleComponent;
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
