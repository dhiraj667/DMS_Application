import React, { Component, useEffect, useState } from "react";
import SideBar from "../../common/sideBar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../store/store";
import AddDocumentForm from "./addDocumentForm";

const AddDoc = () => {
  const [documentType, setDocumentType] = useState();
  const [showForm, setShowForm] = useState(false);
  const [onSelectDepartment, setOnSelectDepartment] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const getDepartments = useBoundStore((state) => state.getDepartments);
  // const departments = useBoundStore((state) => state.departments);
  const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);
  const getDocTypeField = useBoundStore((state) => state.getByDocTypeAndDept);
  const fieldsArray = useBoundStore((state) => state.docTypeAndDept);

  const onSubmitHandlerDoctype = (data) => {
    console.log("hii");
    console.log(data);

    setDocumentType(data);
    getDocTypeField(data)
      .then((res) => {
        setShowForm(true);
      })
      .catch((err) => {});
    // reset();
  };

  let departmentWiseData = docTypes.filter((d) => {
    console.log(d.department.departmentName);
    if (onSelectDepartment === "") {
      return;
    } else {
      return d.department.departmentName == onSelectDepartment;
    }
  });

  console.log(fieldsArray);

  useEffect(() => {
    // getDepartments();
    getDocTypes();
  }, [fieldsArray.length]);

  if (!sessionStorage.getItem("loginData")) return;
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));

  const departments = [...loginData.user.departments];

  // console.log(filteredDepartments);

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
                    onChange={(e) => {
                      setOnSelectDepartment(e.target.value);
                    }}
                  >
                    <option value="" hidden>
                      Select Department...
                    </option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
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
                    {departmentWiseData.map((d) => (
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
            <AddDocumentForm
              fieldsArray={fieldsArray}
              documentType={documentType}
              resetForm={reset}
              setShowForm={setShowForm}
              showForm={showForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoc;
