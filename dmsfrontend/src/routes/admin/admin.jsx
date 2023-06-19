import React, { useEffect, useState } from "react";
import SideBar from "../../common/sideBar";
import { useBoundStore } from "../../store/store";
// import logo from "../../assests/images/log0.jpg";
// import NavBar from "../../common/navBar";
import { CChart } from "@coreui/react-chartjs";
import Loader from "../../components/loader";

const Admin = () => {
  const [loading, setLoading] = useState(true);

  const getAllDocs = useBoundStore((state) => state.getAllDocuments);
  const documents = useBoundStore((state) => state.documents);

  const getUsers = useBoundStore((state) => state.getUsers);
  const users = useBoundStore((state) => state.users);
  const generalUserCount = users.filter((g) => g.role === "General User");
  const activeIndexerCount = users.filter(
    (i) => i.role === "Indexer" && i.isActive === true
  );
  const inActiveIndexerCount = users.filter(
    (i) => i.role === "Indexer" && i.isActive === false
  );

  useEffect(() => {
    getUsers();
    getAllDocs()
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="flex w-full h-[33.5rem] bg-gray-100 ">
        <SideBar />
        <main className="p-6 sm:p-10 space-y-6 w-[88%]">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between ">
            <div className="mr-6">
              <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
              <h2 className="text-gray-600 ml-0.5">
                view an overview of uploaded documents
              </h2>
            </div>
          </div>
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">{`${documents.length}`}</span>
                    <span className="block text-gray-500">
                      Indexed Document
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {activeIndexerCount.length}
                    </span>
                    <span className="block text-gray-500">Active Indexers</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block text-2xl font-bold">
                      {generalUserCount.length}
                    </span>
                    {/* <span className="inline-block text-xl text-gray-500 font-semibold">
                    (14%)
                  </span> */}
                    <span className="block text-gray-500">
                      {/* Underperforming students */}
                      General Users
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {inActiveIndexerCount.length}
                    </span>
                    <span className="block text-gray-500">
                      InActive Indexers
                    </span>
                  </div>
                </div>
                <div className="w-[355px] mt-3">
                  <CChart
                    type="bar"
                    data={{
                      labels: [
                        "Indexeded Docs",
                        "Users",
                        "Active  Indexers",
                        "Inactive Indexers",
                      ],
                      datasets: [
                        {
                          label: "Document Management Information",
                          backgroundColor: "#4233ff", //#f87979
                          data: [
                            documents.length,
                            generalUserCount.length,
                            activeIndexerCount.length,
                            inActiveIndexerCount.length,
                            10,
                          ],
                        },
                      ],
                    }}
                    labels="months"
                  />
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Admin;
