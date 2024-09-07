import { Button, Text, Heading } from "./..";
import React from "react";

export default function ModuleOverview({
  moduleTitle = "All Modules",
  moduleDescription = (
    <>
      Basic Module
      <br />+ Narrative PAT Modules
      <br />+ Business Partners Modules
    </>
  ),
  targetAudienceDescription = "For SMEs who have ESG strategy built in and and also want to be Business Partners.",
  priceLabel = "Free!",
  availabilityStatus = "Coming Soon",
  detailedDescription,
  ctaButtonLabel = "Get Started",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center gap-[42px] flex-1`}>
      <div className="flex flex-1 items-center gap-[42px] md:flex-col md:self-stretch">
        <div className="flex w-[44%] items-center justify-between gap-5 md:w-full">
          <div className="flex w-[86%] justify-center">
            <div className="flex w-full px-1.5">
              <Heading size="headinglg" as="h1">
                {moduleTitle}
              </Heading>
            </div>
          </div>
          <div className="h-[378px] w-px bg-blue_gray-100" />
        </div>
        <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
          <div className="flex flex-col items-start gap-[42px]">
            <Text size="textlg" as="p" className="leading-10 !text-gray-900_01">
              {moduleDescription}
            </Text>
            <Text size="texts" as="p" className="w-[92%] leading-[27px] md:w-full">
              {targetAudienceDescription}
            </Text>
          </div>
          <div className="flex items-center gap-6">
            <Heading size="headingxl" as="h1">
              {priceLabel}
            </Heading>
            <div className="flex w-[50%] justify-center rounded-[20px] bg-yellow-100 p-1.5">
              <Heading size="headings" as="h5" className="!font-semibold !text-lime-800">
                {availabilityStatus}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
        <div className="h-[378px] w-px bg-blue_gray-100 sm:h-px sm:w-[378px]" />
        <div className="flex w-[90%] flex-col items-start gap-[42px] sm:w-full">
          <Text size="textmd" as="p" className="w-full leading-[244.4%]">
            <span className="text-gray-600">Detailed&nbsp;</span>
            <span className="font-bold text-deep_purple-a400">Materiality Assessment</span>
            <span className="font-bold text-gray-600">&nbsp;</span>
            <span className="text-gray-600">template and draft</span>
            <span className="text-gray-600">
              <>
                <br />
                Carbon Footprint Report Scope
              </>
            </span>
            <span className="text-gray-600">&nbsp;</span>
            <span className="text-[20px] text-gray-600">
              <>
                (1, 2 &  3)
                <br />
                <br />
                BM + PAT+ BP Modules &nbsp;
              </>
            </span>
            <span className="text-[20px] font-bold text-deep_purple-a400">= ESG Assessment and Report</span>
          </Text>
          <Button shape="round" className="min-w-[200px] font-bold">
            {ctaButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
