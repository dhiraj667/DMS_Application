import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const DocumentTypeForm = (props) => {
  const schema = yup.object().shape({
    departmentName: yup.string().min(5).max(50),
    docTypeName: yup.string().min(5).max(50),
    docTypeCode: yup.string().min(5).max(50),
  });
  const { handleOpen, open } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log(data);
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
                    Add Document
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmitHandler)}
                  >
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
                          {...register("departmentName")}
                        >
                          <option value="" hidden>
                            Select Department&hellip;
                          </option>
                          <option value="abcjhb">Item 1</option>
                          <option value="asdmn jas">Item 2</option>
                          <option value="asdbjhs">Item 3</option>
                        </select>
                        <p className="text-red-500 m-1">
                          {errors.departmentName?.message}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label
                        for="name"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Document Type Name
                      </label>
                      <input
                        type="text"
                        {...register("docTypeName")}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Document Name"
                      />
                      <p className="text-red-500 m-1">
                        {errors.docTypeName?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        for="name"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Document Code
                      </label>
                      <input
                        type="text"
                        {...register("docTypeCode")}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Document Code"
                      />
                      <p className="text-red-500 m-1">
                        {errors.docTypeCode?.message}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add Document
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
    </>
  );
};

export default DocumentTypeForm;
