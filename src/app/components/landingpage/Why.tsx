import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function WhySection() {
  return (
    <section
      className="py-12  sm:py-16 lg:py-20 bg-cover bg-center bg-fixed bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2019/05/05/11/27/earth-4180280_1280.jpg')]"
      id="whyqhseintl"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center slide-to-top">
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
              Why choose QHSE Intl?
            </h2>
            <p className="text-white mt-5">
              At QHSE Intl, we are committed to empowering businesses with the
              knowledge and expertise necessary to uphold the highest standards
              in Quality, Health, Safety, and Environment (QHSE). Our
              comprehensive training and consultancy services are designed to
              help organizations navigate the complexities of QHSE compliance
              and foster a culture of continuous improvement.
            </p>
          </div>
          <div className="relative mt-5 md:mt-12 md:order-2 slide-to-top">
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2">
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <IoIosPeople color="#333" size={50} />
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      Team of Experts
                    </p>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        Our team of HSE specialists is thoroughly trained and
                        experienced, excelling in both effective training and
                        consultancy services. They hold numerous local and
                        international awards, reflecting their expertise and
                        dedication.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <FaHeadphones color="#333" size={50} />
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      Excellent Client Support
                    </p>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-\lg leading-relaxed text-gray-900 font-pj">
                        Our highly regarded Admin Team ensures that learners and
                        clients receive the information and support they need,
                        utilizing the best resources available.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <MdPayment color="#333" size={50} />
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      Flexible Payment Plan and no hidden fees
                    </p>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        We offer the most affordable rates without compromising
                        the quality of our training. Additionally, our
                        installment payment option allows learners to start and
                        complete their courses in a more financially manageable
                        way.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <VscWorkspaceTrusted color="#333" size={50} />
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      Trusted by top companies and successful HSE professionals
                      around the world
                    </p>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        We have delivered our services across various
                        industries, from small businesses to large enterprises,
                        and have been successfully developing HSE professionals
                        for years.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
