import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./common/NavBar/navBar";
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
import RegisterForm from "./routes/Auth/register";
import AboutUs from "./routes/Auth/aboutUs";
import USERFORM from "./routes/admin/childerns/Users/usersForm";

function App() {
  const [login, setLogin] = useState(false);

  function canShowNavBar() {
    return (
      !window.location.pathname.includes("login") ||
      !window.location.pathname.includes("signup")
    );
  }

  return (
    <>
      <div
        className="bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
        {(login && canShowNavBar()) || sessionStorage.getItem("loginData") ? (
          <>
            <NavBar setLogin={setLogin} />
          </>
        ) : (
          <></>
        )}

        <div className="text-gray-800">
          <Routes>
            <Route
              path="/login"
              element={<Login setLogin={setLogin} />}
            ></Route>

            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>

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
              {/* <Route
                path="/:id"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              ></Route> */}
            </Route>

            <Route
              path="/departments"
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
