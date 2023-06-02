import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./common/navBar";
import SideBar from "./common/sideBar";
import Admin from "./routes/admin/admin";
import Deparments from "./routes/admin/childerns/department";
import Demo from "./routes/demo";
import Field from "./routes/admin/childerns/fields";
import Login from "./routes/Auth/login";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div
        className="flex bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
        <SideBar />
        <div className="flex-grow text-gray-800">
          <NavBar />

          <Routes>
            <Route path="/" element={<Admin />}>
              <Route index element={<Admin />} />
            </Route>
            <Route path="/deparments" element={<Deparments />} />
            <Route path="/fields" element={<Field />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
