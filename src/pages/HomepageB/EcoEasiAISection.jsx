import { Img, Button, Text, Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";

export default function EcoEasiAISection() {
  return (
    <>
      {/* eco easi a i section */}
      <div className="mt-[120px]">
        {[...Array(2)].map((_, index) => (
          <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
            <div className="w-full">
              <div className="flex items-center justify-end md:flex-col">
                <div className="flex w-[46%] flex-col items-start justify-center gap-4 rounded-[50px] bg-blue_gray-50 py-[92px] pl-[60px] pr-14 lg:py-8 md:w-full md:p-5 sm:px-5 sm:py-4">
                  <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
                    How EcoEasi uses AI?
                  </Heading>
                  <div className="mb-3 flex flex-col items-start gap-[26px] self-stretch">
                    <Text as="p" className="w-[70%] leading-[157.4%] lg:w-full md:w-full">
                      In addition to generating the Corporate Sustainability Reporting Directives (CSRD) aligned simple
                      assessments and reports questions, EcoEasi uses AI to support answering by Supplier SMEs, scoring
                      and assessing the results.
                    </Text>
                    <Heading
                      size="heading4xl"
                      as="h3"
                      className="w-[70%] leading-[110%] lg:w-full md:w-full md:text-[34px] sm:text-[28px]"
                    >
                      Why EcoEasi’s Assessment of ESG data from your your Supplier SMEs are better?
                    </Heading>
                    <Text as="p" className="w-[70%] leading-[157.4%] lg:w-full md:w-full">
                      A key objective of EcoEasi’s is to comply with the CSRD reporting framework for buyers and
                      includes the assessment of your Supplier SME data includes benchmarking, monitoring of
                      performance, targets and recommendations so you can directly influence your supplier performance.
                    </Text>
                    <Button size="md" shape="round" className="min-w-[196px] !rounded-[34px]">
                      Learn more
                    </Button>
                  </div>
                </div>
                <Img
                  src="public/images/img_image.svg"
                  alt="Product Image"
                  className="relative ml-[-208px] h-[850px] w-[42%] object-contain md:ml-0 md:w-full"
                />
              </div>
            </div>
          </TabPanel>
        ))}
      </div>
    </>
  );
}
