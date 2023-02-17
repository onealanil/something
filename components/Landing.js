import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Landing = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-16">
        <div className="flex w-[90%] gap-x-4">
          {/* left side  */}
          <div className="md:w-[80%] py-5 mt-3">
            <div className="flex flex-col gap-y-5">
              <span className="font-frontTitleFont text-green text-[2rem] md:text-[3rem] font-bold leading-relaxed tracking-wide scroll-smooth">
                Bitcoin Bubble bursts: Crypto market crashes{" "}
              </span>

              <div className="w-[100%] h-96 md:h-[33rem] relative">
                <Image
                  src="/images/card1.jpg"
                  alt="landing-photo"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-frontTextFont leading-normal tracking-wide py-3">
                The cryptocurrency market has been hit hard in recent days, as
                the value of Bitcoin and other major digital currencies has
                dropped significantly. The so-called &quot;Bitcoin bubble&quot;
                has officially burst, leaving many investors scrambling to sell
                their assets and minimize their losses. Experts have been
                warning for some time that the cryptocurrency market was due for
                a correction, as prices had been climbing at an unsustainable
                rate. The rapid rise of Bitcoin and other cryptocurrencies had
                sparked a frenzy of speculation, with many investors buying in
                at high prices in the hopes of turning a quick profit.
              </span>
              <Link href="/single">
                <div className="flex gap-x-4 items-center justify-center pb-4 hover:text-green cursor-pointer">
                  <span className="font-hotTopicsFont font-bold ">
                    Read Full Article
                  </span>
                  <i>
                    <BsArrowRight />
                  </i>
                </div>
              </Link>
            </div>
          </div>
          {/* left side end  */}
          {/* right side --hidden in mobile devices*/}
          <div className="hidden md:flex w-[20%] py-5 mt-3 px-4 pl-3 flex-col gap-y-3">
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  February 21
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  Money Matters: Your guide to financial success
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  April 1
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  The Wealthy Investor: Strategies for building wealth
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  Octuber 22
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  Finance 101: Mastering your money
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  November 11
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  Debt-Free Living: Achieving financial freedom
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  December 22
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  The Money Maze: Navigating the world of finance
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  April 1
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  The Wealthy Investor: Strategies for building wealth
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
            {/* one component  */}
            <Fade>
              <div className="flex flex-col gap-y-2 cursor-pointer select-none">
                <span className="font-sideFont text-sm text-green hover:text-black">
                  April 2
                </span>
                <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                  The Wealthy Investor: Strategies for building wealth
                </span>
                <span className="border border-b-gray-900"></span>
              </div>
            </Fade>
          </div>
          {/* right side end  */}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="h-[2px] my-5 border-solid w-[90%] font-bold bg-gray-600"></hr>
      </div>
    </>
  );
};

export default Landing;
