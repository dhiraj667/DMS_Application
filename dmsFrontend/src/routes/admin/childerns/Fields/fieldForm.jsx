import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FieldForm = (props) => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    label: yup.string().min(3).max(50).required(),
    input: yup.string().min(2).max(50).required(),
  });
  const { handleOpen, open } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const fields = useBoundStore((state) => state.fields);
  const saveField = useBoundStore((state) => state.saveField);
  const updateField = useBoundStore((state) => state.updateField);

  const onSubmitHandler = (data) => {
    console.log(data);
    if (!id) {
      saveField(data)
        .then((res) => {
          toast.success("Field Added");
        })
        .catch((err) => {
          toast.error("Something Wrong!!!");
        });
    } else {
      updateField(data)
        .then((res) => {
          toast.success("Field Updated");
        })
        .catch((err) => {
          toast.error("Something Wrong!!!");
        });
    }
    reset();
    handleOpen();
    navigate(-1);
    // console.log(data);
  };

  const inputTypeArray = [
    {
      type: "text",
    },
    {
      type: "email",
    },
    {
      type: "date",
    },
    {
      type: "url",
    },
    {
      type: "number",
    },
  ];

  useEffect(() => {
    if (!id) return;
    const field = fields.find((f) => f._id === id);
    if (!field) return;
    setValue("_id", field._id);
    setValue("name", field.fieldName.name);
    setValue("label", field.fieldName.label);
    setValue("input", field.fieldName.input);
  }, [id]);

  return (
    <>
      <ToastContainer />
      {open ? (
        <>
          <div className="bg-black bg-opacity-50 flex absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-40">
            <div className="rounded min-w-[400px] min-h-[225px] bg-white">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => {
                    handleOpen();
                    if (id) navigate(-1);
                    reset();
                  }}
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
                    {id ? "Edit Field" : "Add Field"}
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmitHandler)}
                  >
                    <div>
                      <label
                        for="name"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Field Name
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Field"
                        required
                      />
                      <p className="text-red-500 m-1">{errors.name?.message}</p>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        Label Name
                      </label>
                      <input
                        type="text"
                        {...register("label")}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Label"
                        required
                      />
                      <p className="text-red-500 m-1">
                        {errors.label?.message}
                      </p>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        Select Input Type
                      </label>

                      <div className="relative">
                        <select
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white p-2"
                          name="input"
                          {...register("input")}
                        >
                          <option value="" hidden>
                            Select Input&hellip;
                          </option>
                          {inputTypeArray.map((input) => (
                            <option value={input.type}>{input.type}</option>
                          ))}
                        </select>
                        <p className="text-red-500 m-1">
                          {errors.input?.message}
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add Field
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

export default FieldForm;
