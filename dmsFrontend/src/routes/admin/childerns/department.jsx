import React from "react";
import SideBar from "../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";

const Deparments = () => {
  return (
    <>
      <div class="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar />
        <div class="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div class="flex flex-col">
            <div class="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div class="mt-5 ml-2">
                <h1 class="text-2xl font-bold leading-tight text-black-900">
                  Departments
                </h1>
                <div className="mt-2">
                  <span className="text-sm font-bold text-gray-400">
                    A department is an operating unit that represents a category
                    <br />
                    or functional area of an organization.
                  </span>
                </div>
              </div>
              <div class="flex items-center py-2">
                <button className="inline-flex px-5 py-2 mt-2 font-bold uppercase text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New Department
                </button>
              </div>
            </div>
            <div class="py-3 sm:px-6 lg:px-3 m-3 bg-white drop-shadow-2xl rounded-2xl overflow-auto">
              <div class="flex items-center">
                <span className="relative left-6">
                  <i class="fa fa-search"></i>
                </span>
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder="Search by department name....."
                />
              </div>
              <div
                className={`py-3 px-4 mt-5 flex justify-around bg-blue-200 rounded-md ml-4 shadow-lg shadow-blue-100/50`}
              >
                <div className={``}>
                  <span
                    className={` tracking-wide text-sm text-blue-700 font-semibold`}
                  >
                    Departments Name
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

              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md ml-4 group">
                <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resource
                  </span>
                </div>
                <div className={`w-[45%] text-center `}>
                  <span
                    className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                  >
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md ml-4 group">
                <div className="w-1 group-hover:bg-blue-500 rounded-md "></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resource
                  </span>
                </div>
                <div className={`w-[45%] text-center `}>
                  <span
                    className={`tracking-wide ms-36 text-sm text-black-700 font-semibold`}
                  >
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md ml-4 group">
                <div className=" w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resource
                  </span>
                </div>
                <div className={`w-[45%] text-center `}>
                  <span
                    className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                  >
                    <Tooltip
                      className="py-0.5 px-3"
                      content={
                        <span className="bg-black text-white rounded-md">
                          Edit
                        </span>
                      }
                    >
                      {/* <Button className="bg-white"> */}
                      <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                      {/* </Button> */}
                    </Tooltip>

                    <i class="fa fa-trash ml-7 fa-lg" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="py-3 px-4 mt-3 flex hover:bg-gray-200 rounded-md ml-4 group">
                <div className=" w-1 group-hover:bg-blue-500 rounded-md"></div>
                <div className={`w-[45%] text-center`}>
                  <span
                    className={` tracking-wide text-sm text-black-700 font-semibold`}
                  >
                    Human Resource
                  </span>
                </div>
                <div className={`w-[45%] text-center `}>
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
      </div>
    </>
  );
};

export default Deparments;
