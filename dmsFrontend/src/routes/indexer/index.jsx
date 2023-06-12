import React, { Component, useEffect,useState } from 'react';
import SideBar from '../../common/sideBar';
import Table from '../../common/table/table';
import { useBoundStore } from '../../store/store';

const Index = () => {
    const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

    const columns = [
        { path: "department Name", header: "User Name" },
        { path: "department Name", header: "Document Name" },
        { key: "Action" },
      ];

    const getDepartments = useBoundStore((state)=>state.getDepartments);
    const departments = useBoundStore((state)=>state.departments);
    const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);
  const deleteDepartment = useBoundStore((state)=>state.deleteDepartment)

    useEffect(()=>{
        getDepartments();
        getDocTypes();
    },[])
    const handleDelete = (id) => {
        deleteDepartment(id);
      };
      const handleUpdate = (data) => {
        setId(data._id);
        handleOpen();
      };
    
    return ( <>
    <div className='flex w-full h-[33.5rem] bg-gray-100'>
    <SideBar items={departments} items2={docTypes}/>
    <div className='mx-auto sm:px-6 lg:px-8 w-[88%]'>
    <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto">
              <div className="flex items-center mr-4">
                <span className="relative left-6">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pl-10 py-2 px-4 font-bold leading-tight focus:outline-none  text-gray-500"
                  id="inline-searcg"
                  type="text"
                  placeholder={`Search by document name.....`}
                />
              </div>

              <Table
                urlName={"departments"}
                columns={columns}
                items={departments}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
              />
              </div>
    </div>
    </div>
    </> );
}
 
export default Index;