import { Text, Heading } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function HowEcoEasiSection() {
  return (
    <>
      {/* how eco easi section */}
      <div className="mt-[50px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[38px] px-[50px] lg:px-5 md:px-5">
          <Heading size="heading2xl" as="h2" className="md:text-[34px] sm:text-[28px]">
            How EcoEasi connects supply chain business partners?
          </Heading>
          <Tabs
            className="mx-[222px] flex flex-col gap-10 self-stretch md:mx-0"
            selectedTabClassName="!text-white-a700 bg-green-500_02 rounded-[26px]"
            selectedTabPanelClassName="p-10 sm:p-4 !relative tab-panel--selected"
          >
            <TabList className="flex flex-wrap justify-between gap-[50px]">
              <Tab className="ml-4 px-[164px] py-3.5 text-[18px] font-bold capitalize text-green-500_02 lg:px-8 lg:text-[15px] md:px-5 sm:px-4">
                SMEs
              </Tab>
              <Tab className="px-[164px] py-3.5 text-[18px] font-bold capitalize text-green-500_02 lg:px-8 lg:text-[15px] md:px-5 sm:px-4">
                Mid Sized{" "}
              </Tab>
            </TabList>
            {[...Array(2)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute flex justify-center p-10 sm:p-4">
                <div className="flex w-full justify-center">
                  <Text size="textmd" as="p" className="w-[76%] leading-[157.4%]">
                    <span className="font-bold text-gray-900_01">01</span>
                    <span className="text-gray-600">
                      <>
                        . Join the platform
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900_01">02</span>
                    <span className="text-gray-600">
                      <>
                        . Answer the questions in the free/low cost assessment that follow CSRD’s voluntary reporting
                        framework VSME
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900_01">
                      03. Submit the assessment & resulting report for free/low cost to your customer.
                    </span>
                  </Text>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
