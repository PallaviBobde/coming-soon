import Image from "next/image";

export default function Section1() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24" id="training">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div>
            <img
              className="w-full max-w-md mx-auto rounded-xl slide-to-top"
              src="https://cdn.pixabay.com/photo/2015/12/01/08/33/laptop-1071781_1280.jpg"
              alt=""
            />

            <ul className="list-disc list-inside p-4 bg-gray-50 rounded-lg shadow-md mt-10">
              <li className="mb-2 text-gray-700">NEBOSH Accredited Courses</li>
              <li className="mb-2 text-gray-700">IOSH Accredited Courses</li>
              <li className="mb-2 text-gray-700">
                HIGHFIELD Accredited Courses
              </li>
              <li className="mb-2 text-gray-700">
                OPITO-IMIST Accredited Course
              </li>
              <li className="mb-2 text-gray-700">
                American Safety and Health Association (ASHI) Accredited Courses
              </li>
              <li className="mb-2 text-gray-700">
                Knowledge and Human Development Authority (KHDA) Accredited
                Courses
              </li>
              <li className="mb-2 text-gray-700">
                Health and Safety Institute Accredited Courses
              </li>
              <li className="mb-2 text-gray-700">
                DOLE Mandatory Accredited Courses – Philippines
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left slide-to-top">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Training Services
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Our team comprises highly competent health and safety trainers
              with deep and extensive knowledge in the field of Occupational
              Health and Safety. Their experience is truly remarkable. Our
              trainers are approved to deliver both local and international
              courses, including:
            </p>
            <p className="mt-6 text-base text-gray-600">
              We offer a wide range of accredited training courses designed to
              equip your workforce with the necessary skills and knowledge to
              ensure a safe and productive work environment. Our courses
              include:
            </p>
            <img
              className="w-full max-w-md mx-auto rounded-xl slide-to-top mt-10"
              src="https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_1280.jpg"
              alt=""
            />
            <img
              className="w-full max-w-md mx-auto rounded-xl slide-to-top mt-10"
              src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
