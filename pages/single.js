import React from "react";
import Image from "next/legacy/image";
import { BiHomeAlt } from "react-icons/bi";
import NextTopic from "../components/NextTopic";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  TelegramIcon,
  InstapaperIcon,
} from "react-share";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";

const single = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-16">
        <div className="w-[90%] flex gap-x-3 items-center justify-start my-2 mt-3 text-[#CCCBCB] mb-[-8px] font-hotTopicsFont text-[0.75rem]">
          <i className="cursor-pointer hover:text-green">
            <BiHomeAlt size={20} />
          </i>
          <span className="h-[1rem] w-[1px] border border-[#CCCBCB]"></span>
          <span className="cursor-pointer hover:text-green">Investing</span>
          <span className="h-[1rem] w-[1px] border border-[#CCCBCB]"></span>
          <span className="cursor-pointer hover:text-green">
            cryptocurrency
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex w-[90%] gap-x-2">
          {/* left side  */}
          <div className="md:w-[80%] py-5">
            <div className="flex flex-col gap-y-2">
              <span className="font-frontTitleFont text-green text-[2rem] md:text-[3rem] font-bold leading-relaxed tracking-wide">
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
              <div className="flex items-center justify-between">
                <span className="font-hotTopicsFont text-green">Admin</span>
                <span className="mr-3 font-hotTopicsFont text-green">
                  17 February
                </span>
              </div>
              <span className="font-hotTopicsFont text-3xl font-black leading-normal tracking-wide">
                What is happening in crypto world ?
              </span>
              <span className="font-hotTopicsFont leading-normal tracking-wide py-3 mt-[-5px]">
                The cryptocurrency market has been hit hard in recent days, as
                the value of Bitcoin and other major digital currencies has
                dropped significantly. The so-called &quot;Bitcoin bubble&quot;
                has officially burst, leaving many investors scrambling to sell
                their assets and minimize their losses. Experts have been
                warning for some time that the cryptocurrency market was due for
                a correction, as prices had been climbing at an unsustainable
                rate. The rapid rise of Bitcoin and other cryptocurrencies had
                sparked a frenzy of speculation, with many investors buying in
                at high prices in the hopes of turning a quick profit. What is
                happening in crypto world ? The world of cryptocurrencies has
                seen its fair share of ups and downs. However, few events have
                been as impactful as the Bitcoin bubble burst and the subsequent
                crypto market crash. In this article, take a closer look at what
                caused this phenomenon, its effects on the crypto market, and
                what it means for investors and traders. What caused the Bitcoin
                bubble burst? Bitcoin, the world first and largest
                cryptocurrency by market capitalization, saw an unprecedented
                surge in price in late 2017. The price of Bitcoin rose from
                around $1,000 at the start of the year to an all-time high of
                nearly $20,000 in December of that year. This rapid increase in
                price was driven by a combination of factors, including
                increased adoption, speculation, and investor excitement.
                However, as with any bubble, the price of Bitcoin sustain this
                rapid growth forever. In 2018, the bubble finally burst, and the
                price of Bitcoin plummeted. This was largely due to a number of
                factors, including increased regulation, security concerns, and
                the general market sentiment. What was impact on the crypto
                market? The fall in the price of Bitcoin had a significant
                impact on the entire crypto market. The market capitalization of
                all cryptocurrencies fell from a high of nearly $830 billion in
                January 2018 to around $130 billion in December of that year.
                This represents a decline of 84% in just one year. Many
                investors and traders who had jumped into the market at the peak
                of the bubble lost significant amounts of money. This led to a
                general decrease in investor confidence in the crypto market,
                and many people began to question the viability of
                cryptocurrencies as an asset class. What does the it mean for
                investors and traders? The Bitcoin bubble burst serves as a
                reminder of the volatility and risks inherent in the crypto
                market. important for investors and traders to approach
                cryptocurrencies with caution and to thoroughly understand the
                potential risks before investing. However, also worth noting
                that the crypto market has since recovered from the crash, and
                many cryptocurrencies have seen significant growth in recent
                years. While there is no guarantee that the market will continue
                to recover, clear that cryptocurrencies have a place in the
                future of finance.
              </span>
              <div className="flex gap-x-4">
                <span className="w-4 h-40 bg-green"></span>
                <div className="flex flex-col gap-y-3">
                  <span className="font-hotTopicsFont font-bold text-[1.5rem]">
                    “If you look back to March of last year when we saw the
                    market collapse, you didn’t see bitcoin suddenly rally in
                    that period.”
                  </span>
                  <span className="font-hotTopicsFont font-bold">
                    Rosie Ballard, partner and portfolio manager at James Hasbro
                    & Partners
                  </span>
                </div>
              </div>

              <hr className="border-1 border-black my-3 " />

              {/* share code start */}
              <div className="social-share flex flex-col md:flex-row justify-center items-center ">
                <div className="">
                  <span className="font-quotes dark:text-whiteE-0">
                    Share this Blog :{" "}
                  </span>
                </div>
                <div className="md:ml-9 flex gap-2 my-3">
                  <FacebookShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <InstapaperShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <InstapaperIcon size={32} round />
                  </InstapaperShareButton>

                  <TwitterShareButton url="" quote="" hashtag="" description="">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <EmailShareButton url="" quote="" hashtag="" description="">
                    <EmailIcon size={32} round />
                  </EmailShareButton>

                  <TelegramShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                </div>
              </div>
              {/* share code end  */}
              {/* comment section start  */}
              <hr className="border-1 border-black my-3" />
              <hr className="border-1 border-black my-3" />
              <div className="comment flex flex-col justify-center items-center">
                <form className="w-full">
                  <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                      className="appearance-none  border-none w-full text- mr-3 py-1 px-2 leading-tight focus:outline-none font-hotTopicsFont"
                      type="text"
                      placeholder="Add a comment ....."
                      aria-label="Full name"
                    />
                    <button
                      className=" bg-green text-white text-sm py-2 px-3 rounded"
                      type="button"
                    >
                      <span className="font-hotTopicsFont">Comment</span>
                    </button>
                    <button
                      className="flex-shrink-0 font-hotTopicsFont text-sm py-1 px-2 rounded text-red-500"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              {/* comment start  */}
              <div className="flex my-2 gap-2 mt-5 mb-1">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/card3.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col w-full py-2 bg-white rounded-lg  shadow-2xl">
                  <div className="flex  ml-4 justify-between">
                    <span className="tracking-wider font-bold text-xs mt-2 cursor-pointer">
                      Anil Bhandari
                    </span>
                    <span className="font-time text-xs mr-2 mt-2 cursor-pointer">
                      5 days ago
                    </span>
                  </div>
                  <span className="mx-4 my-2 font-hotTopicsFont text-sm tracking-wider text-gray-500">
                    Good content
                  </span>
                </div>
              </div>
              {/* comment end  */}
            {/* comment start  */}
            <div className="flex my-2 gap-2 mt-1 mb-5">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/card3.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col w-full py-2 bg-white rounded-lg  shadow-2xl">
                  <div className="flex  ml-4 justify-between">
                    <span className="tracking-wider font-bold text-xs mt-2 cursor-pointer">
                      Anil Bhandari
                    </span>
                    <span className="font-time text-xs mr-2 mt-2 cursor-pointer">
                      5 days ago
                    </span>
                  </div>
                  <span className="mx-4 my-2 font-hotTopicsFont text-sm tracking-wider text-gray-500">
                    Good content
                  </span>
                </div>
              </div>
              {/* comment end  */}
              {/* comment section end  */}
            </div>
          </div>

          {/* left side end  */}

          {/* right side --hidden in mobile devices*/}
          <div className="hidden md:flex w-[20%] py-5  px-4 pl-3 flex-col gap-y-3">
            <div className="flex items-center mb-4 justify-center  cursor-pointer select-none">
              <span className="font-hotTopicsFont font-[700] text-[1.3rem]">
                More Articles
              </span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                February 21
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                Money Matters: Your guide to financial success
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                April 1
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                The Wealthy Investor: Strategies for building wealth
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                Octuber 22
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                Finance 101: Mastering your money
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                November 11
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                Debt-Free Living: Achieving financial freedom
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                December 22
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                The Money Maze: Navigating the world of finance
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
            {/* one component  */}
            <div className="flex flex-col gap-y-2 cursor-pointer select-none">
              <span className="font-sideFont text-sm text-green hover:text-black">
                April 1
              </span>
              <span className="font-sideFont font-semibold leading-relaxed tracking-wide hover:text-green">
                The Wealthy Investor: Strategies for building wealth
              </span>
              <span className="border border-b-gray-900"></span>
            </div>
          </div>
          {/* right side end  */}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="h-[2px] my-8 border-solid w-[90%] font-bold bg-gray-600"></hr>
      </div>
      <NextTopic />
    </>
  );
};

export default single;
