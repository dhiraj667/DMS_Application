import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./common/navBar";
import Admin from "./routes/admin/admin";
import Demo from "./routes/demo";
import Login from "./routes/Auth/login";
import DOCTYPEFIELDS from "./routes/admin/childerns/documentTypeFIelds/docTypeFields";
import DOCTYPE from "./routes/admin/childerns/documentTypes/docType";
import USERS from "./routes/admin/childerns/Users/users";
import DEPARTMENTS from "./routes/admin/childerns/departments/department";
import FIELD from "./routes/admin/childerns/Fields/fields";
import Index from "./routes/indexer";
import AddDoc from "./routes/indexer/addDoc";
import { useBoundStore } from "./store/store";
import {
  PrivateRoute,
  PrivateRouteForIndexer,
  PrivateRouteForgUser,
} from "./common/privateRoute";

function App() {
  const [login, setLogin] = useState(false);

  function canShowNavBar() {
    return (
      !window.location.pathname.includes("login") &&
      !window.location.pathname.includes("signup")
    );
  }

  return (
    <>
      <div
        className="bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
<<<<<<< HEAD
        {(login && canShowNavBar()) || sessionStorage.getItem("loginData") ? (
          <>
            <NavBar setLogin={setLogin} />
          </>
        ) : (
          <></>
        )}
=======
        <div className="text-gray-800">
          <NavBar role="Admin" />
          <Routes>
            <Route path="/" element={<Admin />}>
              <Route index element={<Admin />} />
            </Route>
            <Route path="/departments" element={<DEPARTMENTS />} />
            <Route path="/departments/:id" element={<DEPARTMENTS />} />
            <Route path="/users" element={<USERS />} />
            <Route path="/users/:id" element={<USERS />} />
            <Route path="/doctypes" element={<DOCTYPE />} />
            <Route path="/doctypes/:id" element={<DOCTYPE />} />
            <Route path="/fields" element={<FIELD />} />
            <Route path="/fields/:id" element={<FIELD />} />
            <Route path="/doctypefields" element={<DOCTYPEFIELDS />} />
            <Route path="/doctypefields/:id" element={<DOCTYPEFIELDS />} />
>>>>>>> 27fdd0f74e51055a5aa865775a51d066283d541d

        <div className="text-gray-800">
          <Routes>
            <Route
              path="/login"
              element={<Login setLogin={setLogin} />}
            ></Route>

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            >
              <Route
                index={true}
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route
              path="departments"
              element={
                <PrivateRoute>
                  <DEPARTMENTS />
                </PrivateRoute>
              }
            />

            <Route
              path="/departments/:id"
              element={
                <PrivateRoute>
                  <DEPARTMENTS />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <USERS />
                </PrivateRoute>
              }
            />
            <Route
              path="/users/:id"
              element={
                <PrivateRoute>
                  <USERS />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctypes"
              element={
                <PrivateRoute>
                  <DOCTYPE />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctypes/:id"
              element={
                <PrivateRoute>
                  <DOCTYPE />
                </PrivateRoute>
              }
            />
            <Route
              path="/fields"
              element={
                <PrivateRoute>
                  <FIELD />
                </PrivateRoute>
              }
            />
            <Route
              path="/fields/:id"
              element={
                <PrivateRoute>
                  <FIELD />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctypefields"
              element={
                <PrivateRoute>
                  <DOCTYPEFIELDS />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctypefields/:id"
              element={
                <PrivateRoute>
                  <DOCTYPEFIELDS />
                </PrivateRoute>
              }
            />

            <Route
              path="/allDoc"
              element={
                <PrivateRouteForgUser>
                  <Index />
                </PrivateRouteForgUser>
              }
            />
            <Route
              path="/addDoc"
              element={
                <PrivateRouteForIndexer>
                  <AddDoc />
                </PrivateRouteForIndexer>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
