import Image from "next/image";

export default function Section() {
  return (
    <div className="overflow-x-hidden bg-white  bg-gray-400 pb-10" id="contact">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mt-5 text-xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-3xl lg:leading-tight font-pj">
              Get Consultancy on design &amp; development of Quality, Health,
              Safety &amp; Environmental Management Systems
            </h1>
            <p className="text-gray-900 mt-10">
              At Qhse Intl, we believe that a strong QHSE culture is the
              foundation of a successful business. Let us help you achieve
              excellence in Quality, Health, Safety, and Environment through our
              comprehensive training and consultancy services. Contact us today
              to learn more about how we can support your organization&apos;s
              QHSE needs.
            </p>
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <a
                href="mailto:habeeb_khan@yahoo.com"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                MAIL US
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-16 md:mt-20">
          <img
            className="object-cover object-top w-full h-[250px] mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
            src="https://cdn.pixabay.com/photo/2021/11/21/06/28/quality-6813293_1280.jpg"
            alt=""
          />
        </div> */}
      </section>
    </div>
  );
}
