import React from "react";
import logo from "../images/Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Logo" />
      <div className="course-txt">React course - project 3</div>
    </header>
  );
}
