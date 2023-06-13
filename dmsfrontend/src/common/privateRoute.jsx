import React from "react";
import { Navigate } from "react-router-dom";
import { useBoundStore } from "../store/store";

export function PrivateRoute({ children }) {
  const token = useBoundStore((store) => store.token);

  // let location = useLocation();
  // const {pathname}=location
  // console.log(pathname);

  const loginData = JSON.parse(sessionStorage.getItem("loginData"));

  const user = loginData.user;
  if (!sessionStorage.getItem("loginData")) {
    return <Navigate to="/login" />;
  } else if (user.role === "Indexer" || user.role === "General User") {
    console.log("Admin");
    return window.history.back();
  } else {
    return children;
  }
}

export function PrivateRouteForIndexer({ children }) {
  const token = useBoundStore((store) => store.token);

  // let location = useLocation();
  // const {pathname}=location
  // console.log(pathname);

  const loginData = JSON.parse(sessionStorage.getItem("loginData"));

  const user = loginData.user;
  console.log(user.role + " Hiii");
  if (!sessionStorage.getItem("loginData")) {
    return <Navigate to="/login" />;
  } else if (user.role === "Admin" || user.role === "General User") {
    console.log("Indexer");
    return window.history.back();
  } else {
    return children;
  }
}

export function PrivateRouteForgUser({ children }) {
  const token = useBoundStore((store) => store.token);

  // let location = useLocation();
  // const {pathname}=location
  // console.log(pathname);

  const loginData = JSON.parse(sessionStorage.getItem("loginData"));

  const user = loginData.user;
  console.log(user.role + " Hiii");
  if (!sessionStorage.getItem("loginData")) {
    return <Navigate to="/login" />;
  } else if (user.role === "Admin") {
    console.log("General User");
    return window.history.back();
  } else {
    return children;
  }
}
