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
