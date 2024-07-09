import Image from "next/image";

export default function Section2() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24" id="consultancy">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="text-center lg:text-left slide-to-top">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Consultancy Services
            </h2>
            <p className="mt-6 text-base text-gray-600">
              QHSE International boasts a team of consultants with extensive
              expertise and experience in developing systems that align with
              Health, Safety, and Environment standards. Our consultants ensure
              compliance with both local and international regulations. We offer
              consultancy services designed to help our clients optimize their
              workforce, suppliers, and operational sites.
            </p>
            <ul className="list-disc list-inside p-4 bg-gray-50 rounded-lg shadow-md mt-10">
              <li className="mb-2 text-gray-700">
                QHSE System Development: Tailored solutions to meet your
                industry-specific needs.
              </li>
              <li className="mb-2 text-gray-700">
                Compliance Audits: Thorough evaluations to ensure adherence to
                regulatory requirements.
              </li>
              <li className="mb-2 text-gray-700">
                Risk Management: Strategies to identify, assess, and mitigate
                risks in your operations.
              </li>
              <li className="mb-2 text-gray-700">
                Continuous Improvement: Ongoing support to enhance your QHSE
                performance.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-full max-w-md mx-auto rounded-xl slide-to-top"
              src="https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
