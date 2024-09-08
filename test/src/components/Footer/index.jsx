import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col`}>
      <div className="flex w-[76%] items-start justify-between gap-5 md:flex-col">
        <div className="mt-1 flex w-[34%] flex-col gap-9 md:w-full">
          <div className="flex flex-col gap-[26px]">
            <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[36px] w-[166px] object-contain" />
            <Text size="textmd" as="p" className="leading-[157.4%]">
              Low cost Supply Chain ESG Reporting Platform.
            </Text>
          </div>
          <div className="flex w-[62%] flex-col gap-[18px] md:w-full">
            <div className="mr-3.5 flex items-center gap-4 md:mr-0">
              <Img src="images/img_lock_deep_purple_a400.svg" alt="Lock Icon" className="h-[22px] w-[22px] self-end" />
              <Text size="textmd" as="p">
                info@ecoeasi.com
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <Img src="images/img_phone_call.svg" alt="Phone Icon" className="h-[22px] w-[22px] self-end" />
              <Text size="textmd" as="p">
                +353 89 243 8762
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-[60%] flex-col self-center md:w-full">
          <div className="flex w-[60%] flex-wrap justify-between gap-5 md:w-full">
            <Heading as="h3" className="capitalize">
              EcoEasi
            </Heading>
            <Heading as="h3" className="capitalize">
              Resources
            </Heading>
          </div>
          <div className="mt-[26px] flex w-[66%] justify-between gap-5 md:w-full">
            <div className="h-px w-[42%] bg-gray-300_02" />
            <div className="h-px w-[42%] bg-gray-300_02" />
          </div>
          <div className="mt-3 flex items-start justify-between gap-5 md:flex-col">
            <ul className="flex w-[38%] flex-col items-start gap-11 md:w-full">
              <li>
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    About Us
                  </Text>
                </a>
              </li>
              <li>
                <a href="Products" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    Products
                  </Text>
                </a>
              </li>
              <li>
                <a href="FAQs" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    FAQs
                  </Text>
                </a>
              </li>
              <li>
                <a href="Pricing" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    Pricing
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    Contact Us
                  </Text>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start gap-11 self-center">
              <li>
                <a href="Blog" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    Blog
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    Background Information
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    Buyer Terms & Conditions
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    Supplier SME terms and conditions
                  </Text>
                </a>
              </li>
              <li>
                <a href="Privacy" target="_blank" rel="noreferrer">
                  <Text size="textmd" as="p" className="capitalize">
                    Privacy
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="textmd" as="p" className="capitalize">
                    Company news
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[50px] h-px self-stretch bg-gray-300_02" />
      <div className="mt-[34px] flex self-stretch">
        <Text size="textmd" as="p">
          Copyright © Idiro Analytics | Designed by Idiro Analytics{" "}
        </Text>
      </div>
    </footer>
  );
}
