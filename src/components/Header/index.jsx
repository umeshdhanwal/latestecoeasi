import { Button, Text, Img } from "./..";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Header({ ...props }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const NavItems = () => (
    <ul className={`flex ${isMobile ? 'flex-col' : 'flex-wrap'} gap-2.5`}>
      {['Home', 'About', 'Products', 'Blog', 'FAQs', 'Contact Us'].map((item) => (
        <li key={item}>
          {item === 'Products' ? (
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} cursor-pointer`}
            >
              <Text size="textmd" as="p" className="font-poppins text-[18px] font-medium text-gray-900">
                {item}
              </Text>
            </Link>
          ) : item === 'Contact Us' ? (
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''} cursor-pointer`}
            >
              <Text size="textmd" as="p" className="font-poppins text-[18px] font-medium text-gray-900">
                {item}
              </Text>
            </Link>
          ) : (
            <a href="#" className={`lg:text-[15px] ${isMobile ? 'block py-2' : ''}`}>
              <Text size="textmd" as="p" className="font-poppins text-[18px] font-medium text-gray-900">
                {item}
              </Text>
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-14 md:py-5 sm:py-4`}>
      <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:px-5">
        <Img
          src="images/img_ecoeasi_logo_2.png"
          alt="Logo Image"
          className="h-[88px] w-[18%] object-contain md:w-full"
        />
        {isMobile ? (
          <>
            <button onClick={toggleDrawer} className="text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
              <div className="p-5">
                <button onClick={toggleDrawer} className="mb-5 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <NavItems />
                <Button 
                  shape="round" 
                  className="mt-5 min-w-[154px] !bg-white rounded-[36px] px-[34px] font-bold sm:px-4 text-gray-900 border border-gray-900 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-300"
                >
                  Login
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="mr-16 flex w-[60%] justify-center gap-10 md:mr-0 md:w-full">
            <div className="flex flex-1 justify-center rounded-[36px] bg-gray-50_19 p-6 md:self-stretch sm:p-4">
              <NavItems />
            </div>
            <Button 
              shape="round" 
              className="min-w-[154px] !bg-white rounded-[36px] px-[34px] font-bold sm:px-4 text-gray-900 border border-gray-900 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-300"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
