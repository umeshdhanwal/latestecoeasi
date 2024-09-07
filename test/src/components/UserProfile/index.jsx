import { Button, Text, Heading } from "./..";
import React from "react";

export default function UserProfile({
  titleText = "Basic Module",
  descriptionText = (
    <>
      For SMEs with fewer than 10 employees
      <br />
      that want to provide a sustability report to their mid-sized customers.
    </>
  ),
  priceText = "Free!",
  comingSoonButton = "Coming Soon",
  additionalDescriptionText,
  getStartedButton = "Get Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-8 px-[34px] py-[52px] md:py-5 sm:p-4`}
    >
      <Heading size="headinglg" as="h1">
        {titleText}
      </Heading>
      <Text size="texts" as="p" className="self-stretch text-center leading-[27px]">
        {descriptionText}
      </Text>
      <div className="flex flex-col items-center gap-[42px] self-stretch">
        <div className="flex flex-col items-center self-stretch">
          <div className="h-px w-full self-stretch bg-blue_gray-100" />
          <Heading size="headingxl" as="h1" className="mt-2.5">
            {priceText}
          </Heading>
          <Button
            color="yellow_100"
            size="xs"
            variant="fill"
            className="mt-3.5 min-w-[178px] rounded-[20px] font-semibold"
          >
            {comingSoonButton}
          </Button>
          <div className="mt-[22px] h-px w-full self-stretch bg-blue_gray-100" />
        </div>
        <Text size="textmd" as="p" className="text-center !text-[20px] leading-[244.4%]">
          <span className="font-bold text-deep_purple-a400">ESG Assessment and Report</span>
          <span className="text-gray-600">
            <>
              <br />
              <br />
              Carbon Footprint Report Scope (1 & 2)
              <br />
              <br />
              Not exceed 10 employees
              <br />
              <br />
              Less €5m of balance sheet size
              <br />
              <br />
              Less than €900k of turnover drop down
            </>
          </span>
        </Text>
      </div>
      <Button shape="round" className="mb-[18px] min-w-[200px] font-bold">
        {getStartedButton}
      </Button>
    </div>
  );
}
