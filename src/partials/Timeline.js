import React from "react";
import PhotoMiniAbout from "../images/banner/image-mini-about.jpg";

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section About */}
        <div className="w-full flex pt-32 pb-12 md:pb-16">
          <div className="w-1/2">
            <img
              src={PhotoMiniAbout}
              width="1024"
              height="504"
              alt="Mini About Vultra"
            />
          </div>
          <div className="w-1/2 pl-11">
            <small className="text-caps"> / WHO ARE WE?</small>
            <h1 className="h1 weight-thin heading-description pt-12 mb-8">
              Vultra is a digital agency specialising in web design &
              development, mobile apps, and graphic design.
            </h1>
            <p className="p-description mb-8">
              With years of experience under our belts, we can help your
              business get a competitive edge through rich, high quality digital
              services tailored to fit your needs.
            </p>
            <p className="p-description">
              Driven by our mantra of "Creativity and Innovate", we like pushing
              the boundaries and trying new things.
            </p>
          </div>
        </div>
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-20">
            <small className="text-caps"> / THE JOURNEY</small>
            <h2 className="h2 mb-4 pt-12 weight-thin">
              Bringing the world's ideas to life
            </h2>
          </div>

          {/* Items */}
          <div
            className="max-w-3xl mx-auto -my-4 md:-my-6"
            data-aos-id-timeline
          >
            {/* 1st item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2016
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4">
                    Vultra was founded as Dota E-Sport Team
                  </h4>
                </div>
                <p className="text-md text-gray-400">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2017
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4">
                    Transitioned to Digital Agency business model
                  </h4>
                </div>
                <p className="text-md text-gray-400">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>

            {/* 3rd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2022
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4">Legaly as a Digital Business in Indonesia</h4>
                </div>
                <p className="text-lg text-gray-400">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>

            {/* 4th item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  Our Dreams
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    20xx
                  </div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4">Reaching 100+ happy clients</h4>
                </div>
                <p className="text-lg text-gray-400">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
