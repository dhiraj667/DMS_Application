import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = (props) => {
  const schema = yup.object().shape({
    firstName: yup.string().min(5).max(50).required(),
    lastName: yup.string().min(5).max(50).required(),
    email: yup.string().min(5).max(50),
    phone: yup.string().min(5).max(50).required(),
    userName: yup.string().min(5).max(50).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const saveUser = useBoundStore((state) => state.updateProfile);

  const { userProfile, show, onHandleClose } = props;

  const onSubmitHandler = (data) => {
    console.log(data);
    saveUser(data)
      .then((res) => {
        onHandleClose();
        toast.success("Profile Updated");
      })
      .catch((err) => {
        toast.error("SomeThing Wrong");
      });
  };

  useEffect(() => {
    // if (!user) return;
    setValue("_id", userProfile._id);
    setValue("userName", userProfile.userName);
    setValue("firstName", userProfile.firstName);
    setValue("lastName", userProfile.lastName);
    setValue("email", userProfile.email);
    setValue("phone", userProfile.phone);
  }, []);

  if (!sessionStorage.getItem("loginData")) return;

  //   setValue("departments", [...user.departments]);

  return (
    <>
      <ToastContainer />
      {show ? (
        <div>
          <div className="absolute flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-50 items-center justify-center">
            <div className="relative min-w-[40%] min-h-[150px] bg-white rounded flex items-center justify-center border">
              <button
                onClick={onHandleClose}
                className="absolute top-2 right-2"
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
              </button>

              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white ">
                  Edit Profile
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="flex">
                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        {...register("firstName")}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter First Name"
                      />
                      <p className="text-red-500 m-1">
                        {errors.firstName?.message}
                      </p>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        {...register("lastName")}
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
                        //
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        {...register("email")}
                        className=" bg-gray-300 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Email"
                        disabled
                      />
                      <p className="text-red-500 m-1">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        Phone No
                      </label>
                      <input
                        type="text"
                        name="phone"
                        {...register("phone")}
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
                      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                        UserName
                      </label>
                      <input
                        type="text"
                        name="userName"
                        {...register("userName")}
                        className=" bg-gray-300 border border-gray-300 text-gray-900 text-bold rounded-lg focus:ring-blue-500 focus:border-blue-100 block  p-2.5 dark:bg-gray-600 mr-6 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter User Name"
                        disabled
                      />
                      <p className="text-red-500 m-1">
                        {errors.userName?.message}
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditProfile;
