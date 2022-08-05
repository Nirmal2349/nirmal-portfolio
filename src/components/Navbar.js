import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navlink">
        <NavLink activeclassName="active" className="link" to="/" >
          <HomeIcon sx={{ fontSize: "40px" }} />
        </NavLink>
        <NavLink activeclassName="active" className="link" to="/Project">
          <WorkspacePremiumIcon sx={{ fontSize: "40px" }} />
        </NavLink>
        <NavLink activeclassName="active" className="link" to="/Contact">
          <ContactMailIcon sx={{ fontSize: "40px" }} />
        </NavLink>
      </div>
    </div>
  );
}
