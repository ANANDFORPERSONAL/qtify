import React from "react";
import Button from "../Button/button";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/SearchBar";

import "./navBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
