import { Heading } from "../../components";
import ESGReportComponent from "../../components/ESGReportComponent";
import React from "react";

export default function PricingOptionsSection() {
  return (
    <>
      {/* pricing options section */}
      <div className="mb-2 flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[66px] px-14 lg:px-5 md:px-5 sm:gap-[33px]">
          <Heading size="heading4xl" as="h3" className="md:text-[34px] sm:text-[28px]">
            Pricing options for Mid-Sized Procurers
          </Heading>
          <div className="flex w-[80%] gap-[132px] md:w-full md:flex-col">
            <ESGReportComponent />
            <ESGReportComponent />
          </div>
        </div>
      </div>
    </>
  );
}
