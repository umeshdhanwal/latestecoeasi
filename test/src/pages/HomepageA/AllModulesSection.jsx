import { Heading } from "../../components";
import ModuleOverview from "../../components/ModuleOverview";
import React from "react";

export default function AllModulesSection() {
  return (
    <>
      {/* all modules section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[70px] lg:gap-[70px] lg:px-5 md:gap-[52px] md:px-5 sm:gap-[35px]">
          <div className="flex justify-center self-stretch rounded-[30px] bg-gray-50 p-[30px] sm:p-4">
            <div className="flex w-[90%] flex-col">
              <ModuleOverview />
            </div>
          </div>
          <div className="flex">
            <Heading size="headinglg" as="h4" className="md:text-[30px] sm:text-[28px]">
              All Modules
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
