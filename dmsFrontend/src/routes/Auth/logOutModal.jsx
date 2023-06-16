import React, { Component } from 'react';
import {useNavigate } from "react-router-dom";

const LogOutModal = ({show ,onClose,setLogin,setShow}) => {
    const navigate = useNavigate();
    return ( <>
{
    show?<div>
        <div className='absolute flex top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-50 items-center justify-center'>
            <div className='relative min-w-[200px] min-h-[150px] bg-white rounded flex items-center justify-center border'>
                <button onClick={onClose} className='absolute top-6 right-3'><svg
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

                  <div className='absolute top-6 left-5 font-bold '>
                    Want To Logout
                  </div>
                  <div className='mt-12'>
                    <button
                    onClick={() => {
                        navigate("/login");
                        setLogin(false);
                        sessionStorage.clear();
                        setShow(false)
                      }}
                     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border mr-2'>
                    Yes
                  </button>
                  <button
                  onClick={onClose}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border'>
                    No
                  </button>
                  </div>
                 
            </div>
            </div>
    </div>:
    <></>
}
    
    </> );
}
 
export default LogOutModal;