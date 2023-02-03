import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiBuymeacoffee } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const router = useRouter();
  const [toggleMobile, setToggleMobile] = useState(false);

  return (
    <>
      {/* nav start */}
      <nav className="w-full mx-auto h-16 fixed bg-nav-bg flex justify-between items-center py-5 select-none  top-0 z-50 shadow-sm">
        {/* logo left side */}
        <Link href="/">
          <div className="ml-6 md:ml-16 cursor-pointer">
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
            <span
              className={`py-2 cursor-pointer ${
                router.pathname == "/category" ? "text-green" : ""
              }`}
            >
              <Link href="/category">Category</Link>
            </span>
            <span
              className={`py-2 cursor-pointer ${
                router.pathname == "/about" ? "text-green" : ""
              }`}
            >
              <Link href="/about">About Me</Link>
            </span>
            <span className="flex items-center justify-center gap-x-1 ml-[-10px] px-3 py-2 cursor-pointer">
              <i className="">
                <IoSearchCircleSharp size={25} />
              </i>
              <span>Search</span>
            </span>
            <span className="bg-green flex items-center justify-center gap-x-3 px-3 py-2 text-white rounded-md cursor-pointer">
              <i>
                <SiBuymeacoffee />
              </i>
              <span className="font-navFont tracking-wide">Buy Me A Coffee</span>
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
            <div className="bg-nav-bg h-screen z-50 w-[70%] inset-y-0 fixed pb-3 pl-5 min-[937px]:hidden animate__animated animate__fadeInLeftBig">
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
                  className={`py-2 cursor-pointer ${
                    router.pathname == "/category" ? "text-green" : ""
                  }`}
                >
                  <Link href="/category">Category</Link>
                </span>
                <span
                  className={`py-2 cursor-pointer ${
                    router.pathname == "/about" ? "text-green" : ""
                  }`}
                >
                  <Link href="/about">About Me</Link>
                </span>
                <span className="flex items-center justify-center gap-x-1 ml-[-10px] py-3 cursor-pointer">
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
