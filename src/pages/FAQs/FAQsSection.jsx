import { Text, Img, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    questionHeader: "Are non-listed and micro SMEs in the supply chain of mid-sized entities in scope of CSRD?",
  },
  {
    questionHeader: "Are all mid-sized entities in scope of CSRD?",
  },
  {
    questionHeader: 'What is the pricing for EcoEasi products?"',
  },
  {
    questionHeader: "Why are EcoEasi products free or affordable for Supply Chain SMEs?",
  },
];

export default function FAQsSection() {
  return (
    <>
      {/* f a qs section */}
      <div className="mt-10 flex flex-col items-center gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
        <div className="flex justify-center self-stretch py-2">
          <div className="container-xs mt-2.5 flex justify-center px-14 lg:px-5 md:px-5">
            <a href="FAQs" target="_blank" rel="noreferrer" className="lg:text-[48px] md:text-[48px]">
              <Heading size="heading4xl" as="h1" className="text-[75px] font-extrabold text-gray-900">
                FAQs
              </Heading>
            </a>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-start gap-[46px] rounded-[50px] bg-gray-50 px-[54px] py-[70px] lg:py-8 md:flex-col md:p-5 sm:p-4">
            <Heading
              as="h2"
              className="mt-2 w-[36%] text-[40px] font-extrabold leading-[123%] text-gray-900 lg:w-[36%] lg:text-[34px] md:w-full md:text-[34px] sm:text-[32px]"
            >
              Do you have any questions?
            </Heading>
            <Accordion
              preExpanded={[0]}
              className="mt-2 flex flex-1 flex-col gap-[70px] self-center md:w-full md:self-stretch"
            >
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`Expandable List${i}`}>
                  <div className="flex flex-1 flex-col gap-6">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="mt-5 flex flex-wrap items-center justify-between gap-[38px] md:flex-col">
                                <Text
                                  size="text4xl"
                                  as="p"
                                  className="w-[94%] text-[32px] font-normal italic leading-[123%] text-gray-900 lg:w-[94%] lg:text-[27px] md:w-full md:text-[26px] sm:text-[24px]"
                                >
                                  {d.questionHeader}
                                </Text>
                                {props?.expanded ? (
                                  <Img
                                    src="images/img_arrow_down.svg"
                                    alt="Dropdown Icon"
                                    className="h-[18px] w-[18px] md:w-full"
                                  />
                                ) : (
                                  <Img
                                    src="images/img_arrow_down.svg"
                                    alt="Collapse Icon"
                                    className="mr-[18px] h-[18px] w-[18px] md:mr-0 md:w-full"
                                  />
                                )}
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex">
                        <Text
                          as="p"
                          className="w-[90%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]"
                        >
                          No. Even though listed SMEs are. Non listed and micro-SMEs are not directly in scope of CSRD,
                          however given they are in the supply chain of entities that are in scope and if they are 1st
                          tier suppliers, then they are indirectly exposed as these procuring entities need to report on
                          their value chain’s ESG data.
                        </Text>
                      </div>
                    </AccordionItemPanel>
                  </div>
                  <div className="h-[0.5px] w-full rotate-[0deg] bg-gray-800" />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
