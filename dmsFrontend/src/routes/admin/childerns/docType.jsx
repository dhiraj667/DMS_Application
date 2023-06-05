import React, { Component } from 'react';
import SideBar from '../../../common/sideBar';

const DOCTYPE = () => {
    return ( <>
    <div className="flex w-full h-[33.5rem]">
        <SideBar />
        <div className="w-[1235px]">
        <div className="flex">
            <div className="mt-8 ml-14">
              <h1 className=" text-2xl font-bold leading-tight text-black-900">
                DocType
              </h1>
              <p className="text-sm font-bold text-gray-400 mt-2">
                A doctype is a something that we can add in departments
              </p>
            </div>
            <button className=" flex items-center py-2 mt-6 ml-[25rem] uppercase font-bold rounded-md w-72 h-12 bg-blue-600 text-white focus:bg-blue-700 hover:bg-purple-700">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=" h-6 w-6 text-white ml-16 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add DocType
            </button>
          </div>
          <div className="py-3 sm:px-6 lg:px-8 m-5 bg-white drop-shadow-2xl rounded-2xl overflow-auto mt-10">
          <div class="flex items-center">
                <span className="relative left-6">
                  <i class="fa fa-search"></i>
                </span>
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[65rem] pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder="Search by Doctype name....."
                />
              </div>
              <div
                className={`py-3 px-4 mt-5 flex justify-around bg-blue-200 rounded-md ml-4 mr-4 shadow-lg shadow-blue-100/50`}
              >
                <div className={``}>
                  <span
                    className={` tracking-wide text-sm text-blue-700 font-semibold`}
                  >
                    Document Name
                  </span>
                </div>
                <div className={``}>
                  <span
                    className={` tracking-wide text-sm text-blue-700 font-semibold`}
                  >
                    Department Name
                  </span>
                </div>
                <div className={``}>
                  <span
                    className={` tracking-wide text-sm text-blue-700 font-semibold`}
                  >
                    Doctype Code
                  </span>
                </div>
                <div className={`px-2 `}>
                  <span
                    className={`tracking-wide text-sm text-blue-700 font-semibold`}
                  >
                    {" "}
                    Actions
                  </span>
                </div>
              </div>
              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md group">
                <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Doc One
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resources
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    12345 
                  </span>
                </div>
                <div className={`w-[45%] text-center mr-16`}>
                  <span
                    className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                  >
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md group">
                <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Doc Two
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resources
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    12345 
                  </span>
                </div>
                <div className={`w-[45%] text-center mr-16`}>
                  <span
                    className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                  >
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md group">
                <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Doc Three
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resources
                  </span>
                </div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    12345 
                  </span>
                </div>
                <div className={`w-[45%] text-center mr-16`}>
                  <span
                    className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                  >
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              </div>
        </div>
    </div>
    </> );
}
 
export default DOCTYPE;