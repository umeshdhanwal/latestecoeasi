import { Text, Heading, Img } from "../../components";
import React from "react";
import { TabList, Tab } from "react-tabs";
import { useNavigate } from "react-router-dom";

export default function EcoEasiOverviewSection() {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    if (path === "/homepagetestb") {
      navigate(path, { state: { scrollToSupplyChainCompliance: true } });
    } else {
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* eco easi overview section */}
      <div className="mt-[90px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[120px] lg:gap-[90px] lg:px-5 md:gap-[90px] md:px-5 sm:gap-[60px]">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex rounded-[60px] bg-gray-400">
              <Img
                src="/images/img_photo.png"
                alt="Main Photo"
                className="h-[402px] w-full rounded-[60px] object-cover lg:h-auto md:h-auto"
              />
            </div>
            <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
              <Heading as="h2" className="md:text-[34px] sm:text-[28px]">
                What EcoEasi does?
              </Heading>
              <Text size="textxl" as="p" className="w-full leading-[157.4%]">
                Collecting and disclosing ESG info is expensive and time consuming and takes a lot of specialist effort.
                Expensive consultants and pricey ESG Reporting software is not an option. EcoEasi connects business
                partners with its Supply Chain ESG Reporting Compliance Platform and also leverages AI to create CSRD
                aligned assessments and reports.{" "}
              </Text>
            </div>
          </div>
          <TabList className="mx-[274px] flex flex-wrap justify-between gap-[50px] md:mx-0">
            <Tab 
              className="px-[164px] py-3.5 text-[18px] font-bold capitalize bg-green-500_02 text-white rounded-full lg:px-8 lg:text-[15px] md:px-5 sm:px-4"
              onClick={() => handleTabClick("ecoEasiSupplyChain")}
            >
              SMEs
            </Tab>
            <Tab 
              className="ml-4 px-[164px] py-3.5 text-[18px] font-bold capitalize text-green-500_02 border-2 border-green-500_02 rounded-full lg:px-8 lg:text-[15px] md:px-5 sm:px-4"
              onClick={() => handleTabClick("supplyChainCompliance")}
            >
              Mid Sized
            </Tab>
          </TabList>
        </div>
      </div>
    </>
  );
}
