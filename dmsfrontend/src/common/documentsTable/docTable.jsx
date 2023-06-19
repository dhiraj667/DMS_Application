import React, { useState } from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import Loader from "../../components/loader";
import { Link } from "react-router-dom";
import DocTableHeader from "./docTableHeader";

const DocTable = (props) => {
  const [showPreview, setShowPreview] = useState(false);
  const [url, setUrl] = useState("");
  const {
    items,
    columns,
    onHandleDelete,
    onHandleUpdate,
    loading,
    urlName,
    role,
  } = props;

  console.log(items);
  console.log(columns);
  return (
    <>
      <DocTableHeader columns={columns} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={item._id + new Date().toString()}
              className={
                role === "Indexer"
                  ? "py-3 px-4 mt-2 flex hover:bg-gray-200 rounded-md mx-4 group "
                  : "py-3 px-4 mt-2 flex hover:bg-gray-200 rounded-md mx-4 group justify-between"
              }
            >
              <div className="w-1 group-hover:bg-blue-500 rounded-md"></div>
              {Object.entries(item).map(([nextItem, value]) => (
                <>
                  {nextItem !== "_id" ? (
                    <div
                      key={item[nextItem]._id + new Date().toString()}
                      className={
                        nextItem === "name" || nextItem === "documentName"
                          ? nextItem === "documentName"
                            ? "mx-8"
                            : "mx-5 text-center"
                          : "hidden"
                      }
                    >
                      <span
                        className={`tracking-wide text-sm text-black-700 font-semibold line-clamp-1 w-[80px]`}
                      >
                        {nextItem === "name" || nextItem === "documentName" ? (
                          <Tooltip
                            className="py-0.5 rounded"
                            content={
                              <span className="bg-black text-white">
                                {item[nextItem]}
                              </span>
                            }
                          >
                            <Link
                              to={`/${urlName}/${item._id}`}
                              className="ml-0"
                            >
                              <> {item[nextItem]}</>
                            </Link>
                          </Tooltip>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </span>
                    </div>
                  ) : (
                    <span className="hidden" key={item._id}></span>
                  )}
                </>
              ))}
              <div className="mx-4">
                <span
                  className={`tracking-wide text-xl ms-20  text-black-700 font-semibold mx-4`}
                >
                  <Tooltip
                    className="py-0.5 rounded"
                    content={
                      <span className="bg-black text-white">Preview</span>
                    }
                  >
                    <i
                      className="fa fa-eye mx-3"
                      aria-hidden="true"
                      onClick={() => {
                        setShowPreview(true);
                        setUrl(item.driveFile_Id);
                      }}
                    ></i>
                  </Tooltip>
                </span>
              </div>

              <div>
                <span
                  className={`tracking-wide text-xl ms-28  text-black-700 font-semibold mx-4`}
                >
                  {" "}
                  <Tooltip
                    className="py-0.5 rounded"
                    content={
                      <span className="bg-black text-white">
                        {Object.entries(item.indexingInfo).map(
                          ([nextItem, value]) => (
                            <p>{`${nextItem}: ${item.indexingInfo[nextItem]}`}</p>
                          )
                        )}
                      </span>
                    }
                  >
                    <i
                      className="fa fa-info-circle mx-4"
                      aria-hidden="true"
                    ></i>
                  </Tooltip>
                </span>
              </div>
              <div>
                <span
                  className={`tracking-wide text-xl ms-32  text-black-700 font-semibold mx-4`}
                >
                  <Tooltip
                    className="py-0.5 rounded"
                    content={
                      <span className="bg-black text-white">Download</span>
                    }
                  >
                    <Link
                      to={`https://drive.google.com/uc?id=${item.driveFile_Id}&export=download`}
                      className="mx-2 text-xl"
                      download
                    >
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </Link>
                  </Tooltip>
                </span>
              </div>
              {role === "Indexer" ? (
                <>
                  <div className="pl-16">
                    <span className="text-center ">
                      <Tooltip
                        className="py-0.5 rounded"
                        content={
                          <span className="bg-black text-white">Edit</span>
                        }
                      >
                        <Link to={`/${urlName}/${item._id}`} className="mx-4">
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
                          className="fa fa-trash ml-7 fa-lg mx-4"
                          aria-hidden="true"
                          onClick={() => onHandleDelete(item._id)}
                        ></i>
                      </Tooltip>
                    </span>
                  </div>
                </>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
          ))}
        </>
      )}

      {showPreview ? (
        <>
          <div className="bg-black bg-opacity-50 z-50 flex absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-40">
            <div className="rounded min-w-[80%] min-h-[80vh] bg-white">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => {
                    setShowPreview(false);
                  }}
                >
                  <svg
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
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white ">
                    Preview
                  </h3>

                  <img
                    src={`https://drive.google.com/uc?id=${url}`}
                    alt="img"
                    loading="lazy"
                    className="w-[100%] h-[65vh] "
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DocTable;
