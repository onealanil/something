import React from "react";
import Image from "next/legacy/image";

const about = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center md:hidden">
          <span className="font-sideFont text-green text-[2rem] font-bold leading-relaxed tracking-wide">
            About us
          </span>
        </div>
        <div className="w-[90%] flex flex-col-reverse md:flex-row py-5">
          {/* left side start */}
          <div className="w-full md:w-[60%] flex flex-col gap-y-5">
            <div className="hidden items-center justify-center md:flex">
              <span className="font-sideFont text-green text-[2rem] font-bold leading-relaxed tracking-wide">
                About us
              </span>
            </div>
            <div className="flex flex-col gap-y-5 font-frontTextFont">
              <div className="flex flex-col gap-y-1">
                <span className="text-xl font-black">Who are we?</span>
                <span>
                  We are a team of experienced finance professionals committed
                  to helping you achieve your financial goals. With years of
                  experience in the industry, we have the expertise and
                  knowledge to provide you with the latest financial news,
                  articles, and advice.
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-xl font-black">
                  What are our services?
                </span>
                <span>
                  We offer a range of financial services designed to help you
                  make informed decisions about your money and investments. From
                  personal finance to retirement planning and wealth management,
                  our team of experts provides timely and accurate information
                  that is tailored to your specific needs.
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-xl font-black">
                  What can you expect from us?
                </span>
                <span>
                  You can expect a personalized and professional approach to
                  your financial needs. Our team is dedicated to providing you
                  with the highest level of service and support. We are always
                  available to answer your questions and provide you with the
                  guidance you need to achieve your financial goals.
                </span>
                <span className="mt-4">
                  Please feel free to contact us through our social media
                  handles provided in the footer section of our website.
                </span>
              </div>
            </div>
          </div>
          {/* left side end  */}
          {/* right side start */}
          <div className="w-full md:w-[40%] mt-[-1rem]">
            <div className="w-[100%] h-96 md:h-[33rem] relative">
              <Image
                src="/images/about.svg"
                layout="fill"
                objectFit="fill"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* right side end  */}
        </div>
      </div>
    </>
  );
};

export default about;
