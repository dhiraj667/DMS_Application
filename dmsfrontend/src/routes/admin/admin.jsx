import React from "react";
// import logo from "../../assests/images/log0.jpg";

const Admin = () => {
  return (
    <>
      <div
        className="flex bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
        {/* side bar */}
        <aside className="flex flex-col">
          <a
            href="#"
            className="inline-flex items-center justify-center h-20 w-full bg-white"
          >
            <img
              src={
                "https://www.pngfind.com/pngs/b/229-2295347_document-png.png"
              }
              alt=""
              className="w-20"
            />
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800 ">
            <nav className="flex flex-col mx-4 my-6 space-y-4 invisible">
              <a
                href="#"
                className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2"
              >
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
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Folders
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center py-3 text-blue-600 bg-white rounded-lg px-2"
              >
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Dashboard
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Messages
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2"
              >
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Documents
                </span>
              </a>
            </nav>
            <div className="flex justify-end">
              <a className="inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-15 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Settings
                </span>
              </a>
            </div>
          </div>
        </aside>
        <div className="flex-grow text-gray-800">
          {/* navigation tabs */}
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
            <div class="hidden md:flex">
              <ul class="hidden md:flex">
                <li class="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
                  <a
                    href=""
                    class="transition duration-300 font-bold focus:outline-none"
                  >
                    DEPARMENTS
                  </a>
                </li>
                <li class="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
                  <a
                    href=""
                    class="transition duration-300 font-bold focus:outline-none "
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    USERS
                  </a>
                </li>
                <li class="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
                  <a
                    href=""
                    class="transition duration-300  font-bold focus:outline-none "
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    DOCTYPE
                  </a>
                </li>
                <li class="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
                  <a
                    href=""
                    class="transition duration-300 font-bold focus:outline-none "
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    FIELDS
                  </a>
                </li>
                <li class="text-md pr-4  p-2 bg-white hover:shadow rounded-md m-1 text-center pl-4">
                  <a
                    href=""
                    class="transition duration-300 font-bold focus:outline-none "
                    style={{ textUnderlineOffset: "8px" }}
                  >
                    DOCTYPEFIELDS
                  </a>
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
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="absolute top-20 bg-white border rounded-md p-2 w-56"
                // x-show="panel"
                style={{ display: "none" }}
              >
                <div className="p-2 hover:bg-blue-100 cursor-pointer">
                  Profile
                </div>
                <div className="p-2 hover:bg-blue-100 cursor-pointer">
                  Messages
                </div>
                <div className="p-2 hover:bg-blue-100 cursor-pointer">
                  To-Do's
                </div>
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
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">
                  view an overview of uploaded documents
                </h2>
              </div>
              {/* <div className="flex flex-wrap items-start justify-end -mb-3">
                <button className="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Manage dashboard
                </button>
                <button className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
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
                  Create new dashboard
                </button>
              </div> */}
            </div>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">62</span>
                  <span className="block text-gray-500">Indexed Document</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">6</span>
                  <span className="block text-gray-500">Active Indexers</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">9</span>
                  {/* <span className="inline-block text-xl text-gray-500 font-semibold">
                    (14%)
                  </span> */}
                  <span className="block text-gray-500">
                    {/* Underperforming students */}
                    General Users
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">83</span>
                  <span className="block text-gray-500">InActive Indexers</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
