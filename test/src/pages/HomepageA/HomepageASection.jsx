import { Text, Heading } from "../../components";
import SMEReportComparison from "../../components/SMEReportComparison";
import React from "react";

export default function HomepageASection() {
  return (
    <>
      {/* homepage a section */}
      <div className="mt-[102px] flex flex-col items-center gap-5">
        <div className="self-stretch py-[58px] md:py-5 sm:py-4">
          <div className="mt-1 flex justify-center">
            <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
              <Heading size="heading2xl" as="h2" className="md:text-[34px] sm:text-[28px]">
                Supply Chain  ESG Compliance Platform
              </Heading>
            </div>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex flex-col gap-2">
            <div className="mx-[148px] flex flex-wrap justify-end gap-[194px] lg:gap-5 md:mx-0 md:gap-5">
              <Text as="p" className="!text-gray-500">
                Without EcoEasi{" "}
              </Text>
              <Text as="p" className="!text-deep_purple-a400">
                With EcoEasi
              </Text>
            </div>
            <div className="flex flex-col gap-[66px]">
              <SMEReportComparison className="h-[630px]" />
              <SMEReportComparison className="flex h-[502px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
