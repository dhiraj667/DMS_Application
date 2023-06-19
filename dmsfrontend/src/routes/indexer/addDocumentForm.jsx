import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../store/store";
import { Viewer } from "@react-pdf-viewer/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDocumentForm = (props) => {
  const { fieldsArray, documentType, resetForm, showForm, setShowForm } = props;

  const [img_Url, setImg_Url] = useState();
  const [fileData, setFileData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const saveDocument = useBoundStore((state) => state.saveDocument);

  const onSubmitHandlerIndexedDoc = (data) => {
    data = { ...data, ...documentType, local_Url: img_Url };
    data.file = fileData;
    console.log(data);
    saveDocument(data)
      .then((res) => {
        toast.success("Document Added ");
      })
      .catch((err) => {
        toast.error("Something Wrong!!!");
      });
  };

  function onUploadFile(e) {
    console.log(e.target.files["0"]);
    // Assuming only image
    var file = e.target.files["0"];
    setFileData(file);
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl); // Would see a path?
    setImg_Url(objectUrl);
  }
  return (
    <>
      <ToastContainer />
      <form
        enctype="multipart/form-data"
        onSubmit={handleSubmit(onSubmitHandlerIndexedDoc)}
        method="post"
        action="/documents"
      >
        <div className="flex justify-around h-[50vh] ">
          <div className="w-1/2 text-center bg-white rounded border shadow m-2 overflow-scroll">
            {showForm ? (
              <>
                <div
                  id="main"
                  className="grid grid-cols-2 gap-1 justify-evenly m-5"
                >
                  <div className=" w-23 h-12 my-4 mx-3">
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type={"text"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                      placeholder={`Enter Name...`}
                      required
                    />
                    <p className="text-red-500 m-1"></p>
                  </div>
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
              </>
            ) : (
              <>
                <div className="w-full m-auto mt-20 overflow-hidden">
                  <h2>No fields Found for Selected Documents</h2>
                </div>
              </>
            )}
          </div>

          <div className="w-1/2 text-center bg-white rounded border shadow m-2">
            <div className="flex w-full  items-center justify-center ">
              {!img_Url ? (
                <>
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
                        ref={"file"}
                        type="file"
                        id="file"
                        required
                        accept=".jpg,.png,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        {...register("file")}
                        onChange={(e) => {
                          onUploadFile(e);
                        }}
                        class="hidden"
                      />
                    </div>
                  </label>
                </>
              ) : (
                <>
                  {fileData.name.includes(".pdf") ? (
                    <>
                      <object
                        data={img_Url}
                        className="h-[47vh] w-full"
                      ></object>
                    </>
                  ) : (
                    <>
                      {" "}
                      <img src={img_Url} alt="" className="h-[47vh] w-full" />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 rounded mx-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              reset();
              setShowForm(false);
              resetForm();
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
    </>
  );
};

export default AddDocumentForm;
