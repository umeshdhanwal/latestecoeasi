import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Slider } from "../../components";
import BasicModuleComponent from "../../components/BasicModuleComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ESGReportingSection from "./ESGReportingSection";
import EcoEasiAISection from "./EcoEasiAISection";
import EcoEasiBenefitsSection from "./EcoEasiBenefitsSection";
import EcoEasiOverviewSection from "./EcoEasiOverviewSection";
import HomepageTestSection from "./HomepageTestSection";
import HowEcoEasiSection from "./HowEcoEasiSection";
import MostPopularArticlesSection from "./MostPopularArticlesSection";
import React from "react";
import { Tabs } from "react-tabs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomepagetestPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToHomepagetestSection) {
      const homepagetestSection = document.getElementById("ecoEasiSupplyChain");
      if (homepagetestSection) {
        homepagetestSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleAboutClick = (currentPage) => {
    const ecoEasiAISection = document.getElementById("ecoEasiAISection");
    if (ecoEasiAISection) {
      ecoEasiAISection.scrollIntoView({ behavior: "smooth" });
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
        <title>Homepage - Streamline ESG Reporting with EcoEasi</title>
        <meta
          name="description"
          content="Simplify your ESG reporting process with EcoEasi's free AI-driven platform. Get CSRD-aligned assessments and reports tailored for SME suppliers."
        />
      </Helmet>
      <Tabs className="w-full bg-white-a700" selectedTabClassName="" selectedTabPanelClassName="tab-panel--selected">
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">
          <div className="relative mx-auto h-[1042px] w-full content-center lg:h-auto md:h-auto">
            <div className="relative mx-auto h-[1042px] w-full content-center lg:h-auto md:h-auto">
              <div className="flex h-[1042px] items-end bg-[url(/images/img_banner.png)] bg-cover bg-no-repeat py-12 lg:h-auto md:h-auto md:py-5 sm:py-4">
                {/* e s g reporting section */}
                <ESGReportingSection />
              </div>
              <Header onAboutClick={handleAboutClick} onProductsClick={handleProductsClick} onContactClick={handleContactClick} currentPage="homepagetest" />
            </div>
          </div>
        </div>

        {/* eco easi overview section */}
        <EcoEasiOverviewSection />

        {/* eco easi a i section */}
        <EcoEasiAISection />

        {/* eco easi benefits section */}
        <EcoEasiBenefitsSection />

        {/* homepage test section */}
        <HomepageTestSection />
        <div className="mt-11 py-20 lg:py-8 md:py-5 sm:py-4">
          <div className="mb-6 flex flex-col gap-[52px] py-[50px] md:py-5 sm:gap-[26px] sm:py-4">
            {/* how eco easi section */}
            <HowEcoEasiSection />
            <div className="mb-2 flex flex-col items-center">
              <div className="container-xs mt-[50px] flex flex-col items-center gap-[66px] lg:px-5 md:px-5 sm:gap-[33px]">
                <Heading as="h3" className="md:text-[34px] sm:text-[28px]">
                  Pricing options for Suppliers SMEs{" "}
                </Heading>
                <div className="flex flex-col gap-10 self-stretch">
                  <div className="flex gap-[30px] md:flex-col">
                    <BasicModuleComponent />
                    <div className="flex w-[32%] flex-col items-center gap-[34px] rounded-[30px] bg-gray-50 px-[34px] py-[50px] md:w-full md:py-5 sm:p-4">
                      <div className="flex flex-col gap-[34px] self-stretch">
                        <Heading
                          size="headingxl"
                          as="h4"
                          className="text-center leading-10 md:text-[30px] sm:text-[28px]"
                        >
                          <>
                            Basic + <br />
                            Narrative PAT Modules
                          </>
                        </Heading>
                        <div className="flex flex-col items-center gap-[42px]">
                          <Text size="textlg" as="p" className="self-stretch text-center leading-[27px]">
                            For Supplier SMEs who have already ESG incorporated into their strategy.
                          </Text>
                          <div className="flex flex-col items-center gap-3 self-stretch">
                            <div className="h-px w-full self-stretch bg-blue_gray-100" />
                            <Heading size="heading2xl" as="h5" className="md:text-[34px] sm:text-[32px]">
                              Free!
                            </Heading>
                            <div className="h-px w-full self-stretch bg-blue_gray-100" />
                          </div>
                          <Text size="textxl" as="p" className="mb-[66px] text-center !text-[20px] leading-[244.4%]">
                            <span className="text-gray-600">Detailed&nbsp;</span>
                            <span className="font-bold text-deep_purple-a400">Materiality Assessment&nbsp;</span>
                            <span className="text-gray-600">
                              <>
                                template and draft
                                <br />
                                <br />
                                Carbon Footprint Report Scope (1 & 2)
                                <br />
                                <br />
                                BM + PAT Modules <br />
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">
                              <>
                                = ESG Assessment and Report
                                <br />
                                <br />
                              </>
                            </span>
                            <span className="text-gray-600">Not exceed&nbsp;</span>
                            <span className="font-bold text-deep_purple-a400">
                              <>
                                50 employees
                                <br />
                              </>
                            </span>
                            <span className="text-gray-600">
                              <>
                                <br />
                                Less than&nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">€4m</span>
                            <span className="font-bold text-gray-600">&nbsp;</span>
                            <span className="font-bold text-deep_purple-a400">of balance sheet</span>
                            <span className="font-bold text-gray-600">&nbsp;</span>
                            <span className="text-gray-600">
                              <>
                                total
                                <br />
                                <br />
                                Less than&nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">€8m of net turnover&nbsp;</span>
                          </Text>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        shape="round"
                        color="undefined_undefined"
                        className="min-w-[200px] font-bold border-2 border-black text-black"
                      >
                        Coming soon
                      </Button>
                    </div>
                    <div className="flex w-[32%] flex-col items-center gap-[34px] rounded-[30px] bg-gray-50 p-7 md:w-full sm:p-4">
                      <div className="flex flex-col gap-[34px] self-stretch">
                        <Heading
                          size="headingxl"
                          as="h6"
                          className="text-center leading-10 md:text-[30px] sm:text-[28px]"
                        >
                          <>
                            Basic + <br />
                            Business Partners Modules
                          </>
                        </Heading>
                        <div className="flex flex-col items-center gap-[42px]">
                          <Text size="textlg" as="p" className="self-stretch text-center leading-[27px]">
                            For Supplier SMEs who want to be business partners but do not have ESG built into their
                            strategy.
                          </Text>
                          <div className="flex flex-col items-center gap-3 self-stretch">
                            <div className="h-px w-full self-stretch bg-blue_gray-100" />
                            <Heading size="heading2xl" as="h1" className="md:text-[34px] sm:text-[32px]">
                              Free!
                            </Heading>
                            <div className="h-px w-full self-stretch bg-blue_gray-100" />
                          </div>
                          <Text size="textxl" as="p" className="mb-[66px] text-center !text-[20px] leading-[244.4%]">
                            <span className="text-gray-600">Detailed&nbsp;</span>
                            <span className="font-bold text-deep_purple-a400">Materiality Assessment</span>
                            <span className="text-gray-600">
                              <>
                                &nbsp;template and draft <br />
                                <br />
                                Carbon Footprint Report Scope (1 & 2)
                                <br />
                                <br />
                                BM + PAT+ BP Modules &nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">
                              <>
                                = ESG Assessment and Report
                                <br />
                              </>
                            </span>
                            <span className="text-gray-600">
                              <>
                                <br />
                                Not exceed&nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">
                              <>
                                250 employees
                                <br />
                              </>
                            </span>
                            <span className="text-gray-600">
                              <>
                                <br />
                                Less than&nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">€20m of balance sheet</span>
                            <span className="text-gray-600">
                              <>
                                &nbsp;total
                                <br />
                                <br />
                                Less than&nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">€40m of net turnover&nbsp;</span>
                          </Text>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        shape="round"
                        color="undefined_undefined"
                        className="min-w-[200px] font-bold border-2 border-black text-black"
                      >
                        Coming soon
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-[42px] rounded-[30px] bg-gray-50 p-[30px] md:flex-col sm:p-4">
                      <div className="flex w-[24%] items-center justify-between gap-5 md:w-full">
                        <div className="flex w-[86%] justify-center">
                          <div className="flex w-full px-1.5">
                            <Heading size="headingxl" as="h1" className="md:text-[30px] sm:text-[28px]">
                              All Modules
                            </Heading>
                          </div>
                        </div>
                        <div className="h-[378px] w-px bg-blue_gray-100" />
                      </div>
                      <div className="flex w-[30%] flex-col gap-[30px] md:w-full">
                        <div className="flex flex-col items-start gap-[42px]">
                          <Text size="text2xl" as="p" className="leading-10 !text-gray-900">
                            <>
                              Basic Module
                              <br />+ Narrative PAT Modules
                              <br />+ Business Partners Modules
                            </>
                          </Text>
                          <Text size="textlg" as="p" className="w-[92%] leading-[27px] lg:w-full md:w-full">
                            For SMEs who have ESG strategy built in and and also want to be Business Partners.
                          </Text>
                        </div>
                        <div className="flex">
                          <Heading size="heading2xl" as="h1" className="md:text-[34px] sm:text-[32px]">
                            Free!
                          </Heading>
                        </div>
                      </div>
                      <div className="flex w-[34%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="h-[378px] w-px bg-blue_gray-100 sm:h-px sm:w-[378px]" />
                        <div className="flex w-[90%] flex-col items-start gap-[42px] sm:w-full">
                          <Text size="textlg" as="p" className="w-full leading-[244.4%]">
                            <span className="text-gray-600">Detailed&nbsp;</span>
                            <span className="font-bold text-deep_purple-a400">Materiality Assessment</span>
                            <span className="font-bold text-gray-600">&nbsp;</span>
                            <span className="text-gray-600">template and draft</span>
                            <span className="text-gray-600">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-gray-600">Carbon Footprint Report Scope&nbsp;</span>
                            <span className="text-gray-600">
                              <>
                                (1, 2 & 3)
                                <br />
                                <br />
                                BM + PAT+ BP Modules &nbsp;
                              </>
                            </span>
                            <span className="font-bold text-deep_purple-a400">= ESG Assessment and Report</span>
                          </Text>
                          <Button
                            variant="outline"
                            shape="round"
                            color="undefined_undefined"
                            className="min-w-[200px] font-bold border-2 border-black text-black"
                          >
                            Coming Soon
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
