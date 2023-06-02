import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./common/navBar";
import Admin from "./routes/admin/admin";
import Deparments from "./routes/admin/childerns/department";
import Demo from "./routes/demo";
import Login from "./routes/Auth/login";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div
        className="bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
        <div className="text-gray-800">
          <NavBar />

          <Routes>
            <Route path="/" element={<Admin />}>
              <Route index element={<Admin />} />
            </Route>
            <Route path="/deparments" element={<Deparments />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
