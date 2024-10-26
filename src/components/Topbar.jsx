import React from "react";
import Switcher from "./ui/Switcher";

const Topbar = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 top-0 sticky p-6 items-center z-50 dark:bg-zinc-900 dark:border-gray-700 bg-zinc-100">
      <div className="lg:col-span-2 flex gap-6">
        {/* search */}
        {/* <div className="relative w-2/5">
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="w-full rounded-full border-gray-200 py-2 px-3 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-zinc-800/45 dark:text-white"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div> */}
        <Switcher></Switcher>
      </div>

      <div className="justify-self-end">
        {/* title */}
        <h1 className="text-lg ml-2 font-bold dark:text-white">
          Watch<span className="text-red-600">Me</span>
        </h1>
      </div>
    </div>
  );
};

export default Topbar;
