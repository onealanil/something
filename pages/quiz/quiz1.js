import React, { useState } from "react";
import Morearticle from "../../components/Morearticle";
import { question } from "../../components/quiz/question";
import Image from "next/legacy/image";
import { AiOutlineDoubleRight, AiOutlineRedo } from "react-icons/ai";

const quiz1 = () => {
  const [currentquestion, setCurrentquestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //next quiz
  const nextQuizHandler = (e) => {
    e.preventDefault();

    if (selectedAnswer === question[currentquestion].correct) {
      setScore(score + 1);
    }
    if (question.length - 1 === currentquestion) {
      setShowScore(true);
    } else {
      if (selectedAnswer) {
        setCurrentquestion(currentquestion + 1);
      }
    }
  };

  // checking answer
  const checkingAnswerHandler = (answer) => {
    setSelectedAnswer(answer);
  };

  //show answer
  const showAnswerHandler = () => {
    setShowAnswer((showAnswer) => !showAnswer);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-16">
        <div className="flex w-[90%] xl:w-[85%] 2xl:w-[70%] gap-x-4">
          {/* left side  */}
          <div className="md:w-[80%] py-5 mt-3">
            <div className="flex flex-col gap-y-2">
              <span className="font-sideFont text-green text-[1rem] md:text-[1.5rem] font-bold leading-relaxed tracking-wide scroll-smooth">
                Do You Know Enough About Money? Take Our Financial Quiz{" "}
              </span>
              <span className="font-frontTextFont leading-normal tracking-wide py-3">
                How much do you really know about money? Take our financial quiz
                and find out! This quiz is designed to challenge your
                understanding of personal finance and help you gauge your level
                of financial literacy. From basic budgeting and investing
                concepts to more complex financial topics, this quiz will put
                your knowledge to the test. So if you &lsquo;re ready to see how
                you stack up in terms of financial smarts, take our quiz and see
                if you have what it takes to become a financial pro
              </span>

              <div className="flex gap-x-4 items-center justify-start pb-4">
                <span className="font-hotTopicsFont font-bold ">
                  Are you ready? Let’s go!
                </span>
              </div>

              {/* quiz started  */}
              {showScore ? (
                <>
                  <div>
                    <div className="flex items-center justify-center flex-col gap-y-4">
                      {score > 2 ? (
                        <>
                          <div className="w-[100%] h-96 md:h-[33rem] relative my-2">
                            <Image
                              src="/images/highMarks.jpg"
                              alt="landing-photo"
                              layout="fill"
                              objectFit="cover"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full h-24 bg-opacity-70 bg-black items-center justify-center flex">
                              <div className="flex items-start gap-y-2 justify-center flex-col ml-6">
                                <span className="font-frontTitleFont text-[1.75rem] font-bold leading-relaxed tracking-wide text-white">
                                  &ldquo;{" "}
                                  <span className="text-green">Bravo!</span>{" "}
                                  Look like you get some financial guidance
                                  &ldquo;
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[100%] h-96 md:h-[33rem] relative my-2">
                            <Image
                              src="/images/lowMarks.jpg"
                              alt="landing-photo"
                              layout="fill"
                              objectFit="cover"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full h-24 bg-opacity-70 bg-black items-center justify-center flex">
                              <div className="flex items-start gap-y-2 justify-center flex-col ml-6">
                                <span className="font-frontTitleFont text-[1.75rem] font-bold leading-relaxed tracking-wide text-white">
                                  &ldquo;{" "}
                                  <span className="text-red-500">Opps!</span>{" "}
                                  Look like you need more financial guidance
                                  &ldquo;
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="flex items-center justify-center">
                        <span className="font-hotTopicsFont text-[1.75rem] font-black flex gap-x-2">
                          Correct Answers:
                          <span
                            className={`${
                              score > 2 ? "text-green" : "text-red-400"
                            }`}
                          >
                            {score}
                          </span>
                          <span>/{question.length}</span>
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setShowScore(false);
                          setCurrentquestion(0);
                          setScore(0);
                          setSelectedAnswer(null);
                        }}
                        className="px-4 py-2 bg-green rounded-md text-white font-hotTopicsFont flex items-center justify-center gap-x-2"
                      >
                        Retake quiz
                        <AiOutlineRedo size={25} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[100%] h-96 md:h-[33rem] relative my-2">
                    <Image
                      src={question[currentquestion].src}
                      alt="landing-photo"
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 p-5 h-24 bg-opacity-70 bg-black items-center justify-start flex">
                      <div className="flex items-start gap-y-2 justify-center flex-col ml-6">
                        <span className="font-frontTitleFont text-[1.75rem] font-bold leading-relaxed tracking-wide text-white">
                          <span className="text-green">
                            {currentquestion + 1}
                          </span>
                          /{question.length}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-hotTopicsFont font-black">
                      {question[currentquestion].question}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3 py-3 font-hotTopicsFont">
                    {!showAnswer &&
                      question[currentquestion].choices.map((item, index) => {
                        return (
                          <>
                            <div
                              className={`px-4 border-2 rounded-md border-gray-500 py-2 cursor-pointer
                            ${
                              selectedAnswer === item &&
                              item === question[currentquestion].correct
                                ? "bg-green"
                                : ""
                            }
                            ${
                              selectedAnswer === item &&
                              item !== question[currentquestion].correct
                                ? "bg-red-600"
                                : ""
                            }
                            `}
                              key={index}
                              onClick={() => checkingAnswerHandler(item)}
                            >
                              <span>{item}</span>
                            </div>
                          </>
                        );
                      })}
                    {showAnswer &&
                      question[currentquestion].choices.map((item, index) => {
                        return (
                          <>
                            <div
                              className={`px-4 border-2 rounded-md border-gray-500 py-2
                            ${
                              item === question[currentquestion].correct
                                ? "bg-green"
                                : ""
                            }
                            `}
                              key={index}
                            >
                              <span>{item}</span>
                            </div>
                          </>
                        );
                      })}
                  </div>
                  <div className="flex items-center justify-center gap-x-8">
                    <button
                      onClick={showAnswerHandler}
                      className="py-2 px-4 border-2 font-hotTopicsFont border-gray-500 rounded-md"
                    >
                      {showAnswer ? "Hide answer" : "Show answer"}
                    </button>
                    {showAnswer ? (
                      ""
                    ) : (
                      <>
                        <button
                          className="bg-green py-2 px-4 flex items-center gap-x-2 rounded-md"
                          onClick={nextQuizHandler}
                        >
                          <span className="text-white font-hotTopicsFont">
                            next
                          </span>
                          <AiOutlineDoubleRight
                            size={25}
                            color="white"
                            className="mt-1"
                          />
                        </button>
                      </>
                    )}
                  </div>

                  {/* quiz ended  */}
                </>
              )}
            </div>
          </div>
          {/* left side end  */}
          {/* right side --hidden in mobile devices*/}
          <div className="hidden md:flex w-[20%] py-5 mt-3 px-4 pl-3 flex-col gap-y-3">
            <Morearticle />
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

export default quiz1;
