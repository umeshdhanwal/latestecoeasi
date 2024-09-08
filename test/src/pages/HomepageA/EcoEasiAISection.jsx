import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function EcoEasiAISection() {
  return (
    <>
      {/* eco easi a i section */}
      <div className="mt-[170px]">
        <div className="flex justify-end md:flex-col">
          <div className="flex w-[46%] flex-col items-start rounded-[50px] bg-blue_gray-50 py-[38px] pl-[60px] pr-14 md:w-full md:px-5 sm:py-4">
            <Heading size="heading2xl" as="h2" className="md:text-[34px] sm:text-[28px]">
              How EcoEasi uses AI?
            </Heading>
            <Text size="textmd" as="p" className="mt-4 w-[70%] leading-[157.4%] lg:w-full md:w-full">
              In addition to generating the Corporate Sustainability Reporting Directives (CSRD) aligned simple
              assessments and reports questions, EcoEasi uses AI to support answering by Supplier SMEs, scoring and
              assessing the results.
            </Text>
            <Heading
              size="heading2xl"
              as="h3"
              className="mt-[26px] w-[68%] leading-[110%] lg:w-full md:w-full md:text-[34px] sm:text-[28px]"
            >
              Why EcoEasi’s Assessments and Reports are better?
            </Heading>
            <Text size="textmd" as="p" className="mt-[26px] w-[70%] leading-[157.4%] lg:w-full md:w-full">
              A key objective of EcoEasi’s is to comply with the CSRD voluntary reporting framework for SMEs (VSME). As
              a result EcoEasi’s assessment and reports are critically unabbreviated and reflect all VSME requirements
              (and where appropriate can be used for ESG reporting)
            </Text>
            <Button
              color="green_500_02"
              size="md"
              variant="fill"
              shape="round"
              className="mb-3 mt-[26px] min-w-[196px] !rounded-[34px] font-bold"
            >
              Learn more
            </Button>
          </div>
          <Img
            src="images/img_image.svg"
            alt="Featured Image"
            className="relative ml-[-208px] h-[850px] w-[42%] object-contain md:ml-0 md:w-full"
          />
        </div>
      </div>
    </>
  );
}
