import React from "react";

const TableRow = (props) => {
  const {} = props;
  return (
    <>
      <div
        className={`py-2 px-4 mt-2 flex position-relative shadow rounded-md bg-red w-4/5 h-16 m-auto bg-white`}
      >
        <div
          className={`border-solid border-2 border-indigo-600 rounded`}
        ></div>
        <div className={``}>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQE637KOOeM_Dg/profile-displayphoto-shrink_800_800/0/1669046380943?e=2147483647&v=beta&t=E6yZnlNrOJcVIMamXtfvIVUEUG2YAYDgNo3ImlSz6FA"
              alt="user profile photo"
              className="h-full w-full object-cover  rounded-full"
            />
          </span>
        </div>
        <div className={`px-2 `}>
          <span className={``}> Dhiraj@qw </span>
        </div>
        <div className={`px-2 `}>%</div>
        <div className={`px-2 `}>
          <span className={``}>11111</span>
        </div>
        <div className={`px-2`}>
          <div className={`d-flex align-items-center`}></div>
        </div>
      </div>
    </>
  );
};

export default TableRow;
