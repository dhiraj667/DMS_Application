import React, { useEffect, useState } from "react";
import SideBar from "../../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";
import Table from "../../../../common/table/table";
import DocTypeFieldForm from "./docTypeFieldFrom";
import { useBoundStore } from "../../../../store/store";
import { Link } from "react-router-dom";
import Pagination from "../../../../common/pagination";
const DOCTYPEFIELDS = () => {
  //searching
  const [searchTerm,setSearchTerm] =useState("");
  //pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [dataPerPage,setDataPerPage] = useState(2);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  
  const [loading, setLoading] = useState(true);
  const columns = [
    { path: "fieldName", header: "Field Name" },
    { path: "docType", header: "Document Type" },
    { key: "Action" },
  ];

  const getDocTypeFields = useBoundStore((state) => state.getDocTypeFields);
  const docTypeFields = useBoundStore((state) => state.docTypeFields);
  const deleteDocTypeFields = useBoundStore(
    (state) => state.deleteDocTypeField
  );
  const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);

  const newDocTypefields = docTypeFields.map((d) => ({
    _id: d._id,
    fieldName: d.field.fieldName.name,
    docType: d.doctype.docType,
  }));

  const newDocTypeFieldsF=newDocTypefields.filter((val)=>{
    if (searchTerm =="") {
      return val
    }else if((val.fieldName).includes(searchTerm)){
      return val
    } else if((val.docType).includes(searchTerm)){
      return val
    }
    
  })

  const docTypeField = newDocTypeFieldsF.slice(firstDataIndex,lastDataIndex);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleUpdate = (id) => {
    console.log(`Update ${id}`);
    handleOpen();
  };

  const handleDelete = (id) => {
    console.log(`Deleted ${id}`);
    deleteDocTypeFields(id);
  };

  const onSelectItem = (name) => {
    console.log(name);
  };

  useEffect(() => {
    getDocTypeFields()
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
    getDocTypes();
  }, []);
  return (
    <>
      <DocTypeFieldForm open={open} handleOpen={handleOpen} />

      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar items={docTypes} onSelectItem={onSelectItem} />
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
                <Link to={"/doctypefields"}>
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
                  placeholder="Search by Document Type and by Fields....."
                />
              </div>
              <Table
                urlName={"doctypefields"}
                columns={columns}
                items={docTypeField}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
                loading={loading}
              />
              <Pagination total={newDocTypefields.length} pageSize={dataPerPage} setCurrentPage={setCurrentPage}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DOCTYPEFIELDS;
