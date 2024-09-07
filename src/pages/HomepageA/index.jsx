import React, { Suspense } from "react";  
import { Helmet } from "react-helmet";  
import { Button, Text, Heading, Img, Slider } from "../../components";  
import BasicModuleComponent from "../../components/BasicModuleComponent";  
import Footer from "../../components/Footer";  
import Header from "../../components/Header";  
import EcoEasiAISection from "./EcoEasiAISection";  
import EcoEasiBenefitsSection from "./EcoEasiBenefitsSection";  
import EcoEasiOverviewSection from "./EcoEasiOverviewSection";  
import HowEcoEasiSection from "./HowEcoEasiSection";  
import MostPopularArticlesSection from "./MostPopularArticlesSection";  
import SupplyChainComplianceSection from "./SupplyChainComplianceSection";  
  
const moduleOptionsList = [  
  {  
    titleText: "Basic Module",  
    descriptionText: (  
      <>  
        For Supplier SMEs with fewer than 10 employees  
        <br />  
        that want to provide a sustainability report to their mid-sized buyers.  
      </>  
    ),  
    freeText: "Free!",  
    detailedDescriptionText: (  
      <>  
        ESG Assessment and Report  
        <br />  
        <br />  
        Carbon Footprint Report Scope (1 & 2)  
        <br />  
        <br />  
        Not exceed 10 employees  
        <br />  
        <br />  
        Less than €350k of balance sheet total  
        <br />  
        <br />  
        Less than €700k in net turnover  
      </>  
    ),  
    comingSoonButton: "Coming soon",  
  },  
  {  
    titleText: "Basic + Narrative PAT Modules",  
    descriptionText: (  
      <>  
        For Supplier SMEs who have already ESG  
        <br />  
        incorporated into their strategy.  
      </>  
    ),  
    freeText: "Free!",  
    detailedDescriptionText: (  
      <>  
        Detailed Materiality Assessment template and draft  
        <br />  
        <br />  
        Carbon Footprint Report Scope (1 & 2)  
        <br />  
        <br />  
        BM + PAT Modules  
        <br />  
        = ESG Assessment and Report  
        <br />  
        <br />  
        Not exceed 50 employees  
        <br />  
        <br />  
        Less than €4m of balance sheet total  
        <br />  
        <br />  
        Less than €8m in net turnover  
      </>  
    ),  
    comingSoonButton: "Coming soon",  
  },  
  {  
    titleText: "Basic + Business Partners Modules",  
    descriptionText: (  
      <>  
        For Supplier SMEs who want to be  
        <br />  
        business partners but do not have ESG  
        <br />  
        built into their strategy.  
      </>  
    ),  
    freeText: "Free!",  
    detailedDescriptionText: (  
      <>  
        Detailed Materiality Assessment template and draft  
        <br />  
        <br />  
        Carbon Footprint Report Scope (1 & 2)  
        <br />  
        <br />  
        BM + PAT+ BP Modules  
        <br />  
        = ESG Assessment and Report  
        <br />  
        <br />  
        Not exceed 250 employees  
        <br />  
        <br />  
        Less than €20m of balance sheet total  
        <br />  
        <br />  
        Less than €40m in net turnover  
      </>  
    ),  
    comingSoonButton: "Coming soon",  
  },  
];  
  
export default function HomepageAPage() {  
  const [sliderState, setSliderState] = React.useState(0);  
  const sliderRef = React.useRef(null);  
  
  return (  
    <>  
      <Helmet>  
        <title>EcoEasi ESG Compliance Platform - Streamline Your Reporting</title>  
        <meta  
          name="description"  
          content="EcoEasi offers an AI-driven ESG Compliance Platform for SMEs. Get a free CSRD-aligned ESG Assessment & Report to enhance supply chain sustainability. Save time & costs with automated processes."  
        />  
      </Helmet>  
      <div className="flex w-full flex-col gap-[90px] bg-green-a700 lg:gap-[90px] md:gap-[67px] sm:gap-[45px]">  
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">  
          <div className="mx-auto flex-1 bg-gray-50_03">  
            <div className="relative h-[1042px] bg-[url(/public/images/img_banner.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto bg-green-100">  
              <Header />  
              <div className="relative h-[916px] flex-1">  
                <div className="absolute right-0 top-0 m-auto flex h-[704px] w-[72%] items-center justify-center bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat px-14 py-[58px] lg:h-auto md:h-auto md:p-5 sm:p-4">  
                  <div className="mb-[26px] flex w-[92%] flex-col gap-[424px] lg:w-full lg:gap-[318px] md:w-full md:gap-[318px] sm:gap-[212px]">  
                    <Slider  
                      autoPlay  
                      autoPlayInterval={2000}  
                      responsive={{  
                        0: { items: 1 },  
                        551: { items: 2 },  
                        1051: { items: 2 },  
                        1441: { items: 3 },  
                      }}  
                      disableDotsControls  
                      activeIndex={sliderState}  
                      onSlideChanged={(e) => {  
                        setSliderState(e?.item);  
                      }}  
                      ref={sliderRef}  
                      items={[...Array(9)].map(() => (  
                        <React.Fragment key={Math.random()}>  
                          <div className="px-[50px]">  
                            {/* Slider content */}  
                          </div>  
                        </React.Fragment>  
                      ))}  
                    />  
                  </div>  
                </div>  
                <div className="absolute bottom-[19px] left-0 right-0 m-auto flex w-[72%] flex-col items-start gap-[34px]">  
                  <Heading  
                    size="heading3xl"  
                    as="h1"  
                    className="w-[52%] leading-[110%] font-bold text-[75px] lg:w-full lg:px-5 lg:text-[48px] md:w-full md:px-5"  
                  >  
                    Streamline your ESG Reporting to your buyers on EcoEasi for  
                    Free!  
                  </Heading>  
                  <Text  
                    size="textxl"  
                    as="p"  
                    className="w-[52%] leading-[157.4%] lg:w-full lg:px-5 md:w-full md:px-5"  
                  >  
                    Are you an SME supplier who want a free ESG Assessment &  
                    Report aligned with CSRD which you can send to buyers? Then  
                    sign-up to the EcoEasi Supply Chain ESG compliance platform.  
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
                  <Img  
                    src="images/img_icon.svg"  
                    alt="Icon Image"  
                    className="mx-7 mt-[98px] h-[254px] md:mx-0"  
                  />  
                  <div className="flex flex-col items-center gap-4">  
                    <Heading as="h2" className="md:text-[24px] sm:text-[22px]">  
                      Basic Module  
                    </Heading>  
                    <Text  
                      size="textmd"  
                      as="p"  
                      className="self-stretch text-center leading-[157.4%]"  
                    >  
                      <>  
                      For all supplier & micro SMEs that are  
                        <br />  
                        between 1 - 250 people, €350k - €40m in
                        <br />
                        balance sheet total and €700k -€40m in
                        <br /> 
                        net turnover  
                      </>  
                    </Text>  
                  </div>  
                </div>  
              </div>  
              <div className="absolute bottom-[4%] left-0 right-0 m-auto flex flex-1 justify-center gap-2 px-14 md:px-5 sm:px-4">  
                <div className="h-[16px] w-[16px] rounded-lg bg-green-500_01" />  
                <div className="h-[16px] w-[16px] rounded-lg bg-gray-300_02" />  
              </div>  
            </div>  
          </div>  
        </div>  
  
        
        <EcoEasiOverviewSection />
        <EcoEasiAISection/>  
        <EcoEasiBenefitsSection />  
        <SupplyChainComplianceSection />  
        <HowEcoEasiSection />  
  
        {/* Pricing Options Section */}  
        <div className="py-20 lg:py-8 md:py-5 sm:py-4">  
          <div className="flex flex-col gap-[52px] py-[50px] md:py-5 sm:gap-[26px] sm:py-4">  
            <div className="flex flex-col items-center">  
              <div className="container-xs mt-[50px] flex flex-col items-center gap-[66px] lg:px-5 md:px-5 sm:gap-[33px]">  
                <Heading  
                  size="heading4xl"  
                  as="h3"  
                  className="md:text-[34px] sm:text-[28px]"  
                >  
                  Pricing options for Suppliers SMEs  
                </Heading>  
                <div className="flex flex-col gap-10 self-stretch">  
                  <div className="flex gap-[30px] md:flex-col">  
                    <Suspense fallback={<div>Loading feed...</div>}>  
                      {moduleOptionsList.map((d, index) => (  
                        <BasicModuleComponent  
                          {...d}  
                          key={"listColumn" + index}  
                          className="mb-[140px] md:mb-0"  
                        />  
                      ))}  
                    </Suspense>  
                  </div>  
                  <div>  
                    <div className="flex items-center justify-center gap-[42px] rounded-[30px] bg-gray-50 p-[30px] md:flex-col sm:p-4">  
                      <div className="flex w-[24%] items-center justify-between gap-5 md:w-full">  
                        <div className="flex w-[86%] justify-center">  
                          <div className="flex w-full px-1.5">  
                            <Heading  
                              size="headingxl"  
                              as="h4"  
                              className="md:text-[30px] sm:text-[28px]"  
                            >  
                              All Modules  
                            </Heading>  
                          </div>  
                        </div>  
                        <div className="h-[378px] w-px bg-blue_gray-100" />  
                      </div>  
                      <div className="flex w-[30%] flex-col gap-[30px] md:w-full">  
                        <div className="flex flex-col items-start gap-[42px]">  
                          <Text  
                            size="text2xl"  
                            as="p"  
                            className="leading-10 !text-gray-900"  
                          >  
                            <>  
                              Basic Module  
                              <br />  
                              + Narrative PAT Modules  
                              <br />  
                              + Business Partners Modules  
                            </>  
                          </Text>  
                          <Text  
                            size="textlg"  
                            as="p"  
                            className="w-[92%] leading-[27px] lg:w-full md:w-full"  
                          >  
                            For SMEs who have ESG strategy built in and and also  
                            want to be Business Partners.  
                          </Text>  
                        </div>  
                        <div className="flex">  
                          <Heading  
                            size="heading2xl"  
                            as="h5"  
                            className="md:text-[34px] sm:text-[32px]"  
                          >  
                            Free!  
                          </Heading>  
                        </div>  
                      </div>  
                      <div className="flex w-[34%] items-center justify-between gap-5 md:w-full sm:flex-col">  
                        <div className="h-[378px] w-px bg-blue_gray-100 sm:h-px sm:w-[378px]" />  
                        <div className="flex w-[90%] flex-col items-start gap-[42px] sm:w-full">  
                          <Text  
                            size="textlg"  
                            as="p"  
                            className="w-full leading-[244.4%]"  
                          >  
                            <span className="text-gray-600">Detailed</span>  
                            <span className="font-bold text-deep_purple-a400">  
                              Materiality Assessment  
                            </span>  
                            <span className="font-bold text-gray-600">  
                                
                            </span>  
                            <span className="text-gray-600">  
                              template and draft  
                            </span>  
                            <span className="text-gray-600">  
                              <>  
                                <br />  
                              </>  
                            </span>  
                            <span className="text-gray-600">  
                              Carbon Footprint Report Scope  
                            </span>  
                            <span className="text-gray-600">  
                              <>  
                                (1, 2 & 3)  
                                <br />  
                                <br />  
                                BM + PAT+ BP Modules   
                              </>  
                            </span>  
                            <span className="font-bold text-deep_purple-a400">  
                              = ESG Assessment and Report  
                            </span>  
                          </Text>  
                          <Button  
                            color="blue_gray_100"  
                            variant="outline"  
                            shape="round"  
                            className="min-w-[214px]"  
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
  
        <MostPopularArticlesSection />  
        <div className="mt-[90px] flex flex-col items-center">  
          <div className="container-xs mb-10 flex flex-col gap-[146px] lg:gap-[109px] lg:px-5 md:gap-[109px] md:px-5 sm:gap-[73px]">  
            <div className="h-px bg-gray-300_02" />  
            <Footer />  
          </div>  
        </div>  
      </div>  
    </>  
  );  
}  
