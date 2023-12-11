import { IconButton } from "@mui/material";
import "./Menu.css";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menu({ setOpenMenu }) {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="menu">
      <IconButton onClick={() => setOpenMenu()}>
        <CloseIcon />
      </IconButton>
      <div className="menu-buttons">
        <button
          style={{ width: "80%", fontSize: "16px" }}
          className={
            ("menu-button", location.pathname === "/home" ? "active" : "")
          }
          onClick={() => {
            navigate("/home");
            setOpenMenu(false);
          }}
        >
          Home
        </button>
        <button
          style={{ width: "80%", fontSize: "16px" }}
          className={
            ("menu-button", location.pathname === "/fleet" ? "active" : "")
          }
          onClick={() => {
            navigate("/fleet");
            setOpenMenu(false);
          }}
        >
          Fleet
        </button>
        <button
          style={{ width: "80%", fontSize: "16px" }}
          className={
            ("menu-button", location.pathname === "/about" ? "active" : "")
          }
          onClick={() => {
            navigate("/about");
            setOpenMenu(false);
          }}
        >
          About
        </button>
        <button
          style={{ width: "80%", fontSize: "16px" }}
          className={
            ("menu-button", location.pathname === "/contact" ? "active" : "")
          }
          onClick={() => {
            navigate("/contact");
            setOpenMenu(false);
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
