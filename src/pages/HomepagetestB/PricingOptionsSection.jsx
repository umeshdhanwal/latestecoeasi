import { Button, Text, Heading } from "../../components";
import ESGReportComponent from "../../components/ESGReportComponent";
import React from "react";

export default function PricingOptionsSection() {
  return (
    <>
      {/* pricing options section */}
      <div className="mb-2 flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[66px] px-14 lg:px-5 md:px-5 sm:gap-[33px]">
          <Heading as="h2" className="md:text-[34px] sm:text-[28px]">
            Pricing options for Mid-Sized Procurers
          </Heading>
          <div className="flex w-[80%] gap-[132px] md:w-full md:flex-col">
            <ESGReportComponent />
            <div className="flex w-[50%] flex-col items-center justify-center gap-8 rounded-[30px] bg-gray-50 px-[34px] py-[38px] md:w-full sm:p-4">
              <div className="flex flex-col gap-8 self-stretch">
                <Heading size="headingxl" as="h3" className="text-center leading-[110%] md:text-[30px] sm:text-[28px]">
                  Pro ESG Assessments & Reports
                </Heading>
                <Text size="textlg" as="p" className="text-center leading-[27px]">
                  For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME suppliers.
                </Text>
              </div>
              <div className="flex flex-col gap-[42px] self-stretch">
                <div className="flex flex-col gap-3">
                  <div className="h-px bg-blue_gray-100" />
                  <div className="flex flex-col items-center">
                    <Heading size="heading2xl" as="h4" className="md:text-[34px] sm:text-[32px]">
                      <span>€4,500</span>
                      <span className="text-[20px]">&nbsp;/ year</span>
                    </Heading>
                    <Button size="sm" className="mx-[42px] mt-3 self-stretch rounded-[20px] font-semibold md:mx-0">
                      Billed as €375 per month
                    </Button>
                    <div className="mt-[22px] h-px w-full self-stretch bg-blue_gray-100" />
                  </div>
                </div>
                <Text size="textlg" as="p" className="text-center leading-[27px]">
                  <span className="text-gray-600">
                    <>
                      &nbsp;Ability to select questionnaires which generate ESG Assessments & Reports
                      <br />
                      <br />
                      Invitations can be sent by EcoEasi to unlimited Supply Chain SME
                      <br />
                      <br />
                      Unlimited ESG AI Support Assessments & Reports will be review and scope for improvements
                      identified
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="font-bold text-deep_purple-a400">
                    <>
                      Call support with a specialist consultant
                      <br />
                      <br />
                      AI support&nbsp;
                    </>
                  </span>
                </Text>
              </div>
              <Button variant="outline" shape="round" className="min-w-[200px] font-bold border-2 border-black text-black">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
