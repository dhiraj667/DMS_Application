import React, { useEffect, useState } from "react";
import SideBar from "../../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";
import Table from "../../../../common/table/table";
import FieldForm from "./fieldForm";
import { useBoundStore } from "../../../../store/store";
import { Link } from "react-router-dom";
import Pagination from "../../../../common/pagination";

const FIELD = () => {
  //searching
  const [searchTerm,setSearchTerm] = useState("")
  //pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [dataPerPage,setDataPerPage] = useState(4);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(!open);

  const columns = [
    { path: "fieldName", header: "Field Name" },
    { key: "Action" },
  ];

  const getFields = useBoundStore((state) => state.getFields);
  const fields = useBoundStore((state) => state.fields);
  const deleteField = useBoundStore((state) => state.deleteField);

  const handleUpdate = (data) => {
    console.log();
    handleOpen();
  };

  const handleDelete = (id) => {
    deleteField(id);
  };

  const newFields = fields.map((field) => ({
    _id: field._id,
    name: field.fieldName.name,
  }));

  const newFieldsF=newFields.filter((val)=>{
    if (searchTerm =="" || searchTerm.toLowerCase()==="") {
      return val
    }else if(val.name.includes(searchTerm)){
      return val
    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }
  })

  const field = newFieldsF.slice(firstDataIndex,lastDataIndex)

  useEffect(() => {
    getFields()
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FieldForm open={open} handleOpen={handleOpen} />
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Fields
                </h1>
                <div className="mt-2">
                  <span className="text-sm font-bold text-gray-400">
                    A Field is an entity that indicates some information.
                    <br />
                    or functional area of an organization.
                  </span>
                </div>
              </div>
              <div className="flex items-center py-2">
                <Link to={"/fields"}>
                  <button
                    onClick={handleOpen}
                    className="inline-flex px-5 py-2 mt-2 font-bold uppercase text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3"
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
                </Link>
              </div>
            </div>
            <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto">
              <div className="flex items-center mr-4">
                <span className="relative left-6">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  onChange={(event)=>{
                    setSearchTerm(event.target.value)
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder={`Search by Field Name.....`}
                />
              </div>
              <Table
                urlName={"fields"}
                columns={columns}
                items={field}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
                loading={loading}
              />
              <Pagination total={newFields.length} pageSize={dataPerPage} setCurrentPage={setCurrentPage}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FIELD;
