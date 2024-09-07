import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const smePackageOptionsList = [
  {
    titleText: "Basic Module",
    descriptionText: (
      <>
        For SMEs with fewer than 10 employees
        <br />
        that want to provide a sustability report to their mid-sized customers.
      </>
    ),
    priceText: "Free!",
    comingSoonButton: "Coming Soon",
    additionalDescriptionText: (
      <>
        ESG Assessment and Report
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
    ),
    getStartedButton: "Get Started",
  },
  {
    titleText: "Basic Module",
    descriptionText: (
      <>
        For SMEs with fewer than 10 employees
        <br />
        that want to provide a sustability report to their mid-sized customers.
      </>
    ),
    priceText: "Free!",
    comingSoonButton: "Coming Soon",
    additionalDescriptionText: (
      <>
        ESG Assessment and Report
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
    ),
    getStartedButton: "Get Started",
  },
  {
    titleText: "Basic Module",
    descriptionText: (
      <>
        For SMEs with fewer than 10 employees
        <br />
        that want to provide a sustability report to their mid-sized customers.
      </>
    ),
    priceText: "Free!",
    comingSoonButton: "Coming Soon",
    additionalDescriptionText: (
      <>
        ESG Assessment and Report
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
    ),
    getStartedButton: "Get Started",
  },
];

export default function PricingOptionsSection() {
  return (
    <>
      {/* pricing options section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[66px] lg:px-5 md:px-5 sm:gap-[33px]">
          <Heading size="heading2xl" as="h3" className="md:text-[34px] sm:text-[28px]">
            Pricing options
          </Heading>
          <div className="flex gap-[30px] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {smePackageOptionsList.map((d, index) => (
                <UserProfile
                  {...d}
                  key={"pricingList" + index}
                  className="mb-[138px] rounded-[30px] bg-gray-50 md:mb-0"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
