import { Heading } from "../../components";
import ESGCompliancePlatform from "../../components/ESGCompliancePlatform";
import React, { Suspense } from "react";

const featureHighlightGrid = [
  {
    iconImage: "images/img_lock_white_a700.svg",
    titleText: (
      <>
        AI-driven ESG Compliance <br />
        Platform
      </>
    ),
    descriptionText:
      "The EcoEasi Supply Chain ESG compliance platform saves huge amount of time & money for buyers while increasing the supplier response rate and level of data  analysis by combining ESG knowledge and AI.",
  },
  {
    iconImage: "images/img_laptop.svg",
    titleText: "Your ESG One-Stop Shop",
    descriptionText:
      "EcoEasi products will offer you the ability to add to your suite of documents, e.g. an ESG assessment risk policy incorporating your material risk while supporting your detailed material risk assessment.",
  },
  {
    iconImage: "images/img_play.svg",
    titleText: "Enrich your EcoEasi product",
    descriptionText: "EcoEasi’s AI products seamlessly combine easily all ESG info obtained from your suppliers.",
  },
  {
    iconImage: "images/img_megaphone.svg",
    titleText: (
      <>
        Supply Chain Regulatory <br />
        Changes
      </>
    ),
    descriptionText:
      "EcoEasi provides business partner’s with products to address CSRD and is always updating its products for any regulatory changes.",
  },
  {
    iconImage: "images/img_play.svg",
    titleText: "Seamlessly Compatible",
    descriptionText:
      "EcoEasi’s products are machine readable and compatible with both the reporting software and can combine directly with your feeds.",
  },
  {
    iconImage: "images/img_megaphone.svg",
    titleText: "Renewals & Payments",
    descriptionText:
      "Free or otherwise for Supplier SMEs for the first year. Continues at the same price (free or otherwise) unless terminated before the automatic annual renewal.",
  },
];

export default function EcoEasiBenefitsSection() {
  return (
    <>
      {/* eco easi benefits section */}
      <div id="ecoEasiBenefitsSection" className="mt-[170px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[38px] lg:px-5 md:px-5">
          <Heading as="h2" className="text-center leading-[110%] md:text-[34px] sm:text-[28px]">
            Unlocking the Benefits of EcoEasi Products and Platform for SME Suppliers
          </Heading>
          <div className="grid grid-cols-2 justify-center gap-[52px] lg:grid-cols-2 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {featureHighlightGrid.map((d, index) => (
                <ESGCompliancePlatform {...d} key={"contentGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
