import React from "react";

const DocTableHeader = (props) => {
  const { columns } = props;
  return (
    <>
      <div
        className={`py-3 px-4 mt-5 flex justify-between bg-blue-200 rounded-md mx-4 shadow-lg shadow-blue-100/50`}
      >
        {columns.map((item, index) =>
          index === 0 ? (
            <div key={item.path + new Date().toString()} className={`ml-6`}>
              <span
                className={` tracking-wide text-sm text-blue-700 font-semibold`}
              >
                {item.header || item.key}
              </span>
            </div>
          ) : (
            <div className={`px-2 mr-10`}>
              <span
                className={`tracking-wide text-sm text-blue-700 font-semibold`}
              >
                {item.header || item.key}
              </span>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default DocTableHeader;
