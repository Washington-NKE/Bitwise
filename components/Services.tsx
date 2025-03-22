import Section from "./Section";
import Heading from "./Heading";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          className=""
          tag="Services"
          title="A showcase of creativity, innovation and problem-solving."
          text="Bitwise unlocks the potential of creative ideas."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-gray-200/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src='/assets/services/service-1.png'
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="text-[2rem] leading-normal mb-4">Smartest Developers</h4>
              <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-n-3">
              Bitwise unlocks the potential of creative ideas
              </p>
              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-gray-800"
                  >
                    <img width={24} height={24} src='/assets/check.svg' />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-gray-200/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-gray-200/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/assets/services/service-2.png"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black/0 to-black/90 lg:p-15">
                <h4 className="text-[2rem] leading-normal mb-4">Web Development</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-gray-400">
                  Get a sleek, high-performing website that drives results-no stress, just solutions. Try us now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-gray-900 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Web app development</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-gray-400">
                  The ultimate web and app development powerhouse. What will you build?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-gray-800 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-gray-900 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-black rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src='/assets/services/service-3.png'
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;