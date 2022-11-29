import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Topbar />

      <div className="flex">
        <Sidebar />
        <>
          <Outlet />
        </>
      </div>
    </>
  );
};

export default Root;
