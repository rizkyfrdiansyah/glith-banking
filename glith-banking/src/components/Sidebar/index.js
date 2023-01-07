import React from "react";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9">
      <div className="flex flex-row items-center">
        <img src={logo} alt="sakir" className="w-9 h-9" />
        <div>Olith Banking</div>
      </div>
    </div>
  );
}
