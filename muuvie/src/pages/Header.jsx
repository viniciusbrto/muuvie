import React from "react";
import "./header.css";
import NavList from "../components/Navlist";
import navListData from "../data/navListData";
import Search from "../components/Search";
import Banner from "./Banner";

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
      <Search />
      <Banner />
    </header>
  );
}

export default Header;
