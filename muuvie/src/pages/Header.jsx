import React from "react";
import NavList from "../components/Navlist";
import navListData from "../data/navListData";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Muuvie
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavList key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
