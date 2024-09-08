import { Heading } from "../../components";
import React, { Suspense } from "react";

// Updated PricingDetails component
const PricingDetails = ({ priceText, manualText, automatedText, className }) => (
  <div className={`flex items-center ${className}`}>
    <div className="flex-1">{priceText}</div>
    <div className="w-[200px] text-right px-40">{manualText}</div>
    <div className="w-[200px] text-center">{automatedText}</div>
  </div>
);

const pricingOptionsList = [
  {
    priceText: "CSRD Report for supplier SMEs in accordance with the Voluntary ",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "SME reporting framework Basic Module/PAT Module/Business ",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "Partner Module/All Modules",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "SME Supplier Materiality Assesment (if applicable)",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "SME ESG data collection and storage",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "SME supplier report - ESG data analysis",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "AI support",
    manualText: "Manual",
    automatedText: "Automated",
  },
  {
    priceText: "Annual Cost",
    manualText: ">€10,000",
    automatedText: "Free/Low Cost",
  },
];

export default function SupplyChainComplianceSection() {
  return (
    <>
      {/* supply chain compliance section */}
      <div className="mt-[124px] flex flex-col items-center gap-5">
        <div className="flex justify-center self-stretch py-[58px] md:py-5 sm:py-4">
          <div className="container-xs mt-1 flex justify-center px-14 lg:px-5 md:px-5">
            <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
              Supply Chain ESG Compliance Platform
            </Heading>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div>
            <div className="ml-2.5 mr-14 md:mx-0">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between md:flex-col">
                  <div className="flex-1">
                    <Heading size="headinglg" as="h5" className="mt-1 !text-black-900 md:text-[24px] sm:text-[22px]">
                      Platform / Regulatory Analysis
                    </Heading>
                  </div>
                  <div className="flex gap-16 self-center md:self-stretch sm:flex-col">
                    <div className="w-[200px] flex flex-col items-end">
                      <Heading as="h3" className="!font-normal !text-gray-500 mb-2">
                        Without EcoEasi
                      </Heading>
                      <Heading
                        size="headinglg"
                        as="h6"
                        className="text-right leading-[120%] !text-black-900 md:text-[24px] sm:w-full sm:text-[22px]"
                      >
                        High Cost & Poor Results
                      </Heading>
                    </div>
                    <div className="w-[200px] flex flex-col items-center">
                      <Heading as="h4" className="!font-normal !text-deep_purple-a400 mb-2">
                        With EcoEasi
                      </Heading>
                      <Heading
                        size="headinglg"
                        as="h3"
                        className="text-center leading-[120%] !text-deep_purple-a400 md:text-[24px] sm:w-full sm:text-[22px]"
                      >
                        Lower Cost & Better Response Rate
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-10px] flex flex-col gap-2.5">
              <div className="flex px-2.5">
                <Heading size="headings" as="h5" className="!text-deep_purple-a400">
                  SMEs
                </Heading>
              </div>
              <div className="flex flex-col gap-2.5 bg-white-a700 p-3">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {pricingOptionsList.map((d, index) => (
                    <PricingDetails 
                      {...d} 
                      key={`priceList${index}`} 
                      className="bg-gray-50_01" 
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}