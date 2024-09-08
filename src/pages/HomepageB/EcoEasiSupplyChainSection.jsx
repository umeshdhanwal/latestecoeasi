import { Text, Heading } from "../../components";
import React from "react";

export default function EcoEasiSupplyChainSection() {
  return (
    <>
      {/* eco easi supply chain section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[38px] px-12 lg:px-5 md:px-5">
          <Heading size="heading4xl" as="h2" className="md:text-[34px] sm:text-[28px]">
            How EcoEasi connects supply chain business partners?
          </Heading>
          <div className="mx-56 flex justify-center self-stretch rounded-[50px] bg-gray-50 p-10 md:mx-0 sm:p-4">
            <Text as="p" className="w-[76%] leading-[157.4%]">
              <span className="font-bold text-gray-900">01</span>
              <span className="text-gray-600">
                <>
                  . Select and produce the questionnaire aligned to the CSRD’s voluntary reporting framework - VSME.
                  <br />
                  <br />
                </>
              </span>
              <span className="font-bold text-gray-900">02</span>
              <span className="text-gray-600">
                <>
                  . Invite Suppier SMEs to respond.
                  <br />
                  <br />
                </>
              </span>
              <span className="font-bold text-gray-900">03</span>
              <span className="text-gray-600">
                <>
                  . Analyse the results.
                  <br />
                  <br />
                </>
              </span>
              <span className="font-bold text-gray-900">04. Make Recommendations.</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
