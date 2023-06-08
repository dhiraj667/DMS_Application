import React, { useState } from "react";
import SideBar from "../../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";
import Table from "../../../../common/table/table";
import DocTypeFieldForm from "./docTypeFieldFrom";

const DOCTYPEFIELDS = () => {
  const columns = [
    { path: "fieldName", header: "Field Name" },
    { path: "docType", header: "Document Type" },
    { key: "Action" },
  ];

  const departments = [
    {
      _id: "21",
      fieldName: "First Name",
      docType: "Birth Certificate",
    },
    {
      _id: "22",
      fieldName: "Last Name",
      docType: "Birth Certificate",
    },
    {
      _id: "23",
      fieldName: "DOB",
      docType: "Birth Certificate",
    },
  ];

  const dept = [
    {
      _id: "11",
      docType: "Birth Certificate",
      departmentName: "Human Resource",
      docTypeCode: "BR100",
    },
    {
      _id: "12",
      docType: "Birth Certificate",
      departmentName: "Human Resource",
      docTypeCode: "BR100",
    },
    {
      _id: "13",
      docType: "E-BILL",
      departmentName: "Human Resource",
      docTypeCode: "BR100",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleUpdate = (id) => {
    console.log(`Update ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleted ${id}`);
  };

  const onSelectItem = (name) => {
    console.log(name);
  };

  return (
    <>
      <DocTypeFieldForm open={open} handleOpen={handleOpen}/>
      
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar items={dept} onSelectItem={onSelectItem} />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Document Type Fields
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
                  placeholder="Search by Document Type and by Fields....."
                />
              </div>
              <Table columns={columns} items={departments} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DOCTYPEFIELDS;
