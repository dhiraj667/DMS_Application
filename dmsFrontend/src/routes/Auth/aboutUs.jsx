import React, { Component } from 'react';
import bgImage from "../../assests/images/img6.png";
import {Link } from "react-router-dom";

const AboutUs = () => {
    return ( <>
     <div className="  h-screen w-90 mx-3">
        <div className="pt-8">
        </div>
        <div className="w-3/4 m-auto shadow-lg shadow-blue-100/50 bg-blue-200 px-5 rounded-md">
          <ul className="nav justify-end  flex flex-row  ">
            <li className="nav-item me-4 mt-4 mb-4 font-bold italic">
            <Link className="nav-link" to="/login">
                HOME
              </Link>
            </li>
          </ul>

          <div className="border-black">
            <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
              <div className="bg-repeat mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 rounded-lg">
                <img src={bgImage} className="w-full rounded-lg" alt="" />
              </div>

              <div className="mb-6 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                <form
                  className="bg-white shadow-md rounded-lg  pt-3 pb-8 mb-4"
                >
                  <div className=" w-96 mb-5 ">
                    <img
                      src={
                        "https://www.pngfind.com/pngs/b/229-2295347_document-png.png"
                      }
                      className=" w-1/4  my-3 mx-auto"
                      alt=""
                    />
                    <div className="font-lg text-xl font-black text-center text-orange-500">
                      <h1>Document Management System</h1>
                    </div>
                  </div>
                 
                  <div className="text-center lg:text-centre justify-items-start">
                    <p className='font-bold'>Document Management System is the <br />website for managin your documents <br />easily and efficently. <br />
                      Here You can upload yout <br />
                      Docs and they are get managed <br />
                      according to department,doctype <br />
                      doctypefield,etc.
                      <br />
                      Use our DMS application for <br />safety of your docs!
                      <br />
                    </p>
                    <p className='font-lg text-2xl  mt-3 text-orange-500'>Feedbacks and Suggestions are welcome!</p>

                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    

                    
                  </div>
                </form>
                <p className="text-center text-gray-500 text-xs my-2">
                  &copy;2023 VAST Corp. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </> );
}
 
export default AboutUs;