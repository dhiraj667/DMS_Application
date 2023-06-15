import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../../../store/store";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const USERFORM = (props) => {
  const schema = yup.object().shape({
    firstName: yup.string().min(5).max(50).required(),
    lastName: yup.string().min(5).max(50).required(),
    email: yup.string().min(5).max(50).required(),
    phone: yup.string().min(5).max(50).required(),
    userName: yup.string().min(5).max(50).required(),
    password: yup.string().min(5).max(50).required(),
    departments: yup.array().min(0).max(50).required(),
  });
  const getDepartments = useBoundStore((state) => state.getDepartments);
  // const departments=[
  //   {_id:"1",departmentName:"Human Resources"}
  // ]
  const departments = useBoundStore((state) => state.departments);
  const saveUser = useBoundStore((state) => state.saveUser);
  const updateUser = useBoundStore((state) => state.updateUser);
  const getUsers = useBoundStore((state) => state.getUsers);
  const users = useBoundStore((state) => state.users);

  let deptArr = departments.map((dept)=>{
    let i = dept.departmentName;
    return i;
  })
  // console.log(departments);
  const { open, handleOpen } = props;
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    if (!id) {
      data = { ...data, role: "Indexer" };
      saveUser(data);
    } else {
      updateUser(data);
    }
    reset();
    handleOpen();
    console.log(data);
  };

  useEffect(() => {
    getDepartments();
    getUsers();
    if (!id) return;
    const newUser = users.find((u) => u._id === id);
    if (!newUser) return;
    setValue("_id", newUser._id);
    setValue("userName", newUser.userName);
    setValue("firstName", newUser.firstName);
    setValue("lastName", newUser.lastName);
    setValue("email", newUser.email);
    setValue("phone", newUser.phone);
    setValue("password", newUser.password);
    setValue("departments", [...newUser.departments]);
  }, [id]);

  return (
    <>
      {open ? (
        <>
          <div className="bg-black bg-opacity-50 flex absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-40">
            <div className="rounded min-w-[420px] min-h-[225px] bg-white">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => {
                    handleOpen();
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
                    {id ? "Edit User" : "Add User"}
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmitHandler)}
                  >
                    <div className="flex">
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("firstName")}
                          id="name"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter First Name"
                        />
                        <p className="text-red-500 m-1">
                          {errors.firstName?.message}
                        </p>
                      </div>
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("lastName")}
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter Last Name"
                        />
                        <p className="text-red-500 m-1">
                          {errors.lastName?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("email")}
                          id="name"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter Email"
                        />
                        <p className="text-red-500 m-1">
                          {errors.email?.message}
                        </p>
                      </div>
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          Phone No
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("phone")}
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter Phone No"
                        />
                        <p className="text-red-500 m-1">
                          {errors.phone?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          UserName
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("userName")}
                          id="name"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter User Name"
                        />
                        <p className="text-red-500 m-1">
                          {errors.userName?.message}
                        </p>
                      </div>

                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="name"
                          {...register("password")}
                          id="name"
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter Password"
                        />
                        <p className="text-red-500 m-1">
                          {errors.password?.message}
                        </p>
                      </div>
                    </div>
                    <div className="mr-3">
                      <label
                        for="department"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Select Department
                      </label>

                      <div className="relative">
                        <Multiselect
                          placeholder="Select Department"
                          type="checkbox"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                          name="department[]"
                          {...register("departments")}
                          isObject={false}
                          options={deptArr}
                          onSelect={(event)=>console.log(event)}
                          onRemove={(event)=>console.log(event)}
                          showCheckbox
                        />
                        {/* <p className="text-red-500 m-1">
                          {errors.departments?.message}
                        </p> */}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add User
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

export default USERFORM;
