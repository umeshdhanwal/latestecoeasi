import { Button, Text, Heading } from "./..";
import React from "react";

export default function ESGReportComponent({
<<<<<<< HEAD
  headerText = "Standard ESG Assessments & Reports",
  subHeaderText = "For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME suppliers.",
  priceText,
  billingButtonText = "Billed as €292 per month",
=======
  headingText = "Standard ESG Assessments & Reports",
  subheadingText = "For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME suppliers.",
  priceText,
  billingText = "Billed as €292 per month",
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
  descriptionText = (
    <>
      {" "}
      Ability to select questionnaires which generate ESG Assessments & Reports
      <br />
      <br />
      Invitations can be sent by EcoEasi to 30 Supply Chain SME
      <br />
      <br />
      30 ESG Assessments & Reports will be reviewed and scope for improvements identified
      <br />
      <br />
      AI support{" "}
    </>
  ),
<<<<<<< HEAD
  getStartedButtonText = "Get Started",
=======
  buttonText = "Get Started",
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[50%] md:w-full gap-[34px] px-[34px] py-[62px] lg:py-8 md:py-5 sm:p-4 bg-gray-50 rounded-[30px]`}
    >
      <div className="flex flex-col gap-8 self-stretch">
        <Heading size="headingxl" as="h1" className="text-center leading-[110%]">
<<<<<<< HEAD
          {headerText}
        </Heading>
        <Text size="textlg" as="p" className="text-center leading-[27px]">
          {subHeaderText}
=======
          {headingText}
        </Heading>
        <Text size="textlg" as="p" className="text-center leading-[27px]">
          {subheadingText}
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
        </Text>
      </div>
      <div className="mb-2 flex flex-col gap-[30px] self-stretch">
        <div className="flex flex-col gap-[42px]">
          <div className="flex flex-col gap-3">
            <div className="h-px bg-blue_gray-100" />
            <div className="flex flex-col items-center">
              <Heading size="heading2xl" as="h1">
<<<<<<< HEAD
                <span>€3,500</span>
                <span className="text-[20px]">&nbsp;/ year</span>
              </Heading>
              <Button size="sm" className="mx-[42px] mt-3 self-stretch rounded-[20px] font-semibold">
                {billingButtonText}
              </Button>
=======
                <span>€3.500</span>
                <span className="text-[20px]">&nbsp;/ year</span>
              </Heading>
              <div className="mx-[42px] mt-3 flex justify-center self-stretch rounded-[20px] bg-yellow-100 p-1.5">
                <Heading size="headings" as="h5" className="!font-semibold !text-lime-800">
                  {billingText}
                </Heading>
              </div>
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
              <div className="mt-[22px] h-px w-full self-stretch bg-blue_gray-100" />
            </div>
          </div>
          <Text size="textlg" as="p" className="text-center leading-[27px]">
            {descriptionText}
          </Text>
        </div>
<<<<<<< HEAD
        <Button
          variant="outline"
          shape="round"
          className="mx-[88px] self-stretch font-bold border-2 border-black text-black"
        >
          Coming Soon
=======
        <Button variant="outline" shape="round" color="undefined_undefined" className="mx-[88px] self-stretch">
          {buttonText}
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
        </Button>
      </div>
    </div>
  );
}
