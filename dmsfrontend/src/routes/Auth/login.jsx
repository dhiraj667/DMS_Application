import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../../assests/images/img6.png";
import log0 from "../../assests/images/log0.jpg";
import { useBoundStore } from "../../store/store";
import ForgetPass from "./forgetPassword";

const Login = ({ setLogin }) => {
  const [show,setShow]=useState(false);

  const schema = yup.object().shape({
    userName: yup.string().min(3).max(366).required(),
    password: yup.string().min(8).max(1024).required(),
  });
  const navigate = useNavigate();
  const loginUser = useBoundStore((state) => state.loginUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log(data);
    loginUser(data)
      .then((res) => {
        const role = res.data.user.role;
        setLogin(true);
        if (role === "Admin") {
          navigate("/");
        } else {
          navigate("/allDoc");
        }
      })
      .catch((err) => {
        console.log("wrong data");
      });
    // setLoginData(data);
  };

  return (
    <>
      {" "}
      <div className="  h-screen w-90 mx-3">
        <div className="pt-8">
        <ForgetPass show={show} onClose={()=>setShow(false)}/>
        </div>
        <div className="w-3/4 m-auto shadow-lg shadow-blue-100/50 bg-blue-200 px-5 rounded-md">
          <ul className="nav justify-end  flex flex-row  ">
            <li className="nav-item me-4 mt-4 mb-4 font-bold italic">
              <Link className="nav-link" to="/aboutus">
                ABOUT US
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
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className=" w-96 mb-5 ">
                    <img
                      src={
                        "https://www.pngfind.com/pngs/b/229-2295347_document-png.png"
                      }
                      className=" w-1/4  my-3 mx-auto"
                      alt=""
                    />
                    <div className="font-lg text-3xl font-black text-center text-orange-500">
                      <h1>WELCOME</h1>
                    </div>
                  </div>
                  <div className="w-3/4 m-auto">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                      </label>
                      <input
                        {...register("userName")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                      <input
                        {...register("password")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p> */}
                    </div>
                  </div>
                  <div className="text-center lg:text-centre justify-items-start">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border  lg w-3/4">
                      Login
                    </button>
                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="ml-20 font-semibold text-sm mt-2 ">
                      {" "}
                      <Link
                        to="/register"
                        style={{ cursor: "pointer" }}
                        className="text-center"
                      >
                        Create account
                      </Link>
                    </span>

                    <span className="mr-20 font-extralight text-sm mt-2 ">
                      <Link
                      onClick={()=>setShow(true)}
                        to=""
                        className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-center"
                      >
                        Forgot password?
                      </Link>
                    </span>
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
    </>
  );
};
export default Login;
