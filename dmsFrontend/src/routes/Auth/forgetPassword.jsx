import React, { useEffect, useState } from "react";
import { useBoundStore } from "../../store/store";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ResetPassWord from "./resetPassword";

const ForgetPass = ({ show, onClose }) => {
  const [showResetPassModal, setShowResetPassMode] = useState(false);
  const [email, setEmail] = useState();
  const schema = yup.object().shape({
    email: yup.string().min(3).max(366).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const findByEmailId = useBoundStore((state) => state.findByEmailId);

  const onSubmitHandler = (data) => {
    findByEmailId(data)
      .then((res) => {
        reset();
        if (res.data.data.length === 0) {
          console.log("email is not Registerd");
        } else {
          onClose();
          setShowResetPassMode(true);
          console.log("email is  Registerd");
          setEmail(data.email);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        {show ? (
          <>
            <div className="absolute flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 items-center justify-center">
              <div className="relative w-[350px] min-h-[200px] bg-white rounded flex items-center justify-center">
                <button onClick={onClose} className="absolute top-6 right-3">
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
                    Forget Password
                  </h3>
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className=" m-auto">
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Enter Email...."
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

      <ResetPassWord
        showResetPassModal={showResetPassModal}
        setShowResetPassMode={setShowResetPassMode}
        email={email}
      />
    </>
  );
};

export default ForgetPass;
