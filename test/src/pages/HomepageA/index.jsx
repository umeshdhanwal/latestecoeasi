import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AllModulesSection from "./AllModulesSection";
import EcoEasiAISection from "./EcoEasiAISection";
import EcoEasiBenefitsSection from "./EcoEasiBenefitsSection";
import EcoEasiOverviewSection from "./EcoEasiOverviewSection";
import HomepageASection from "./HomepageASection";
import HowEcoEasiSection from "./HowEcoEasiSection";
import MostPopularArticlesSection from "./MostPopularArticlesSection";
import PricingOptionsSection from "./PricingOptionsSection";
import React from "react";

export default function HomepageAPage() {
  return (
    <>
      <Helmet>
        <title>EcoEasi ESG Compliance Platform - Streamline Your Reporting</title>
        <meta
          name="description"
          content="EcoEasi offers an AI-driven ESG Compliance Platform for SMEs. Get a free CSRD-aligned ESG Assessment & Report to enhance supply chain sustainability. Save time & costs with automated processes."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[90px] bg-white-a700 lg:gap-[90px] md:gap-[67px] sm:gap-[45px]">
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">
          <div className="mx-auto flex-1 bg-gray-50_03">
            <div className="relative h-[1042px] bg-[url(/public/images/img_banner.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              <div className="relative h-[916px] flex-1">
                <div className="absolute right-0 top-0 m-auto flex h-[704px] w-[72%] items-center justify-center bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat px-14 py-[58px] lg:h-auto md:h-auto md:p-5 sm:p-4">
                  <div className="mb-[26px] flex w-[92%] flex-col gap-[424px] lg:w-full lg:gap-[318px] md:w-full md:gap-[318px] sm:gap-[212px]">
                    <Header />
                    <div className="flex rotate-[90deg] flex-col items-end p-1">
                      <Img src="images/img_vector.svg" alt="Upward Arrow" className="h-[50px] w-[50px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[19px] left-0 right-0 m-auto flex w-[72%] flex-col items-start gap-[34px]">
                  <Heading
                    size="heading3xl"
                    as="h1"
                    className="w-[52%] leading-[110%] lg:w-full lg:px-5 lg:text-[48px] md:w-full md:px-5"
                  >
                    Streamline your ESG Reporting to your buyers on EcoEasi for Free!
                  </Heading>
                  <Text size="textxl" as="p" className="w-[52%] leading-[157.4%] lg:w-full lg:px-5 md:w-full md:px-5">
                    Are you an SME supplier who want a free ESG Assessment & Report aligned with CSRD which you can send
                    to buyers? Then sign-up to the EcoEasi Supply Chain ESG compliance platform.
                  </Text>
                  <Button
                    color="purple_A700"
                    size="md"
                    variant="fill"
                    shape="round"
                    className="min-w-[246px] !rounded-[34px] font-bold"
                  >
                    SMEs get started
                  </Button>
                </div>
                <div className="absolute bottom-[-1px] right-[14%] m-auto flex w-[28%] flex-col gap-[34px] rounded-[40px] bg-white-a700 px-8 py-[50px] md:py-5 sm:p-4">
                  <Img src="images/img_icon.svg" alt="Icon Image" className="mx-7 mt-[98px] h-[254px] md:mx-0" />
                  <div className="flex flex-col items-center gap-4">
                    <Heading as="h2" className="md:text-[24px] sm:text-[22px]">
                      Basic Module
                    </Heading>
                    <Text size="textmd" as="p" className="self-stretch text-center leading-[157.4%]">
                      <>
                        For SMEs with fewer than 10 employees
                        <br />
                        that want to provide a ESG Assessment & Report to their mid-sized buyers.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="absolute left-0 right-0 top-[9%] m-auto flex items-center gap-1.5">
                  <Img src="images/img_twitter.svg" alt="Twitter Image" className="h-[34px] w-[4%] object-contain" />
                  <Heading as="h3" className="!font-lato !font-black !text-gray-900 md:text-[24px] sm:text-[22px]">
                    EcoEasi
                  </Heading>
                </div>
              </div>
              <div className="absolute bottom-[41%] left-0 right-0 mx-[100px] my-auto flex flex-1 rotate-[90deg] flex-col items-start p-1 lg:mx-0 md:mx-0">
                <Img src="images/img_vector_purple_a700.svg" alt="Vector Image" className="h-[50px] w-[50px]" />
              </div>
              <div className="absolute bottom-[4%] left-0 right-0 m-auto flex flex-1 justify-center gap-2 px-14 md:px-5 sm:px-4">
                <div className="h-[16px] w-[16px] rounded-lg bg-green-500_01" />
                <div className="h-[16px] w-[16px] rounded-lg bg-gray-300_02" />
              </div>
            </div>
          </div>
          <Img
            src="images/img_favorite.svg"
            alt="Favorite Icon"
            className="absolute bottom-[3%] left-0 m-auto h-[10px]"
          />
        </div>
        <div>
          {/* eco easi overview section */}
          <EcoEasiOverviewSection />

          {/* eco easi a i section */}
          <EcoEasiAISection />

          {/* eco easi benefits section */}
          <EcoEasiBenefitsSection />

          {/* homepage a section */}
          <HomepageASection />
          <div className="mt-[22px] flex flex-col gap-[60px] py-20 lg:py-8 md:py-5 sm:gap-[30px] sm:py-4">
            {/* how eco easi section */}
            <HowEcoEasiSection />
            <div className="flex flex-col gap-20 py-[50px] lg:gap-20 md:gap-[60px] md:py-5 sm:gap-10 sm:py-4">
              {/* pricing options section */}
              <PricingOptionsSection />

              {/* all modules section */}
              <AllModulesSection />
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
        </div>
      </div>
    </>
  );
}
