import { Text, Heading, Img } from "../../components";
import React from "react";

export default function EcoEasiOverviewSection() {
  return (
    <>
      {/* eco easi overview section */}
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
          <div className="flex rounded-[60px] bg-gray-400">
            <Img
              src="images/img_photo.png"
              alt="Photo"
              className="h-[378px] w-full rounded-[60px] object-cover lg:h-auto md:h-auto"
            />
          </div>
          <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
            <Heading size="heading2xl" as="h2" className="md:text-[34px] sm:text-[28px]">
              What EcoEasi does?
            </Heading>
            <Text size="textmd" as="p" className="w-full leading-[157.4%]">
              Collecting and disclosing ESG info is expensive and time consuming and takes a lot of specialist effort.
              Expensive consultants and pricey ESG Reporting software is not an option. EcoEasi connects business
              partners with its Supply Chain ESG Reporting Compliance Platform and also leverages AI to create CSRD
              aligned assessments and reports.{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
