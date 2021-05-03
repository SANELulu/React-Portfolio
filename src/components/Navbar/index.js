import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Item 1
      </a>
      <a class="navbar-brand" href="/Item2">
        Item 2
      </a>
      <a class="navbar-brand" href="/Item3">
        Item 3
      </a>
      <a class="navbar-brand" href="/Item4">
        Item 4
      </a>
    </nav>
  );
}

export default Navbar;
