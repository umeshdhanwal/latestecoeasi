import React from "react";
import { Img, Button, Text, Heading } from "../../components";

export default function EcoEasiAISection() {
  return (
    <>
      {/* eco easi a i section */}
      <div className="mt-[120px]">
        <div className="w-full">
          <div className="flex justify-end md:flex-col">
            <div className="flex w-[40%] flex-col items-start gap-4 rounded-[50px] bg-blue_gray-50 py-[38px] pl-[60px] pr-14 md:w-full md:px-5 sm:py-4">
              <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
                How EcoEasi uses AI?
              </Heading>
              <div className="mb-3 flex flex-col items-start gap-[26px] self-stretch">
                <Text as="p" className="w-[94%] leading-[157.4%] lg:w-full md:w-full">
                  In addition to generating the Corporate Sustainability Reporting Directives (CSRD) aligned simple
                  assessments and reports questions, EcoEasi uses AI to support answering by Supplier SMEs, scoring
                  and assessing the results.
                </Text>
                <Heading
                  size="heading4xl"
                  as="h3"
                  className="w-[92%] leading-[110%] lg:w-full md:w-full md:text-[34px] sm:text-[28px]"
                >
                  Why EcoEasi's Assessments and Reports are better?
                </Heading>
                <Text as="p" className="w-[94%] leading-[157.4%] lg:w-full md:w-full">
                  A key objective of EcoEasi's is to comply with the CSRD voluntary reporting framework for SMEs
                  (VSME). As a result EcoEasi's assessment and reports are critically unabbreviated and reflect all
                  VSME requirements (and where appropriate can be used for ESG reporting)
                </Text>
                <Button size="md" shape="round" className="min-w-[196px] !rounded-[34px]">
                  Learn more
                </Button>
              </div>
            </div>
            <Img
              src="images/img_image.svg"
              alt="Product Image"
              className="h-[850px] w-[46%] object-contain md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}