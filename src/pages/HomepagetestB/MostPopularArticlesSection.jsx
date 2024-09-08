import { Heading, Text, Button } from "../../components";
import React from "react";

export default function MostPopularArticlesSection() {
  return (
    <>
      {/* most popular articles section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-5 lg:px-5 md:px-5">
          <Heading as="h2" className="md:text-[34px] sm:text-[28px]">
            Most popular articles
          </Heading>
          <div className="flex flex-col gap-[46px] self-stretch rounded-[50px] bg-gray-50 p-10 sm:p-4">
            <div className="flex h-[338px] items-end rounded-[40px] bg-[url(/public/images/img_image_1.png)] bg-cover bg-no-repeat px-10 py-5 lg:h-auto md:h-auto sm:px-4">
              <Button size="md" className="mt-[242px] min-w-[152px] rounded-[26px] font-bold capitalize">
                Analysis
              </Button>
            </div>
            <div className="mb-1.5 flex flex-col gap-3">
              <div className="flex flex-col items-start gap-[18px]">
                <Text as="p">November 15, 2024</Text>
                <Heading size="heading2xl" as="h3" className="w-full leading-[123%] md:text-[34px] sm:text-[32px]">
                  What challenges does the VSME standard under the CSRD present for supply chain SMEs?
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-[38px]">
                <Text size="textxl" as="p" className="w-full leading-[157.4%]">
                  The Voluntary SME Reporting Standard (VSME*) aims to provide a proportionate and simple reporting
                  framework under CSRD which facilitates supply chain SMEs in disclosing their relevant ESG information
                  while showcasing their ESG credentials.
                </Text>
                <a href="#" className="mb-1">
                  <Heading size="headingxs" as="h4" className="!text-deep_purple-a400 underline">
                    Read More
                  </Heading>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
