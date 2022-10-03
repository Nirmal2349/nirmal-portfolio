import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navlink">
        <NavLink
          activestyle={{
            color: "white",
          }}
          to="/"
        >
          <HomeIcon sx={{ fontSize: "40px" }} />
        </NavLink>
        <NavLink
          activestyle={{
            color: "white",
          }}
          to="/Project"
        >
          <WorkspacePremiumIcon sx={{ fontSize: "40px" }} />
        </NavLink>
        <NavLink
          activestyle={{
            color: "white",
          }}
          to="/Contact"
        >
          <ContactMailIcon sx={{ fontSize: "40px" }} />
        </NavLink>
      </div>
    </div>
  );
}
