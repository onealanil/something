import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiBuymeacoffee } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Search from "../Search";

const NavBar = () => {
  const router = useRouter();
  const [toggleMobile, setToggleMobile] = useState(false);
  const [categoryHover, setCategoryHover] = useState(false);
  const [categoryClick, setCategoryClick] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchBarMobile, setSearchBarMobile] = useState(false);

  const handleBoolValueChange = (newValue) => {
    setSearchBar(newValue);
  };

  const handleSearchFunctionMobile = (newValue) => {
    setSearchBarMobile(newValue);
  };

  return (
    <>
      {/* nav start */}
      <nav className="w-full mx-auto h-16 fixed bg-nav-bg flex justify-between items-center py-5 select-none  top-0 z-50 shadow-sm">
        {/* logo left side */}
        <Link href="/">
          <div className="ml-6 md:ml-16 xl:ml-24 cursor-pointer">
            <span className="font-navFont text-green font-bold text-xl md:text-2xl">
              Finance{" "}
            </span>
            <span className="font-navFont text-black text-sm">.blog</span>
          </div>
        </Link>
        {/* right side-- nav bar --for desktop start*/}
        <div className="max-[937px]:hidden min-[962px]:block md:mr-20">
          <div className="flex gap-x-7 font-navFont font-semibold">
            <span
              className={`py-2 cursor-pointer ${
                router.pathname == "/" ? "text-green" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </span>

            {/* category  */}
            <span
              className={`py-2 cursor-pointer flex items-center justify-center relative gap-x-2 `}
              onMouseEnter={() => {
                setCategoryHover(true);
              }}
              onMouseLeave={() => {
                setCategoryHover(false);
              }}
            >
              <Link
                href="/category"
                className={`${
                  router.pathname == "/category" ? "text-green" : ""
                }`}
              >
                Category
              </Link>
              <i>{categoryHover ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>

              {/* on hover effect  */}
              {categoryHover ? (
                <>
                  <div className="absolute top-10 w-64 gap-y-2 p-5 flex flex-col items-center bg-opacity-90 rounded-md justify-center bg-nav-bg">
                    <Link href="/allblog">
                      <span className="text-sm hover:text-green">All</span>
                    </Link>
                    <Link href="/category/microfinance">
                      <span className="text-sm hover:text-green">
                        Micro Finance
                      </span>
                    </Link>
                    <Link href="/category/retirementplan">
                      <span className="text-sm hover:text-green">
                        Retirement Plans
                      </span>
                    </Link>
                    <Link href="/category/ipo&sharemarket">
                      <span className="text-sm hover:text-green">
                        IPO & Share Market
                      </span>
                    </Link>
                    <Link href="/category/realestate">
                      <span className="text-sm hover:text-green">
                        Real Estate
                      </span>
                    </Link>
                    <Link href="/category/taxplanning">
                      <span className="text-sm hover:text-green">
                        Tax Planning
                      </span>
                    </Link>
                    <Link href="/category/cryptocurrency">
                      <span className="text-sm hover:text-green">
                        Cryptocurrency
                      </span>
                    </Link>
                    <Link href="/category/investing101">
                      <span className="text-sm hover:text-green">
                        Investing 101
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                ""
              )}
            </span>

            <span
              className={`py-2 cursor-pointer ${
                router.pathname == "/about" ? "text-green" : ""
              }`}
            >
              <Link href="/about">About Me</Link>
            </span>

            {/* searchBar */}
            <span
              className="flex items-center justify-center gap-x-1 ml-[-10px] px-3 py-2 cursor-pointer"
              onClick={() => {
                setSearchBar(true);
              }}
            >
              <i className="">
                <IoSearchCircleSharp size={25} />
              </i>
              <span>Search</span>
            </span>

            {searchBar ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <Search props={handleBoolValueChange} />
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : (
              ""
            )}

            <span className="bg-green flex items-center justify-center gap-x-3 px-3 py-2 text-white rounded-md cursor-pointer">
              <i>
                <SiBuymeacoffee />
              </i>
              <span className="font-navFont tracking-wide">
                Buy Me A Coffee
              </span>
            </span>
          </div>
        </div>
        {/* nav bar for desktop end  */}
        {/* nav bar for --mobile device start */}
        <div
          className="min-[937px]:hidden"
          onClick={(e) => {
            e.preventDefault();
            setToggleMobile((prev) => !prev);
          }}
        >
          {toggleMobile ? (
            <AiOutlineClose
              size={30}
              className="mr-2 mt-1 dark:text-whiteE-0 animate-flip"
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mr-2 mt-1 dark:text-whiteE-0 animate-flip"
            />
          )}
        </div>
        {toggleMobile ? (
          <>
            <div
              className={`bg-nav-bg h-screen z-50 ${
                searchBarMobile ? "w-[100%]" : "w-[70%]"
              } inset-y-0 fixed pb-3 pl-5 min-[937px]:hidden animate__animated animate__fadeInLeftBig`}
            >
              <Link href="/">
                <div className="ml-6 my-5 cursor-pointer">
                  <span className="font-navFont text-green font-bold text-xl">
                    Finance{" "}
                  </span>
                  <span className="font-navFont text-black text-sm">.blog</span>
                </div>
              </Link>

              <div className="flex flex-col items-center justify-center gap-y-7 font-navFont font-semibold">
                <span
                  className={`py-2 cursor-pointer ${
                    router.pathname == "/" ? "text-green" : ""
                  }`}
                >
                  <Link href="/">Home</Link>
                </span>

                <span
                  className={`${
                    categoryClick ? "py-0" : "py-2"
                  } cursor-pointer flex items-center justify-center gap-x-2 ${
                    router.pathname == "/category" ? "text-green" : ""
                  }`}
                >
                  <Link href="/category">Category</Link>
                  <i
                    onClick={(e) => {
                      e.preventDefault();
                      setCategoryClick((prev) => !prev);
                    }}
                  >
                    <i>
                      {categoryClick ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </i>
                  </i>
                </span>

                {/* for search div  */}
                {searchBarMobile ? (
                  <>
                    <div className="inset-0 z-50 w-[90%] flex items-center justify-center mr-4">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <Search props={handleSearchFunctionMobile} />
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : (
                  ""
                )}

                {/* on hover effect  */}
                {categoryClick ? (
                  <>
                    <div className="gap-y-3 flex flex-col items-center bg-opacity-90 rounded-md justify-center bg-nav-bg">
                      <Link href="/allblog">
                        <span className="text-sm hover:text-green">All</span>
                      </Link>
                      <Link href="/category/microfinance">
                        <span className="text-sm hover:text-green">
                          Micro Finance
                        </span>
                      </Link>
                      <Link href="/category/retirementplan">
                        <span className="text-sm hover:text-green">
                          Retirement Plans
                        </span>
                      </Link>
                      <Link href="/category/ipo&sharemarket">
                        <span className="text-sm hover:text-green">
                          IPO & Share Market
                        </span>
                      </Link>
                      <Link href="/category/realestate">
                        <span className="text-sm hover:text-green">
                          Real Estate
                        </span>
                      </Link>
                      <Link href="/category/taxplanning">
                        <span className="text-sm hover:text-green">
                          Tax Planning
                        </span>
                      </Link>
                      <Link href="/category/cryptocurrency">
                        <span className="text-sm hover:text-green">
                          Cryptocurrency
                        </span>
                      </Link>
                      <Link href="/category/cryptocurrency">
                        <span className="text-sm hover:text-green">
                          Investing 101
                        </span>
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <span
                  className={`py-2 cursor-pointer ${
                    router.pathname == "/about" ? "text-green" : ""
                  }`}
                >
                  <Link href="/about">About Me</Link>
                </span>

                <span
                  className="flex items-center justify-center gap-x-1 ml-[-10px] py-3 cursor-pointer"
                  onClick={() => {
                    setSearchBarMobile(true);
                  }}
                >
                  <i className="">
                    <IoSearchCircleSharp size={25} />
                  </i>
                  <span>Search</span>
                </span>

                <span className="bg-green flex items-center justify-center gap-x-3 px-3 py-2 text-white rounded-md cursor-pointer">
                  <i>
                    <SiBuymeacoffee />
                  </i>
                  <span>Buy Me A Coffee</span>
                </span>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* nav bar for --mobile device end  */}
      </nav>
    </>
  );
};

export default NavBar;
