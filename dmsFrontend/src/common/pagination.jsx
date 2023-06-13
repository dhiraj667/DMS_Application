import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, total, setCurrentPage } = props;
  const pages = Math.ceil(total / pageSize);
  if (pages === 1) return;
  const pagesArr = _.range(1, pages + 1);
  console.log(pagesArr);
  return (
    <>
      <div className="float-right ">
        <ul className="flex m-2">
          {pagesArr.map((page) => (
            <li
              key={page}
              onClick={() => setCurrentPage(page)}
              className="p-2 cursor-pointer rounded-lg m-1 bg-slate-300 border-2 border-black hover:bg-slate-800 hover:text-white"
            >
              <a className="hover:text-white" href="#">{page}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
