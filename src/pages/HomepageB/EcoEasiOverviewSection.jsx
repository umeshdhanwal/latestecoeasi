import React from "react";
import { Text, Heading, Img } from "../../components";
import { TabList, Tab } from "react-tabs";

export default function EcoEasiOverviewSection() {
  return (
    <>
      {/* eco easi overview section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[120px] lg:gap-[90px] lg:px-5 md:gap-[90px] md:px-5 sm:gap-[60px]">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex rounded-[60px] bg-gray-400">
              <Img
                src="images/img_photo.png"
                alt="Photo"
                className="h-[402px] w-full rounded-[60px] object-cover lg:h-auto md:h-auto"
              />
            </div>
            <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
              <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
                What EcoEasi does?
              </Heading>
              <Text as="p" className="w-full leading-[157.4%]">
                Collecting and disclosing ESG info is expensive and time consuming and takes a lot of specialist effort.
                Expensive consultants and pricey ESG Reporting software is not an option. EcoEasi connects business
                partners with its Supply Chain ESG Reporting Compliance Platform and also leverages AI to create CSRD
                aligned assessments and reports.{" "}
              </Text>
            </div>
          </div>
          <TabList className="flex justify-center gap-4">
            <Tab className="rounded-full bg-green-500 px-16 py-3 text-lg font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
              SMEs
            </Tab>
            <Tab className="rounded-full bg-white px-16 py-3 text-lg font-semibold text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
              Mid Sized
            </Tab>
          </TabList>
        </div>
      </div>
    </>
  );
}