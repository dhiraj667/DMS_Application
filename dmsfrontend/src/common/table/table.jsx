import React from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import TableHeader from "./tableHeader";
import Loader from "../../components/loader";
import { Link } from "react-router-dom";

const Table = (props) => {
  const { items, columns, onHandleDelete, onHandleUpdate, loading, urlName } =
    props;
  return (
    <>
      <TableHeader columns={columns} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={item._id + new Date().toString()}
              className="py-3 px-4 mt-2 flex hover:bg-gray-200 rounded-md mx-4 group"
            >
              <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
              {Object.entries(item).map(([nextItem, value], iteration) => (
                <>
                  {nextItem !== "_id" ? (
                    <div
                      key={item[nextItem]._id + new Date().toString()}
                      className={
                        columns.length === 4
                          ? `w-[23%] ml-5`
                          : columns.length === 3
                          ? `w-[35%] ml-5`
                          : "w-[45%] ml-5"
                      }
                      style={
                        iteration !== 1
                          ? item.hasOwnProperty("docTypeCode") &&
                            iteration === 2
                            ? { alignItems: "left" }
                            : iteration === 3
                            ? { textAlign: "center" }
                            : { textAlign: "center", marginLeft: "-40px" }
                          : { textAlign: "left" }
                      }
                    >
                      <span
                        className={`tracking-wide text-sm text-black-700 font-semibold`}
                      >
                        {item.hasOwnProperty("docTypeCode") &&
                        iteration == 3 ? (
                          <>{item[nextItem].departmentName}</>
                        ) : (
                          <>{item[nextItem]}</>
                        )}
                        {/* {item[nextItem]} */}
                      </span>
                    </div>
                  ) : (
                    <span className="hidden" key={item._id}></span>
                  )}
                </>
              ))}
              <div
                className={
                  columns.length === 4
                    ? `w-[25%] text-center mr-5`
                    : columns.length === 3
                    ? `w-[35%] text-right mr-5`
                    : `w-[45%] text-right mr-5`
                }
              >
                <span
                  className={`tracking-wide text-sm ms-36 text-black-700 font-semibold`}
                >
                  <Tooltip
                    className="py-0.5 rounded"
                    content={<span className="bg-black text-white">Edit</span>}
                  >
                    <Link to={`/${urlName}/${item._id}`}>
                      <i
                        className="fa fa-pencil fa-lg"
                        aria-hidden="true"
                        onClick={() => onHandleUpdate(item)}
                      ></i>
                    </Link>
                  </Tooltip>

                  <Tooltip
                    className="py-0.5 rounded"
                    content={
                      <span className="bg-black text-white">Delete</span>
                    }
                  >
                    <i
                      className="fa fa-trash ml-7 fa-lg"
                      aria-hidden="true"
                      onClick={() => onHandleDelete(item._id)}
                    ></i>
                  </Tooltip>
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Table;
