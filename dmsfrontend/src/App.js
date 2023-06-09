import React, { useState } from "react";
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

function App() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div
        className="bg-gray-100 min-h-screen"
        x-data="{panel:false, menu:true}"
      >
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
