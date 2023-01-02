import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../router";
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={ROUTES.post}>Post</NavLink>
      <NavLink to={ROUTES.todo}>To-dos</NavLink>
      <NavLink to={ROUTES.login}>Loging</NavLink>
    </nav>
  );
}
