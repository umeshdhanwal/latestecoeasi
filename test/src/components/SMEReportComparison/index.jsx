import { Heading, Text } from "./..";
import React from "react";

export default function SMEReportComparison({
  lowerCostBetterResponseRateText = (
    <>
      Lower Cost & Better <br />
      Response Rate{" "}
    </>
  ),
  highCostPoorResultsText = (
    <>
      High Cost <br />& Poor Results
    </>
  ),
  smesText = "SMEs",
  csrdReportText = "CSRD Report  for supplier SMEs in accordance with the Voluntary ",
  manualText = "Manual ",
  automatedText = "Automated",
  smeReportingFrameworkText = "SME reporting framework Basic Module/PAT Module/Business ",
  manualOneText = "Manual ",
  automatedOneText = "Automated",
  partnerModuleText = "Partner Module/All Modules",
  manualTwoText = "Manual ",
  automatedTwoText = "Automated",
  smeSupplierMaterialityAssessmentText = "SME Supplier Materiality Assesment (if applicable)",
  manualThreeText = "Manual ",
  automatedThreeText = "Automated",
  smeEsgDataCollectionText = "SME ESG data collection and storage",
  manualFourText = "Manual ",
  automatedFourText = "Automated",
  smeSupplierReportText = "SME supplier report - ESG data analysis",
  manualFiveText = "Manual ",
  automatedFiveText = "Automated",
  aiSupportText = "AI support ",
  manualSixText = "Manual ",
  automatedSixText = "Automated",
  annualCostText = "Annual Cost",
  priceText = "&gt;€10,000 ",
  freeLowCostText = "Free/Low Cost",
  platformRegulatoryAnalysisText = "Platform / Regulatory Analysis",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} md:w-full flex-1 relative md:flex-none`}>
      <div className="mx-auto flex flex-1 flex-col items-end">
        <Heading as="h3" className="relative z-[2] mr-14 text-center leading-[120%] !text-deep_purple-a400 md:mr-0">
          {lowerCostBetterResponseRateText}
        </Heading>
        <div className="relative mt-[-72px] flex flex-col items-end self-stretch">
          <Heading as="h3" className="relative z-[1] mr-[412px] text-center leading-[120%] !text-black-900 md:mr-0">
            {highCostPoorResultsText}
          </Heading>
          <div className="relative mt-[-10px] flex flex-col gap-2.5 self-stretch">
            <div className="flex px-2.5">
              <Heading size="headings" as="h5" className="!text-deep_purple-a400">
                {smesText}
              </Heading>
            </div>
            <div className="flex flex-col gap-2.5 bg-white-a700 p-3">
              <div className="flex justify-center rounded-[5px] bg-gray-50_02 p-2.5 md:flex-col">
                <div className="flex flex-1 self-end md:self-stretch sm:self-auto">
                  <Text as="p">{csrdReportText}</Text>
                </div>
                <div className="flex self-end md:self-auto">
                  <Text as="p">{manualText}</Text>
                </div>
                <div className="flex self-end md:self-auto">
                  <Text as="p">{automatedText}</Text>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-white-a700 p-2.5 md:flex-col">
                <div className="flex flex-1 self-end md:self-stretch sm:self-auto">
                  <Text as="p">{smeReportingFrameworkText}</Text>
                </div>
                <div className="flex self-end pl-14 pr-[126px] md:self-auto md:px-5">
                  <Text as="p">{manualOneText}</Text>
                </div>
                <div className="flex self-end md:self-auto">
                  <Text as="p">{automatedOneText}</Text>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-gray-50_02 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{partnerModuleText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex pl-14 pr-[126px] md:px-5">
                    <Text as="p">{manualTwoText}</Text>
                  </div>
                  <div className="flex px-3">
                    <Text as="p">{automatedTwoText}</Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-white-a700 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{smeSupplierMaterialityAssessmentText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex">
                    <Text as="p">{manualThreeText}</Text>
                  </div>
                  <div className="flex px-3">
                    <Text as="p">{automatedThreeText}</Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-gray-50_02 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{smeEsgDataCollectionText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex">
                    <Text as="p">{manualFourText}</Text>
                  </div>
                  <div className="flex px-3">
                    <Text as="p">{automatedFourText}</Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-white-a700 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{smeSupplierReportText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex">
                    <Text as="p">{manualFiveText}</Text>
                  </div>
                  <div className="flex px-3">
                    <Text as="p">{automatedFiveText}</Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-gray-50_02 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{aiSupportText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex pl-14 pr-[126px] md:px-5">
                    <Text as="p">{manualSixText}</Text>
                  </div>
                  <div className="flex px-3">
                    <Text as="p">{automatedSixText}</Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center rounded-[5px] bg-white-a700 p-2.5 md:flex-col">
                <div className="flex self-end md:self-auto">
                  <Text as="p">{annualCostText}</Text>
                </div>
                <div className="flex flex-1 justify-center self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                  <div className="flex pl-14 pr-[118px] md:px-5">
                    <Text as="p" className="!text-deep_purple-a400">
                      {priceText}
                    </Text>
                  </div>
                  <div className="flex">
                    <Text as="p" className="!text-deep_purple-a400">
                      {freeLowCostText}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading as="h3" className="absolute left-[11px] top-[5.54px] m-auto !text-black-900">
        {platformRegulatoryAnalysisText}
      </Heading>
    </div>
  );
}
