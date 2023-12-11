import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../src/Images/logo.png";

export function Header() {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        height: "10vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "#161A30",
        padding: 20,
        gap: 20,
        position: "fixed",
      }}
    >
      <img
        src={logo}
        style={{
          height: 50,
          width: 50,
          objectFit: "fill",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
      <Button
        sx={{
          color: location.pathname === "/home" ? "#F0ECE5" : "#B6BBC4",
          borderBottom:
            location.pathname === "/home" ? "1px solid #F0ECE5" : "none",
        }}
        onClick={() => navigate("/home")}
      >
        Home
      </Button>
      <Button
        sx={{
          color: location.pathname === "/movies" ? "#F0ECE5" : "#B6BBC4",
          borderBottom:
            location.pathname === "/movies" ? "1px solid #F0ECE5" : "none",
        }}
        onClick={() => navigate("/movies")}
      >
        Movies
      </Button>
      <Button
        sx={{
          color: location.pathname === "/about" ? "#F0ECE5" : "#B6BBC4",
          borderBottom:
            location.pathname === "/about" ? "1px solid #F0ECE5" : "none",
        }}
        onClick={() => navigate("/about")}
      >
        About
      </Button>
      <Button
        sx={{
          color: location.pathname === "/contact" ? "#F0ECE5" : "#B6BBC4",
          borderBottom:
            location.pathname === "/contact" ? "1px solid #F0ECE5" : "none",
        }}
        onClick={() => navigate("/contact")}
      >
        Contact
      </Button>
    </div>
  );
}
