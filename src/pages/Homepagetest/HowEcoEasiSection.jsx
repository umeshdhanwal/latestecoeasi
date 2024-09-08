import { Text, Heading } from "../../components";
import React from "react";

export default function HowEcoEasiSection() {
  return (
    <>
      {/* how eco easi section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[38px] px-[50px] lg:px-5 md:px-5">
          <Heading as="h2" className="md:text-[34px] sm:text-[28px]">
            How EcoEasi connects supply chain business partners?
          </Heading>
          <div className="mx-[222px] flex justify-center self-stretch rounded-[50px] bg-gray-50 p-10 md:mx-0 sm:p-4">
            <Text size="textxl" as="p" className="w-[76%] leading-[157.4%]">
              <span className="font-bold text-gray-900">01</span>
              <span className="text-gray-600">
                <>
                  . Join the platform
                  <br />
                  <br />
                </>
              </span>
              <span className="font-bold text-gray-900">02</span>
              <span className="text-gray-600">
                <>
                  . Answer the questions in the free/low cost assessment that follow CSRD’s voluntary reporting
                  framework VSME
                  <br />
                  <br />
                </>
              </span>
              <span className="font-bold text-gray-900">
                03. Submit the assessment & resulting report for free/low cost to your customer.
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
