import React from "react";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <div
      className="primary p-3 "
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "1000",
        width: "100%",
      }}
    >
      <Navbar />
    </div>
  );
}

export default Header;
