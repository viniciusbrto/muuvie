import React from "react";

function NavList({ nav }) {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
}

export default NavList;
