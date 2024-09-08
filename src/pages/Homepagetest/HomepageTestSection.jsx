import { Heading, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import PricingDetails from "../../components/PricingDetails";
import React, { Suspense } from "react";

const pricingOptionsList = [
  {
    priceText: "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    priceText: "SME reporting framework Basic Module/PAT Module/Business ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    priceText: "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    priceText: "SME Supplier Materiality Assesment (if applicable)",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  {
    priceText: "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
    manualText: "Manual ",
    automatedText: "Automated",
  },
  { priceText: "SME supplier report - ESG data analysis", manualText: "Manual ", automatedText: "Automated" },
  { priceText: "AI support ", manualText: "Manual ", automatedText: "Automated" },
  { priceText: "Annual Cost", manualText: ">€10,000 ", automatedText: "Free/Low Cost" },
];

export default function HomepageTestSection() {
  return (
    <>
      {/* homepage test section */}
      <div id="ecoEasiSupplyChain"className="mt-[124px] flex flex-col items-center gap-5">
        <div className="flex justify-center self-stretch py-[58px] md:py-5 sm:py-4">
          <div className="container-xs mt-1 flex justify-center px-14 lg:px-5 md:px-5">
            <Heading as="h2" className="md:text-[34px] sm:text-[28px]">
              Supply Chain  ESG Compliance Platform
            </Heading>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div>
            <div className="ml-2.5 mr-[58px] flex items-center md:mx-0 md:flex-col">
              <Breadcrumb
                separator={
                  <Text className="h-[47px] w-[12.66px] text-[30px] font-bold !text-colors lg:text-[25px] md:text-[24px] sm:text-[22px]">
                    /
                  </Text>
                }
                className="mb-[26px] flex flex-1 flex-wrap items-center justify-between gap-[110px] self-end lg:gap-5 md:gap-5 md:self-stretch sm:self-auto"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="md:text-[24px] sm:text-[22px]">
                    <Heading size="headinglg" as="h2" className="!text-black-900">
                      Platform
                    </Heading>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" className="mr-[62px] md:text-[24px] sm:text-[22px]">
                    <Heading size="headinglg" as="h3" className="!text-black-900">
                      Regulatory Analysis
                    </Heading>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <div className="flex w-[46%] justify-center md:w-full md:flex-col">
                <div className="flex w-full flex-col items-end gap-2 px-8 sm:px-4">
                  <Text as="p" className="mr-9 !text-gray-500 md:mr-0">
                    Without EcoEasi{" "}
                  </Text>
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="text-center leading-[120%] !text-black-900 md:text-[24px] sm:text-[22px]"
                  >
                    <>
                      High Cost <br />& Poor Results
                    </>
                  </Heading>
                </div>
                <div className="flex w-full flex-col items-end gap-2">
                  <Text as="p" className="mr-[90px] !text-deep_purple-a400 md:mr-0">
                    With EcoEasi
                  </Text>
                  <Heading
                    size="headinglg"
                    as="h5"
                    className="text-center leading-[120%] !text-deep_purple-a400 md:text-[24px] sm:text-[22px]"
                  >
                    <>
                      Lower Cost & Better <br />
                      Response Rate{" "}
                    </>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="relative mt-[-10px] flex flex-col gap-2.5">
              <div className="flex px-2.5">
                <Heading size="headings" as="h6" className="!text-deep_purple-a400">
                  SMEs
                </Heading>
              </div>
              <div className="bg-white-a700 p-3">
                <div className="flex flex-col gap-2.5">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {pricingOptionsList.map((d, index) => (
                      <PricingDetails {...d} key={"priceList" + index} className="bg-gray-50_01" />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
