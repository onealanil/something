import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ props }) => {
  return (
    <>
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col  md:w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
          {/* search button */}
          <div>
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block md:w-96 pl-10 p-2.5"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-green rounded-lg focus:ring-4"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>

          <i className="p-1 ml-auto float-right" onClick={() => props(false)}>
            <AiOutlineClose
              size={30}
              className="text-red-900 block cursor-pointer"
            />
          </i>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto break-words">
          <span className="text-green">Results:</span>
          
        </div>
      </div>
    </>
  );
};

export default Search;
