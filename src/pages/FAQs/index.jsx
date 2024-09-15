import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FAQsSection from "./FAQsSection";
import React from "react";

export default function FAQsPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - EcoEasi ESG Solutions</title>
        <meta
          name="description"
          content="Have questions about CSRD scope for SMEs or EcoEasi product pricing? Our FAQs provide answers to common queries on our affordable ESG reporting platform for Supply Chain SMEs. "
        />
      </Helmet>
      <div className="relative h-[2224px] w-full bg-white-a700 lg:h-auto md:h-auto">
        <Img src="images/img_background_patterns.svg" alt="Background Image" className="mt-1.5 h-[808px] flex-1" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
          <Header />

          {/* f a qs section */}
          <FAQsSection />
          <Footer className="mt-[120px]" />
        </div>
      </div>
    </>
  );
}
