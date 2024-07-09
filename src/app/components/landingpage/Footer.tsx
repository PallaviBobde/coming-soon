import Image from "next/image";

export default function Footer() {
  return (
    <section className="py-10  sm:pt-16 lg:pt-24 bg-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-[100px]" src="./qhseintl.png" alt="" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#training"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400"
                >
                  Training services
                </a>
              </li>
              <li>
                <a
                  href="#consultancy"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#whyqhseintl"
                  title=""
                  className="flex text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400"
                >
                  Why Qhse Intl
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#contact"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  title=""
                  className="flex text-white transition-all duration-200 hover:text-gray-400 focus:text-gray-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-white">
          © Copyright 2024, All Rights Reserved by QhseIntl
        </p>
      </div>
    </section>
  );
}
