import React, { useState } from "react";
import SideBar from "../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";
import Table from "../../../common/table/table";

const USERS = () => {
  const columns = [
    { path: "userName", header: "User Name" },
    { path: "department Name", header: "Department Name" },
    { key: "Action" },
  ];

  const departments = [
    { _id: "41", userName: "Sada", departmentName: "Human Resource" },
    { _id: "41", userName: "Suraj", departmentName: "Developers" },
    { _id: "41", userName: "Surya", departmentName: "Account" },
  ];

  const dept = [
    { _id: "0", departmentName: "All" },
    { _id: "1", departmentName: "Human Resource" },
    { _id: "2", departmentName: "Developers" },
    { _id: "3", departmentName: "Account" },
  ];

  const handleUpdate = (id) => {
    console.log(`Update ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleted ${id}`);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const onSelectItem = (name) => {
    console.log(name);
  };

  return (
    <>
      {open ? (
        <>
          <div className="bg-black bg-opacity-50 flex absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-40">
            <div className="rounded min-w-[400px] min-h-[225px] bg-white">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={handleOpen}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white ">
                    Add User
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        for="department"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Select Department
                      </label>

                      <div className="relative">
                        <select
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white p-2"
                          name="department"
                          required
                        >
                          <option value="" hidden>
                            Select Department&hellip;
                          </option>
                          <option value="1">Item 1</option>
                          <option value="2">Item 2</option>
                          <option value="3">Item 3</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        for="name"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter User Name"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar items={dept} onSelectItem={onSelectItem} />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Users
                </h1>
                <div className="mt-2">
                  <span className="text-sm font-bold text-gray-400">
                    A department is an operating unit that represents a category
                    <br />
                    or functional area of an organization.
                  </span>
                </div>
              </div>
              <div className="flex items-center py-2">
                <button
                  className="inline-flex px-5 py-2 mt-2 font-bold uppercase text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3"
                  onClick={handleOpen}
                >
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
                  Create New
                </button>
              </div>
            </div>
            <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto">
              <div className="flex items-center mr-4">
                <span className="relative left-6">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder={`Search by User Name.....`}
                />
              </div>
              <Table
                columns={columns}
                items={departments}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default USERS;
