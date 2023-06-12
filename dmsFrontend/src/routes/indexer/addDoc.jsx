import React, { Component,useEffect,useState} from 'react';
import SideBar from '../../common/sideBar';
import { Link } from 'react-router-dom';
import { useBoundStore } from '../../store/store';

const AddDoc = () => {
    const getDepartments = useBoundStore((state)=>state.getDepartments)
    const departments = useBoundStore((state)=>state.departments)
    const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);

    useEffect(()=>{
        getDepartments();
        getDocTypes();
    },[])

    return ( <>
    <div className='flex w-full h-[33.5rem] bg-gray-100'>
    <SideBar />
    <div className='mx-auto sm:px-6 lg:px-8 w-[88%]'>
    <div className="flex flex-col">
            <div className="-mb-2 pb-4 flex flex-wrap flex-grow justify-between">
              <div className="mt-5 ml-2">
                <h1 className="text-2xl font-bold leading-tight text-black-900">
                  Add Documents
                </h1>
                <div className="mt-2">
                  <span className="text-sm font-bold text-gray-400">
                    Add documents below to get your docs indexed
                    <br />
                    and maintained properly.
                  </span>
                </div>
              </div>
              
            </div>
            <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto flex">
            <div className="relative">
                        <select
                          type="checkbox"
                          class="bg-gray-50 border mt-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-[320px] p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white p-2"
                          name="department[]"
                        //   {...register("departments")}
                        >
                          <option value="" hidden>
                            Select Department&hellip;
                          </option>
                          {departments.map((dept) => (
                            <option value={dept.departmentName}>
                              {dept.departmentName}
                            </option>
                          ))}
                        </select>
                        {/* <p className="text-red-500 m-1">
                          {errors.departments?.message}
                        </p> */}
                      </div>
                      <div className="relative">
                      <select
                          className="bg-gray-50 border mt-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-[320px] ml-3 p-2.5 dark:bg-gray-600 dark:border-gray-100 dark:placeholder-gray-400  p-2"
                          name="department"
                        //   {...register("doctypeId")}
                          required
                        >
                          <option value="" hidden>
                            Select Document Type&hellip;
                          </option>
                          {docTypes.map((d) => (
                            <option value={d._id}>{d.docType}</option>
                          ))}
                        </select>
                        {/* <p className="text-red-500 m-1">
                          {errors.departments?.message}
                        </p> */}
                      </div>
            <button
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
          </div>
    </div>
    </div>
    </> );
}
 
export default AddDoc;