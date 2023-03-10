import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Quiz = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
      <div className="w-[100%] flex items-center justify-center">
        <div className="flex text-[1rem] md:text-[2rem] font-bold leading-relaxed tracking-wide gap-x-2">
          <Fade>
            <span className="font-sideFont">Test Your </span>
            <span className="font-sideFont text-green">Financial Skill</span>
          </Fade>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center ">
        <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] flex md:flex-row flex-col">
          <div className="w-full md:w-[55%] flex items-center justify-start ">
            <div className="">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/quiz.json"
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] flex 2xl:py-4 2xl:p-6">
            <div className="w-[100%] flex flex-col p-5 gap-y-4 md:gap-y-5 items-start justify-start 2xl:text-[1rem] 2xl:w-[90%]">
              <Fade>
                <span className="font-hotTopicsFont leading-relaxed tracking-wide">
                  The quiz has been carefully designed to cover a range of
                  topics, including budgeting, saving, investing, and managing
                  debt. Whether you are new to the world of personal finance or
                  a seasoned pro, our quiz is an excellent tool to assess your
                  financial knowledge and identify areas for improvement.Our
                  goal is to help you improve your financial literacy and make
                  informed decisions about your money. By taking the quiz, you
                  can gain valuable insights into your financial skills and
                  learn more about the areas where you need to focus your
                  attention.
                </span>
              </Fade>
              <div className="flex pb-5 mt-2">
                <Link href="/quiz/quiz1">
                  <span className="py-3 px-5 bg-green font-hotTopicsFont text-white tracking-wide rounded-md cursor-pointer">
                    Take a Quiz
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
