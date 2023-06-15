import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBoundStore } from "../../store/store";

const ResetPassWord = (props) => {
  const { showResetPassModal, setShowResetPassMode, email } = props;
  const schema = yup.object().shape({
    otp: yup.string().min(4).max(4).required(),
    newPassword: yup.string().min(8).max(1024).required(),
    confirmPassword: yup.string().min(8).max(1024).required(),
  });

  const resetPassword = useBoundStore((state) => state.resetPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    data = { ...data, email: email };
    console.log(data);
    resetPassword(data)
      .then((res) => {
        console.log("changed success...");
      })
      .catch((err) => {
        console.log(err.message);
      });
    reset();
  };
  return (
    <>
      <div>
        {showResetPassModal ? (
          <>
            <div className="absolute flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 items-center justify-center">
              <div className="relative min-w-[350px] min-h-[200px] bg-white rounded flex items-center justify-center">
                <button
                  onClick={() => {
                    setShowResetPassMode(false);
                  }}
                  className="absolute top-7 right-3"
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
                  <h3 className="mb-4 text-l font-bold text-gray-900 dark:text-white  ">
                    Reset Password
                  </h3>
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className=" m-auto">
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          OTP
                        </label>
                        <input
                          {...register("otp")}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="text"
                          type="text"
                          placeholder="Enter Otp"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          New Password
                        </label>
                        <input
                          {...register("newPassword")}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="passWord"
                          type="password"
                          placeholder="Enter New Password....."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Confirm Password
                        </label>
                        <input
                          {...register("confirmPassword")}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Enter Confirm Password...."
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ResetPassWord;
