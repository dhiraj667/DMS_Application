import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="flex items-center h-20 px-3 sm:px-10 bg-white">
        <div className="mr-8 cursor-pointer p-2 bg-white hover:shadow rounded-md">
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f97316"
          >
            <path
              d="M1.81781 9.60589L12 1.6864L22.1822 9.60589V22.0508C22.1822 22.6509 21.9438 23.2264 21.5195 23.6508C21.0951 24.0751 20.5196 24.3135 19.9195 24.3135H4.08052C3.48041 24.3135 2.90488 24.0751 2.48054 23.6508C2.0562 23.2264 1.81781 22.6509 1.81781 22.0508V9.60589Z"
              stroke="#656565"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M8.60593 24.3135V13H15.3941V24.3135"
              stroke="#656565"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
              <Link
                className="transition duration-300 font-bold focus:outline-none"
                to={"/deparments"}
              >
                DEPARMENTS
              </Link>
            </li>
            <li className="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
              <Link
                className="transition duration-300 font-bold focus:outline-none "
                style={{ textUnderlineOffset: "8px" }}
                to={"/users"}
              >
                USERS
              </Link>
            </li>
            <li className="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
              <Link
                className="transition duration-300  font-bold focus:outline-none "
                style={{ textUnderlineOffset: "8px" }}
                to={"/docType"}
              >
                DOCTYPE
              </Link>
            </li>
            <li className="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
              <Link
                className="transition duration-300 font-bold focus:outline-none "
                style={{ textUnderlineOffset: "8px" }}
                to={"/fields"}
              >
                FIELDS
              </Link>
            </li>
            <li className="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
              <Link
                className="transition duration-300 font-bold focus:outline-none "
                style={{ textUnderlineOffset: "8px" }}
                to={"/docTypeFields"}
              >
                DOCTYPEFIELDS
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-shrink-0 items-center ml-auto">
          <button className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span className="sr-only">ADMIN</span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold">Sadanand Fulari</span>
              <span className="text-sm text-gray-600">ADMIN</span>
            </div>
            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQE637KOOeM_Dg/profile-displayphoto-shrink_800_800/0/1669046380943?e=2147483647&v=beta&t=E6yZnlNrOJcVIMamXtfvIVUEUG2YAYDgNo3ImlSz6FA"
                alt="user profile photo"
                className="h-full w-full object-cover"
              />
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden sm:block h-6 w-6 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className="absolute top-20 bg-white border rounded-md p-2 w-56"
            // x-show="panel"
            style={{ display: "none" }}
          >
            <div className="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
            <div className="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
            <div className="p-2 hover:bg-blue-100 cursor-pointer">To-Do's</div>
          </div>
          <div className="border-l pl-3 ml-3 space-x-1">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Log out</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
