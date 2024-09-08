import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EcoEasiAIUsageSection from "./EcoEasiAIUsageSection";
import EcoEasiBenefitsSection from "./EcoEasiBenefitsSection";
import EcoEasiOverviewSection from "./EcoEasiOverviewSection";
import EcoEasiSupplyChainSection from "./EcoEasiSupplyChainSection";
import MostPopularArticlesSection from "./MostPopularArticlesSection";
import PricingOptionsSection from "./PricingOptionsSection";
import SupplyChainComplianceSection from "./SupplyChainComplianceSection";
import { Tabs } from "react-tabs";
import { useLocation } from "react-router-dom";

export default function HomepagetestBPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToSupplyChainCompliance) {
      const supplyChainSection = document.getElementById("supplyChainCompliance");
      if (supplyChainSection) {
        supplyChainSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleAboutClick = (currentPage) => {
    const ecoEasiAIUsageSection = document.getElementById("ecoEasiAIUsageSection");
    if (ecoEasiAIUsageSection) {
      ecoEasiAIUsageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductsClick = (currentPage) => {
    const ecoEasiBenefitsSection = document.getElementById("ecoEasiBenefitsSection");
    if (ecoEasiBenefitsSection) {
      ecoEasiBenefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (currentPage) => {
    const footerSection = document.getElementById("footer");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Effortless ESG Management for Mid-Sized Buyers - EcoEasi</title>
        <meta
          name="description"
          content="Discover EcoEasi's AI-driven platform for seamless ESG data management from SME suppliers. Streamline your sustainability reporting with our cost-effective solutions tailored for mid-sized corporates."
        />
      </Helmet>
      <Tabs className="w-full bg-white-a700" selectedTabClassName="" selectedTabPanelClassName="tab-panel--selected">
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">
          <div className="relative mx-auto h-[1042px] w-full content-center lg:h-auto md:h-auto">
            <div className="relative mx-auto h-[1042px] w-full content-center lg:h-auto md:h-auto">
              <div className="flex h-[1042px] items-end bg-[url(/images/img_banner_1042x1920.png)] bg-cover bg-no-repeat p-12 lg:h-auto md:h-auto md:p-5 sm:p-4">
                <div className="mx-auto mt-[212px] flex w-[94%] lg:w-full md:w-full">
                  <div className="flex">
                    <div className="container-xs flex justify-center lg:px-5 md:px-5">
                      <div className="flex w-full items-center md:flex-col">
                        <div className="flex flex-1 flex-col items-start gap-[34px] md:self-stretch">
                          <Heading
                            size="heading4xl"
                            as="h1"
                            className="w-[80%] leading-[110%] lg:w-full lg:text-[48px] md:w-full"
                          >
                            Effortlessly Manage ESG Data from Your SME Suppliers with EcoEasi!
                          </Heading>
                          <Text
                            size="text3xl"
                            as="p"
                            className="w-[80%] leading-[157.4%] lg:w-full md:w-full"
                          >
                            Are you a mid-sized buyer who wants to get ESG data from your SME suppliers?
                            If &quot;yes&quot;, then contact us to buy a low cost Supply Chain ESG
                            Reporting Platform that analyses your SME supplier&#39;s data.
                          </Text>
                          <Button
                            size="2xl"
                            shape="round"
                            className="min-w-[364px] !rounded-[34px] font-bold bg-[#4CAF4F] text-white hover:bg-[#3d8b3d] transition-colors duration-300"
                          >
                            Mid-size corporates get started
                          </Button>
                        </div>
                        <div className="flex w-[34%] flex-col gap-[42px] rounded-[40px] bg-white-a700 px-8 py-[86px] lg:py-8 md:w-full md:py-5 sm:p-4">
                          <div className="relative mx-3.5 h-[244px] md:mx-0">
                            <div className="absolute bottom-[18.73px] left-[21.90px] m-auto h-[176px] w-[70%] border-2 border-dashed border-gray-400_03" />
                            <Img
                              src="images/img_dashboard.svg"
                              alt="Dashboard Image"
                              className="absolute left-0 right-0 top-0 m-auto h-[202px] w-[68%] object-contain"
                            />
                            <div className="absolute bottom-[-0.59px] left-0 m-auto flex flex-col items-start justify-center rounded-[14px] bg-white-a700 px-4 py-3 shadow-xs">
                              <Text size="textxs" as="p" className="!text-black-900">
                                Password
                              </Text>
                              <Text
                                size="texts"
                                as="p"
                                className="mt-1 rounded bg-gray-200 pl-2 pr-[34px] tracking-[3.30px] !text-deep_purple-a400 sm:pr-4"
                              >
                                **********
                              </Text>
                              <Text size="textxs" as="p" className="mt-1 !text-black-900">
                                Confirm Password
                              </Text>
                              <Text
                                size="texts"
                                as="p"
                                className="mt-1 rounded bg-gray-200 pl-2 pr-[34px] tracking-[3.30px] !text-deep_purple-a400 sm:pr-4"
                              >
                                **********
                              </Text>
                              <Button size="xs" className="mt-2.5 min-w-[40px] rounded font-bold">
                                LogIn
                              </Button>
                            </div>
                            <Img
                              src="/images/img_menu_bar.svg"
                              alt="Menu Bar Image"
                              className="absolute right-[1.23px] top-[28%] m-auto h-[32px] w-[58%] object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-[22px]">
                            <Heading
                              size="headinglg"
                              as="h2"
                              className="text-center leading-[110%] md:text-[24px] sm:text-[22px]"
                            >
                              Standard & Pro ESG Assessments & Reports
                            </Heading>
                            <Text size="textxl" as="p" className="text-center leading-[157.4%]">
                              For Mid-Sized buyers who want to obtain and analyse ESG reportable data from
                              their SME suppliers.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Header onAboutClick={handleAboutClick} onProductsClick={handleProductsClick} onContactClick={handleContactClick} currentPage="homepagetestb" />
            </div>
          </div>
        </div>

        {/* eco easi overview section */}
        
        <EcoEasiOverviewSection />

        {/* eco easi a i usage section */}
        <EcoEasiAIUsageSection />

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
            <div>
              <div className="h-px bg-gray-300_02" />
            </div>
            <Footer />
          </div>
        </div>
      </Tabs>
    </>
  );
}
