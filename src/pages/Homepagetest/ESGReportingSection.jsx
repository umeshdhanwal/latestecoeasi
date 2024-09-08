import { Text, Heading, Img, Button } from "../../components";
import React from "react";

export default function ESGReportingSection() {
  return (
    <>
      {/* e s g reporting section */}
      <div className="mt-[212px] flex w-full justify-center px-14 md:px-5 sm:px-4">
        <div className="mb-[76px] flex w-[94%] justify-center lg:w-full md:w-full">
          <div className="container-xs flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full items-center md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[34px] md:self-stretch">
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="w-[80%] leading-[110%] lg:w-full lg:text-[48px] md:w-full"
                >
                  Streamline your ESG Reporting to your buyers on EcoEasi for Free!
                </Heading>
                <Text size="text3xl" as="p" className="w-[80%] leading-[157.4%] lg:w-full md:w-full">
                  Are you an SME supplier who want a free ESG Assessment & Report aligned with CSRD which you can send
                  to buyers? Then sign-up to the EcoEasi Supply Chain ESG compliance platform.
                </Text>
                <Button size="2xl" shape="round" className="min-w-[246px] !rounded-[34px] font-bold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[68px] px-[34px] text-[18px] bg-purple-a700 text-white-a700">
                  SMEs get started
                </Button>
              </div>
              <div className="flex w-[34%] flex-col gap-[34px] rounded-[40px] bg-white-a700 px-8 py-[82px] lg:py-8 md:w-full md:py-5 sm:p-4">
                <Img src="images/img_icon.svg" alt="Icon Image" className="mx-7 h-[254px] md:mx-0" />
                <div className="flex flex-col items-center gap-4">
                  <Heading size="headinglg" as="h2" className="md:text-[24px] sm:text-[22px]">
                    Basic Modules
                  </Heading>
                  <Text size="textxl" as="p" className="self-stretch text-center leading-[157.4%]">
                    For all supplier & micro SMEs that are between 1 - 250 people, €350k - €40m in balance sheet total
                    and €700k -€40m in net turnover
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
