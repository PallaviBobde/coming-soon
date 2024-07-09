import Image from "next/image";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function HeroSection() {
  const [openMobileMenu,setOpenMobileMenu]=useState(false);
  return (
    <div className="h-[90vh] bg-cover bg-center bg-fixed bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2019/05/05/11/27/earth-4180280_1280.jpg')] pt-30">
      <header className="w-full menu">
        <div className="flex items-center justify-between bg-gray-800 ">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex rounded outline-none ">
              <img
                className="w-auto h-20 rounded-xl"
                src="./qhseintl.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setOpenMobileMenu(true)}
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {openMobileMenu && (
            <div className="lg:hidden h-[100vh] w-full bg-gray-800 flex flex-col items-center justify-center tex-center lg:ml-10 xl:ml-16 lg:items-center lg:justify-center  mobile-menu">
              <ImCross
                className="cross-btn"
                onClick={() => setOpenMobileMenu(false)}
               />
              <a
                href="#"
                title=""
                className="flex rounded outline-none "
                onClick={() => setOpenMobileMenu(false)}
              >
                <img
                  className="w-auto h-20 rounded-xl"
                  src="./qhseintl.png"
                  alt=""
                />
              </a>
              <a
                href="#training"
                title=""
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj  hover:bg-[white] hover:text-black mt-5"
              >
                Training services
              </a>
              <a
                href="#consultancy"
                title=""
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj  hover:bg-[white] hover:text-black mt-5"
              >
                Consultancy
              </a>
              <a
                href="#whyqhseintl"
                title=""
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-medium text-white px-4 py-2  rounded focus:outline-none font-pj  hover:bg-[white] hover:text-black mt-5"
              >
                Why Qhse Intl
              </a>
              <a
                href="#contact"
                title=""
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj hover:bg-[white] hover:text-black mt-5"
              >
                Contact Us
              </a>
            </div>
          )}

          <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center  ">
            <a
              href="#training"
              title=""
              className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj  hover:bg-[white]  "
            >
              Training services
            </a>
            <a
              href="#consultancy"
              title=""
              className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj  hover:bg-[white] "
            >
              Consultancy
            </a>
            <a
              href="#whyqhseintl"
              title=""
              className="text-base font-medium text-white px-4 py-2  rounded focus:outline-none font-pj  hover:bg-[white] "
            >
              Why Qhse Intl
            </a>
            <a
              href="#contact"
              title=""
              className="text-base font-medium text-white px-4 py-2 rounded focus:outline-none font-pj hover:bg-[white] "
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 h-[90vh]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-[90vh]">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left slide-to-top h-[90vh] pt-40">
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Quality, Health, Safety, Environment Intl
                </h1>
                <p className="mt-2 text-lg text-white sm:mt-8 font-inter">
                  Quality, Health, Safety, Environment Training and Consultancy
                  is leading provider of Quality, Health, Safety, Environment
                  Training and Consultancy and soft skills.
                </p>
                <a
                  href="mailto:habeeb_khan@yahoo.com"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-10"
                  role="button"
                >
                  MAIL US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
