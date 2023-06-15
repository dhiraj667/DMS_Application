import React, { Component, useEffect, useState } from "react";
import SideBar from "../../common/sideBar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../store/store";

const AddDoc = () => {
  const [documentType, setDocumentType] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getDepartments = useBoundStore((state) => state.getDepartments);
  const departments = useBoundStore((state) => state.departments);
  const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);
  const getDocTypeField = useBoundStore((state) => state.getByDocTypeAndDept);
  const fieldsArray = useBoundStore((state) => state.docTypeAndDept);
  const saveDocument = useBoundStore((state) => state.saveDocument);

  const onSubmitHandlerDoctype = (data) => {
    console.log("hii");
    console.log(data);
    setDocumentType(data);
    getDocTypeField(data);
  };

  const onSubmitHandlerIndexedDoc = (data) => {
    data = { ...data, ...documentType };
    console.log(data);
    saveDocument(data);
  };

  console.log(fieldsArray);

  useEffect(() => {
    getDepartments();
    getDocTypes();
  }, [fieldsArray.length]);

  return (
    <>
      <div className="flex w-full h-[33.5rem] bg-gray-100">
        <SideBar />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%]">
          <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Add Documents
                </h1>
                <div className="mt-2">
                  <span className="text-sm font-bold text-gray-400">
                    Add documents below to get your docs indexed and maintained
                    properly.
                  </span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandlerDoctype)}>
              <div className="py-3 sm:px-6 lg:px-3 mt-3 mx-2 bg-white shadow rounded overflow-auto flex">
                <div className="relative">
                  <select
                    {...register("departmentName")}
                    class="bg-gray-50 border mt-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-[320px] p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white p-2"
                    name="departmentName"
                    //   {...register("departments")}
                  >
                    <option value="" hidden>
                      Select Department...
                    </option>
                    {departments.map((dept) => (
                      <option key={dept._id} value={dept.departmentName}>
                        {dept.departmentName}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500 m-1">
                    {errors.departmentName?.message}
                  </p>
                </div>
                <div className="relative">
                  <select
                    className="bg-gray-50 border mt-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-[320px] ml-3 p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400  p-2"
                    name="doctype"
                    {...register("doctype")}
                    required
                  >
                    <option value="" hidden>
                      Select Document Type&hellip;
                    </option>
                    {docTypes.map((d) => (
                      <option key={d._id} value={d.docType}>
                        {d.docType}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500 m-1">{errors.doctype?.message}</p>
                </div>
                <button
                  type="submit"
                  className="inline-flex px-5 py-2 font-bold uppercase text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-16 mt-1 mb-3"
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
                  Add Document
                </button>
              </div>
            </form>

            <form
              enctype="multipart/form-data"
              onSubmit={handleSubmit(onSubmitHandlerIndexedDoc)}
              method="post"
              action="/documents"
            >
              <div className="flex justify-around h-[50vh] ">
                <div className="w-1/2 text-center bg-white rounded border shadow m-2 overflow-scroll">
                  <div
                    id="main"
                    className="grid grid-cols-2 gap-1 justify-evenly m-5"
                  >
                    {fieldsArray.map((d) => (
                      <div key={d._id} className=" w-23 h-12 my-4 mx-3">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">
                          {d.field.fieldName.label}
                        </label>
                        <input
                          {...register(d.field.fieldName.name)}
                          type={d.field.fieldName.input}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder={`Enter ${d.field.fieldName.name}`}
                          required
                        />
                        <p className="text-red-500 m-1"></p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/2 text-center bg-white rounded border shadow m-2">
                  <div className="flex w-full  items-center justify-center ">
                    <label className="w-full h-[43vh] flex flex-col items-center px-4 py-6 bg-gray-100 m-3 border-dashed border-5 border-gray-500  text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                      <div className="mt-20">
                        <svg
                          className="w-8 h-8 m-auto"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base text-blue-500 font-bold">
                          Select a file
                        </span>
                        <input
                          type="file"
                          id="file"
                          accept=".jpg,.png,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          {...register}
                          class="hidden"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <div
                  class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 rounded mx-1"
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoc;
