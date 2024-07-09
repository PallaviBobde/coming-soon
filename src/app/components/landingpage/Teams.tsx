import { FaLinkedin } from "react-icons/fa";

export const Teams = () => {
  return (
    <section className=" body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
            Meet Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
            At Qhse Intl, we believe that our strength lies in our people. Our
            team is a diverse group of passionate professionals, each bringing
            unique skills and perspectives to the table. Together, we are
            dedicated to delivering innovative solutions and exceptional results
            for our clients.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <a
              href="https://www.linkedin.com/in/habeeb-ahmed-khan-certiosh-iirsm-mba-m-sc-b-sc-84884b46/"
              target="_blank"
            >
              <div className="h-full flex  border-gray-200 border p-4">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 mb-2"
                  src="https://media.licdn.com/dms/image/D4D03AQGA1XZ9viBlfw/profile-displayphoto-shrink_400_400/0/1716263925354?e=1726099200&v=beta&t=82NpQ25ItuQ9tkQNVpg538Ioko9dTfAJSos77vdcnos"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    HABEEB AHMED KHAN
                  </h2>
                  <div className="text-gray-500 flex align-center items-center">
                    <p className="text-gray-500">Founder and Coo</p>
                    <FaLinkedin
                      className="text-gray-500 m-1"
                      size={24}
                      color="#0a66c2"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <a href="https://www.linkedin.com/in/fawaz-ahmed-/" target="_blank">
              <div className="h-full flex items-center border-gray-200 border p-4 ">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://media.licdn.com/dms/image/D5635AQG4meQwsoU-vw/profile-framedphoto-shrink_400_400/0/1676272274639?e=1721149200&v=beta&t=1aaSqBPhaPUnVz8-jl2dJXPRw4g6Rkp4MFmXAVqa-5o"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Fawaz Ahmed
                  </h2>
                  <div className="text-gray-500 flex align-center items-center">
                    <p className="text-gray-500">Managing Director</p>
                    <FaLinkedin
                      className="text-gray-500 m-1"
                      size={24}
                      color="#0a66c2"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <a href="https://www.linkedin.com/in/manikandan-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%9A%E0%AF%86%E0%AE%B2%E0%AF%8D%E0%AE%B5%E0%AE%A9%E0%AF%8D-cert-iosh-idiposh-m-e-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D-610a80b2/" target="_blank">
              <div className="h-full flex items-center border-gray-200 border p-4 ">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://media.licdn.com/dms/image/D4D03AQHz6f-1HsBHWw/profile-displayphoto-shrink_400_400/0/1683493021485?e=1726099200&v=beta&t=v8ig1ucLtohwFy17rJ383dEJn6dhucAeGKQySMQPRqM"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    MANIKANDAN
                  </h2>
                  <div className="text-gray-500 flex align-center items-center">
                    <p className="text-gray-500">Advisor</p>
                    <FaLinkedin
                      className="text-gray-500 m-1"
                      size={24}
                      color="#0a66c2"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
