import React, { Component } from 'react';

const ForgetPass = ({show,onClose}) => {

    return ( <>
    <div>
        {show?<><div className='absolute flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 items-center justify-center'>
            <div className='relative min-w-[350px] min-h-[425px] bg-white rounded flex items-center justify-center border-2 border-black'>
                <button onClick={onClose} className='absolute top-2 right-3'><svg
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
                  </svg></button>
                  <div className="w-3/4 m-auto">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Id
                      </label>
                      <input
                        // {...register("userName")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="email Id"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        OTP
                      </label>
                      <input
                        // {...register("password")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p> */}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        newPassword
                      </label>
                      <input
                        // {...register("userName")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="newPassword"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        confirmPassword
                      </label>
                      <input
                        // {...register("userName")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="confirmPassword"
                      />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border  lg w-3/4 ml-9'>
                    Submit
                  </button>
                  </div>
                 
            </div>
            </div></>
        :
        <>
        </>}
    </div>
    </> );
}
 
export default ForgetPass;