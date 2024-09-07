import { Button, Heading, Img } from "./..";  
import React from "react";  
  
export default function Header({ ...props }) {  
  return (  
    <div className="relative w-full overflow-hidden">  
      <header  
        {...props}  
        className={`${props.className} flex items-center justify-between w-full py-6 px-16 lg:px-50 xl:px-32`}  
      >  
        <Img  
          src="images/img_ecoeasi_logo_2.png"  
          alt="Logo Image"  
          className="h-[60px] w-auto object-contain"  
        />  
        <div className="flex items-center gap-8 ml-auto">  
          <nav>  
            <ul className="flex gap-6 lg:gap-8">  
              {["Home", "About", "Products", "Blog", "FAQs"].map((item) => (  
                <li key={item}>  
                  <a href="#" className="hover:text-green-500 transition-colors duration-300">  
                    <Heading as="p" className="!font-poppins text-base">  
                      {item}  
                    </Heading>  
                  </a>  
                </li>  
              ))}  
            </ul>  
          </nav>  
          <Button shape="round" className="min-w-[140px] bg-[#4CAF4F] text-white hover:bg-[#45a049] transition-colors duration-300 px-6 py-2 text-base">  
            Contact us!  
          </Button>  
        </div>  
      </header>  
    </div>  
  );  
}  
