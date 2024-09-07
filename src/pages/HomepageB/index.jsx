import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EcoEasiAISection from "./EcoEasiAISection";
import EcoEasiBenefitsSection from "./EcoEasiBenefitsSection";
import EcoEasiOverviewSection from "./EcoEasiOverviewSection";
import EcoEasiSupplyChainSection from "./EcoEasiSupplyChainSection";
import MostPopularArticlesSection from "./MostPopularArticlesSection";
import PricingOptionsSection from "./PricingOptionsSection";
import SupplyChainComplianceSection from "./SupplyChainComplianceSection";
import React from "react";
import { Tabs } from "react-tabs";

export default function HomepageBPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Effortless ESG Management for SME Suppliers | EcoEasi</title>
        <meta
          name="description"
          content="Discover EcoEasi's low-cost Supply Chain ESG Reporting Platform for mid-sized buyers. Streamline ESG data management from SME suppliers with AI-driven assessments and reports aligned with CSRD."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[90px] bg-white-a700 lg:gap-[90px] md:gap-[67px] sm:gap-[45px]">
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">
          <div className="mx-auto w-full bg-gray-50_02">
            <div className="flex h-[1042px] flex-col items-center gap-[116px] bg-[url(/public/images/img_main_slider_1.svg)] bg-cover bg-no-repeat py-10 lg:h-auto lg:gap-[116px] md:h-auto md:gap-[87px] sm:gap-[58px] sm:py-4">
              <div className="container-xs mt-4 lg:px-5 md:px-5">
                <Header />
              </div>
              <div className="flex w-[90%] flex-col items-center gap-[68px] lg:w-full lg:px-5 md:w-full md:px-5 sm:gap-[34px]">
                <div className="mx-auto flex w-full gap-[100px] self-stretch md:mx-0 md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 2 }, 1441: { items: 3 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="px-[50px]">
                          <div className="flex rotate-[90deg] flex-col items-start p-1">
                            <Img src="images/img_vector.svg" alt="Vector Image" className="h-[50px] w-[50px]" />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
                <div className="flex h-[16px] items-center bg-[url(/public/images/img_group_61.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <Img src="images/img_contrast.svg" alt="Contrast Image" className="h-[16px] w-full" />
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_favorite.svg"
            alt="Favorite Icon"
            className="absolute bottom-[3%] left-0 m-auto h-[10px]"
          />
        </div>
        <Tabs selectedTabClassName="" selectedTabPanelClassName="tab-panel--selected">
          {/* eco easi overview section */}
          <EcoEasiOverviewSection />

          {/* eco easi a i section */}
          <EcoEasiAISection />

          {/* eco easi benefits section */}
          <EcoEasiBenefitsSection />

          {/* supply chain compliance section */}
          <SupplyChainComplianceSection />
          <div className="mt-[76px] flex flex-col gap-[110px] py-[130px] lg:gap-[110px] lg:py-8 md:gap-[82px] md:py-5 sm:gap-[55px] sm:py-4">
            {/* eco easi supply chain section */}
            <EcoEasiSupplyChainSection />

            {/* pricing options section */}
            <PricingOptionsSection />
          </div>

          {/* most popular articles section */}
          <MostPopularArticlesSection />
          <div className="mt-[90px] flex flex-col items-center">
            <div className="container-xs mb-10 flex flex-col gap-[146px] lg:gap-[109px] lg:px-5 md:gap-[109px] md:px-5 sm:gap-[73px]">
              <div className="h-px bg-gray-300_02" />
              <Footer />
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}
