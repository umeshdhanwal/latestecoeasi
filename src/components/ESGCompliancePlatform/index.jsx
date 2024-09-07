import { Text, Heading, Img } from "./..";
import React from "react";

export default function ESGCompliancePlatform({
  iconImage = "images/img_lock_white_a700.svg",
  titleText = (
    <>
      AI-driven ESG Compliance <br />
      Platform
    </>
  ),
  descriptionText = "The EcoEasi Supply Chain ESG compliance platform saves huge amount of time & money for buyers while increasing the supplier response rate and level of data  analysis by combining ESG knowledge and AI.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-full gap-10 px-[26px] py-[38px] sm:p-4 bg-gray-50 rounded-[30px]`}
    >
      <div className="w-[22%] rounded-[22px] bg-green-500_02 px-[34px] py-11 md:py-5 sm:p-5">
        <Img src={iconImage} alt="Lock Image" className="mb-1.5 h-[64px] w-full sm:h-auto" />
      </div>
      <div className="flex flex-1 flex-col gap-2 sm:gap-2">
        <Heading size="headinglg" as="h3" className="leading-[110%] sm:text-[25px]">
          {titleText}
        </Heading>
        <Text as="p" className="leading-[157.4%] sm:text-[18px]">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
