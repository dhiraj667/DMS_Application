import React, { useEffect, useState } from "react";
import SideBar from "../../../../common/sideBar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Table from "../../../../common/table/table";
import DepartmentForm from "./departmentForm";
import { useBoundStore } from "../../../../store/store";
import { Link } from "react-router-dom";
import Pagination from "../../../../common/pagination";
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const notify = () => toast.error("Wow so easy!");
// <button onClick={notify}>toaster</button>
//     <ToastContainer />

const DEPARTMENTS = () => {
 //search
  const [searchTerm, setSearchTerm] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  //states
  const columns = [
    { path: "department Name", header: "Department Name" },
    { key: "Action" },
  ];
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(!open);
  //store calls
  const getDepartments = useBoundStore((state) => state.getDepartments);
  const departments = useBoundStore((state) => state.departments);
  const deleteDepartment = useBoundStore((state) => state.deleteDepartment);

  const newDepartments = departments.filter((val) => {
    if (searchTerm.trim() === "" || searchTerm.trim().toLowerCase() === "") {
      return val;
    } else if (val.departmentName.includes(searchTerm.trim())) {
      return val;
    } else if (
      val.departmentName.toLowerCase().includes(searchTerm.trim().toLowerCase())
    ) {
      return val;
    }
  });
  const department = newDepartments.slice(firstDataIndex, lastDataIndex);

  const handleDelete = (id) => {
    deleteDepartment(id).then((res)=>{
      toast.success("Department Deleted")
    }).catch((err)=>{
      toast.error("Something Wrong!!!")
    });
  };
  const handleUpdate = (data) => {
    setId(data._id);
    handleOpen();
  };

  useEffect(() => {
    getDepartments()
      .then((res) => {
        setLoading(false);
        console.log("success");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ToastContainer />
      <DepartmentForm handleOpen={handleOpen} open={open} id={id} />
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
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
              <div className="flex items-center py-2">
                <Link to={"/departments"}>
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
                  placeholder={`Search by department name.....`}
                />
              </div>

              <Table
                urlName={"departments"}
                columns={columns}
                items={department}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
                loading={loading}
              />
              <Pagination
                total={departments.length}
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

export default DEPARTMENTS;
