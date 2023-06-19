import React, { Component, useEffect, useState } from "react";
import SideBar from "../../common/sideBar";
import Table from "../../common/table/table";
import { useBoundStore } from "../../store/store";
import DocTable from "../../common/documentsTable/docTable";
import Loader from "../../components/loader";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [loading, setLoading] = useState(true);

  const getAllDocuments = useBoundStore((state) => state.getAllDocuments);
  const documents = useBoundStore((state) => state.documents);
  const docTypes = useBoundStore((state) => state.docTypes);
  const getDocTypes = useBoundStore((state) => state.getDocTypes);
  // const deleteDepartment = useBoundStore((state) => state.deleteDepartment);

  // console.log(newDocument);

  useEffect(() => {
    getAllDocuments()
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });

    getDocTypes();
  }, []);

  const handleDelete = (id) => {
    // deleteDepartment(id);
  };
  const handleUpdate = (data) => {
    // setId(data._id);
    // handleOpen();
  };

  function onSelectItem(data) {
    console.log(data);
  }

  if (!sessionStorage.getItem("loginData")) return;
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));
  // console.log(loginData.user);
  const role = loginData.user.role;
  const departments = loginData.user.departments;
  console.log(departments);

  // const departmentWiseDocument=

  let columns;
  if (role === "Indexer") {
    columns = [
      { path: "User Name", header: "User Name" },
      { path: "document Name", header: "Document Name" },
      { key: "Preview" },
      { key: "Preview DocInfo" },
      { key: "Download" },
      { key: "Action" },
    ];
  } else {
    columns = [
      { path: "User Name", header: "User Name" },
      { path: "document Name", header: "Document Name" },
      { key: "Preview" },
      { key: "Preview DocInfo" },
      { key: "Download" },
    ];
  }

  if (!documents) return;
  let newDocument = documents.map((document) => ({
    name: document.indexingInfo["name"],
    ...document,
  }));

  const documentTypes = docTypes.filter((d) => {
    for (let i = 0; i < newDocument.length; i++) {
      if (d.docType === newDocument[i].documentName) {
        return d;
      }
    }
  });

  const departmentWiseData = documentTypes.filter((d) => {
    console.log(d.department.departmentName);
    for (let i = 0; i < departments.length; i++) {
      if (d.department.departmentName == departments[i]) {
        console.log(d.department.departmentName + "===" + departments[i]);
        return d;
      }
    }
  });

  const newFilteredDocument = newDocument.filter((d) => {
    for (let i = 0; i < departmentWiseData.length; i++) {
      if (d.documentName === departmentWiseData[i].docType) {
        return d;
      }
    }
  });

  console.log(newFilteredDocument);

  return (
    <>
      <div className="flex w-full h-[33.5rem] bg-gray-100">
        <SideBar
          items2={departmentWiseData}
          items={departments}
          onSelectItem={onSelectItem}
        />
        <div className="mx-auto sm:px-6 lg:px-8 w-[88%] ">
          <div className="py-3 sm:px-6 lg:px-3 mt-3  bg-white drop-shadow-2xl rounded-2xl overflow-auto h-[84vh]">
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
            {documents ? (
              <>
                {" "}
                <DocTable
                  urlName={"documents"}
                  columns={columns}
                  items={newFilteredDocument}
                  onHandleDelete={handleDelete}
                  onHandleUpdate={handleUpdate}
                  loading={loading}
                  role={role}
                  // previewUrl={}
                />
              </>
            ) : (
              <>
                <Loader />
              </>
            )}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
