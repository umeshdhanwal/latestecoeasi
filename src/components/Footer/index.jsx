import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col`}>
<<<<<<< HEAD
      <div id="footer" className="container-xs lg:px-5 md:px-5">
=======
      <div className="container-xs lg:px-5 md:px-5">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
        <div className="h-px bg-gray-300_02" />
        <div className="mt-[146px] flex items-start gap-[58px] md:flex-col">
          <div className="mt-1 flex w-[26%] flex-col gap-9 md:mt-0 md:w-full">
            <div className="flex flex-col gap-[26px]">
              <Img src="images/img_ecoeasi_logo_2.png" alt="Footer Logo" className="h-[50px] w-[166px] object-contain" />
<<<<<<< HEAD
              <Text size="textxl" as="p" className="leading-[157.4%]">
=======
              <Text as="p" className="leading-[157.4%]">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                Low cost Supply Chain ESG Reporting Platform.
              </Text>
            </div>
            <div className="flex w-[62%] flex-col gap-[18px] lg:w-full md:w-full">
              <div className="mr-3.5 flex items-center gap-4 md:mr-0">
                <Img src="images/img_lock.svg" alt="Lock Icon" className="h-[22px] w-[22px] self-end" />
<<<<<<< HEAD
                <Text size="textxl" as="p">
                  info@ecoeasi.com
                </Text>
              </div>
              <div className="flex items-center gap-4">
                <Img src="images/img_phone_call.svg" alt="Phone Icon" className="h-[22px] w-[22px] self-end" />
                <Text size="textxl" as="p">
                  +353 89 243 8762
                </Text>
=======
                <Text as="p">info@ecoeasi.com</Text>
              </div>
              <div className="flex items-center gap-4">
                <Img src="images/img_phone_call.svg" alt="Phone Icon" className="h-[22px] w-[22px] self-end" />
                <Text as="p">+353 89 243 8762</Text>
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
              </div>
            </div>
          </div>
          <div className="flex w-[48%] flex-col self-center md:w-full">
            <div className="flex w-[60%] flex-wrap justify-between gap-5 lg:w-full md:w-full">
              <Heading size="headinglg" as="h3" className="capitalize md:text-[24px] sm:text-[22px]">
                EcoEasi
              </Heading>
              <Heading size="headinglg" as="h3" className="capitalize md:text-[24px] sm:text-[22px]">
                Resources
              </Heading>
            </div>
            <div className="mt-[26px] flex w-[66%] justify-between gap-5 lg:w-full md:w-full">
              <div className="h-px w-[42%] bg-gray-300_02" />
              <div className="h-px w-[42%] bg-gray-300_02" />
            </div>
            <div className="mt-3 flex items-start justify-between gap-5 md:flex-col">
              <ul className="flex w-[38%] flex-col items-start gap-11 md:w-full">
                <li>
                  <a href="Home" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      About Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Products" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Products
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="FAQs" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      FAQs
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Pricing" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Pricing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Contact Us
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-11 self-center">
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Background Information
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Buyer Terms & Conditions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Supplier SME terms and conditions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Privacy" target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Privacy
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
<<<<<<< HEAD
                    <Text size="textxl" as="p" className="capitalize">
=======
                    <Text as="p" className="capitalize">
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
                      Company news
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex flex-col items-start gap-[34px]">
<<<<<<< HEAD
          <div className="h-px self-stretch bg-gray-300_02" />
          <Text size="textxl" as="p">
            Copyright © Idiro Analytics | Designed by Idiro Analytics{" "}
          </Text>
=======
          <div className="h-px w-full self-stretch bg-gray-300_02" />
          <Text as="p">Copyright © Idiro Analytics | Designed by Idiro Analytics </Text>
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
        </div>
      </div>
    </footer>
  );
}
