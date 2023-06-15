import React, { Component, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../../assests/images/img6.png";
import { useBoundStore } from "../../store/store";
import Multiselect from "multiselect-react-dropdown";

const RegisterForm = () => {

  const getDepartments = useBoundStore((state) => state.getDepartments);
  const departments = useBoundStore((state) => state.departments);
  let deptArr = departments.map((dept)=>{
          let i = dept.departmentName;
          return i;
  })
  console.log(deptArr);
  useEffect(() => {
    getDepartments();
  }, []);
  return (
    <>
      <div className="  h-screen w-full mx-3">
        <div className="pt-2"></div>
        <div className="w-10/12 m-auto shadow-lg shadow-blue-100/50 bg-blue-200 px-5 rounded-md">
          <div className="">
            <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
              <div className="bg-repeat  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 rounded-lg">
                <img src={bgImage} className="w-full rounded-lg" alt="" />
              </div>

              <div className="my-2 md:mb-0 md:w-1/2 lg:w-1/2 xl:w-1/2  ">
                <form className="bg-white shadow-md rounded-lg w-full pt-3 pb-4 mb-4">
                  <div className=" w-full mb-3  ">
                    <img
                      src={
                        "https://www.pngfind.com/pngs/b/229-2295347_document-png.png"
                      }
                      className=" w-[14%]  my-3 mx-auto"
                      alt=""
                    />
                    <div className="font-lg text-xl font-black text-center text-orange-500">
                      <h1 className="">Please Sign Up !</h1>
                    </div>
                  </div>

                  <div className="w-3/4 m-auto">
                    <div className="flex">
                      <div className="mb-2 mr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          First Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Last Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="LastName"
                        />
                        {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 m-auto">
                    <div className="mb-2 ">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone No
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Phone No"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Id
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Email Id"
                      />
                      {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p> */}
                    </div>
                    <div className="mb-2">
                      <Multiselect
                        // class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white p-2"
                        // name="departmentId"
                        // {...register("departmentId")}
                        // required

                        // {departments.map((dept) => (
                          isObject={false}
                          options= {deptArr}
                          onRemove={(event)=>console.log(event)}
                          onSelect={(event)=>console.log(event)}
                          showCheckbox
                        // ))}
                      />
                      {/* <p className="text-red-500 m-1">
                        {errors.departmentId?.message}
                      </p> */}
                    </div>
                  </div>
                  <div className="w-3/4 m-auto flex">
                    <div className="mb-2 mr-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        UserName
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                      {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p> */}
                    </div>
                  </div>
                  <div className="text-center lg:text-centre justify-items-start">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border  lg w-3/4">
                      Create Account
                    </button>
                  </div>
                  <div className="my-2 text-center">
                    <span className="font-bold  mt-2  text-center">
                      {" "}
                      <Link
                        to="/login"
                        style={{ cursor: "pointer" }}
                        className=" text-blue-500 hover:text-blue-800 text-l"
                      >
                        Login
                      </Link>
                    </span>
                  </div>
                </form>
                <p className="text-center text-gray-500 text-xs mt-2">
                  &copy;2023 VAST Corp. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
