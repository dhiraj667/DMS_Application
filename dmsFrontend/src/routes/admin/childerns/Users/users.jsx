import React, { useState, useEffect } from "react";
import SideBar from "../../../../common/sideBar";
import { Tooltip, Button } from "@material-tailwind/react";
import Table from "../../../../common/table/table";
import USERFORM from "./usersForm";
import { useBoundStore } from "../../../../store/store";
import { Link } from "react-router-dom";
import Pagination from "../../../../common/pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const USERS = () => {
  //DeptSearchSideBar
  const [clickItem, setClickItem] = useState("");
  //searching
  const [searchTerm, setSearchTerm] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;

  //othercode
  const [open, setOpen] = useState(false);
  const columns = [
    { path: "userName", header: "User Name" },
    { path: "department Name", header: "Department Name" },
    { key: "Action" },
  ];

  const [loading, setLoading] = useState(true);
  const a = sessionStorage.getItem("loginData");
  console.log(a);
  const getUsers = useBoundStore((state) => state.getUsers);
  const users = useBoundStore((state) => state.users);
  const deleteUser = useBoundStore((state) => state.deleteUser);
  const getDepartments = useBoundStore((state) => state.getDepartments);
  let departments = useBoundStore((state) => state.departments);
   departments=[{_id:"01",departmentName:"All"},...departments]

  const filteredUsers = users.filter((user) => user.role !== "Admin");

  const newUsers = filteredUsers.map((user) => ({
    _id: user._id,
    userName: user.userName,
    departmentName: `[${user.departments}]`,
    isActive: user.isActive,
  }));

  const newUseronSearch = newUsers.filter((val) => {
    if (searchTerm == "" || searchTerm.toLowerCase() === "") {
      return val;
    } else if (val.userName.includes(searchTerm)) {
      return val;
    } else if (val.userName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  const onCheckBoxSelect = newUsers.filter((val) => {
    if (clickItem == "" || clickItem=="All") {
      return val;
    }
    else if (val.departmentName.includes(clickItem)) {
      return val;
    }
  });

  let user;
  if (searchTerm) {
    user = newUseronSearch.slice(firstDataIndex, lastDataIndex);
  } else if (clickItem) {
    user = onCheckBoxSelect.slice(firstDataIndex, lastDataIndex);
  } else {
    user = newUsers.slice(firstDataIndex, lastDataIndex);
  }

  useEffect(() => {
    getUsers()
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
    getDepartments();
  }, []);

  

  const handleUpdate = (data) => {
    console.log(`Update ${data}`);
    handleOpen();
  };

  const handleDelete = (id) => {
    const user = users.filter((u) => u._id === id);
    deleteUser(user[0])
      .then((res) => {
        toast.success("User Deleted");
      })
      .catch((err) => {
        toast.error("Something Wrong!!!");
      });
  };

  const handleOpen = () => setOpen(!open);

  const onSelectItem = (name) => {
    setClickItem(name);
  };

  return (
    <>
      <ToastContainer />
      <USERFORM open={open} handleOpen={handleOpen} />
      <div className="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar items={departments} onSelectItem={onSelectItem} />
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
                <Link to={"/users"}>
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
                  placeholder={`Search by User Name.....`}
                />
              </div>
              <Table
                urlName={"users"}
                columns={columns}
                items={user}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
                loading={loading}
              />
              <Pagination
                total={newUsers.length}
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

export default USERS;
