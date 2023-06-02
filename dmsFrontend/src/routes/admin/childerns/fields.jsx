import React from 'react';

const Field = () => {
    return ( <>
    <div className='m-4'>
        <span className='relative left-6'><i class="fa fa-search"></i></span>
        <input className='w-96 rounded-full pl-10 border-2 border-black' type="search" name="" id="" placeholder='Search'/>
        <span className='relative right-6'><button><i class="fa fa-times"></i></button></span>
    </div>
    <h3 className='ml-20 mt-16'>Add Fields</h3>
    <div className='m-4 ml-20'>
        <label className='block mb-2' htmlFor="">Field Name</label>
        <input className="border-2 border-black w-[48rem] pl-5" type="text" name="" id="" placeholder='Enter Field Name' />
        {/* <button className='rounded-lg h-8 text-sm ml-14 border-2 bg-blue-600 text-white w-48'><i class="fa fa-plus-square-o pr-4"></i>Add Fields</button>
         */}
         <button className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
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
              Add Fields
            </button>
    </div>
   
    </> );
}
 
export default Field;

 {/* <div className='border-2 border-black w-[64rem] ml-10 mt-11 border-l-8 pl-10 pt-4 text-lg h-16'>
        firstName
        <span className='ml-[50rem]'>
        <i className='' class="fa fa-times"></i>
        <i class="fa fa-times"></i>
        </span>
        
    </div> */}