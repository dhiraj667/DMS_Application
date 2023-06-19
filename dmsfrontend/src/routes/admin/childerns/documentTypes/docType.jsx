import React, { useEffect, useState } from "react";
import SideBar from "../../../../common/sideBar";
import Table from "../../../../common/table/table";
import DocumentTypeForm from "./docTypeForm";
import { useBoundStore } from "../../../../store/store";
import { Link } from "react-router-dom";
import Pagination from "../../../../common/pagination";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DOCTYPE = () => {
  //checkBoxSearch
  const [clickItem,setClickItem]=useState("");
  //searching
  const [searchTerm, setSearchTerm] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  const columns = [
    { path: "docTypeCode", header: "Document Type Code" },
    { path: "docType", header: "Document Type" },
    { path: "departmentName", header: "Department Name" },
    { key: "Action" },
  ];

  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);
  const docTypes = useBoundStore((state) => state.docTypes);
  const getDepartments = useBoundStore((state) => state.getDepartments);

  let departments = useBoundStore((state) => state.departments);
  departments=[{_id:"01",departmentName:"All"},...departments]

  const deleteDocType = useBoundStore((state) => state.deleteDocType);
  const [open, setOpen] = useState(false);
  //searching
  const newDocType = docTypes.filter((val) => {
    console.log(val);
    if (searchTerm == "" || searchTerm.toLowerCase() === "") {
      return val;
    } else if (val.docType.includes(searchTerm)) {
      return val;
    } else if (val.docTypeCode.includes(searchTerm)) {
      return val;
    } else if (val.department.departmentName.includes(searchTerm)) {
      return val;
    } else if (val.docType.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    } else if (
      val.docTypeCode.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else if (
      val.department.departmentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });
  const onCheckBoxSelect = docTypes.filter((val)=>{
    if(clickItem=="" || clickItem=="All"){
      return val;
    }else if(val.department.departmentName.includes(clickItem)){
      return val
    }
  })
  //pagination
  let docType;
  if(searchTerm){
    docType = newDocType.slice(firstDataIndex, lastDataIndex);
  }else if(clickItem){
    docType = onCheckBoxSelect.slice(firstDataIndex,lastDataIndex);
  }else{
    docType = docTypes.slice(firstDataIndex,lastDataIndex);
  }

  const handleOpen = () => setOpen(!open);

  const handleDelete = (id) => {
    console.log(`Deleted ${id}`);
    deleteDocType(id).then((res)=>{
      toast.success("Doctype Deleted")
    }).catch((err)=>{
      toast.error("Something Wrong!!!")
    });;
  };

  const handleUpdate = (data) => {
    console.log(`Update ${data._id}`);
    setId(data._id);

    handleOpen();
  };
  //checkboxSearch
  const onSelectItem = (name) => {
    setClickItem(name);
  };

  console.log(departments);

  useEffect(() => {
    getDocTypes()
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
    getDepartments();
  }, []);

  return (
    <>
    <ToastContainer />
      <DocumentTypeForm handleOpen={handleOpen} open={open} id={id} />
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar items={departments} onSelectItem={onSelectItem} />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Document Types
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
                <Link to={"/doctypes"}>
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
            <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto h-[66vh]">
              <div className="flex items-center mr-4">
                <span className="relative left-6">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder={`Search by Document Type Name,Document Type Code.....`}
                />
              </div>
              <Table
                urlName={"doctypes"}
                columns={columns}
                items={docType}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
                loading={loading}
              />
              <Pagination
                total={docTypes.length}
                pageSize={dataPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DOCTYPE;
