import React from "react";
import Image from "next/legacy/image";

const Quiz = () => {
  return (
    <>
      <div className="w-[100%] flex items-center justify-center">
        <div className="flex text-[1rem] md:text-[2rem] font-bold leading-relaxed tracking-wide gap-x-2">
          <span className="font-sideFont">Test Your </span>
          <span className="font-sideFont text-green">Financial Skill</span>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <div className="w-[90%] flex md:flex-row flex-col">
          <div className="w-full md:w-[55%] flex items-center justify-start">
            <div>
              <img
                src="/images/quiz.svg"
                alt="landing-photo"
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col items-start py-3 justify-center gap-y-4">
            <span className="font-hotTopicsFont leading-relaxed tracking-wide">
              The quiz has been carefully designed to cover a range of topics,
              including budgeting, saving, investing, and managing debt. Whether
              you are new to the world of personal finance or a seasoned pro,
              our quiz is an excellent tool to assess your financial knowledge
              and identify areas for improvement.Our goal is to help you improve
              your financial literacy and make informed decisions about your
              money. By taking the quiz, you can gain valuable insights into
              your financial skills and learn more about the areas where you
              need to focus your attention.
            </span>
            <div className="flex pb-5">
              <span className="py-3 px-5 bg-green font-hotTopicsFont text-white tracking-wide rounded-md cursor-pointer">
                Take a Quiz
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
