import instagram from "./Images/instagram.png";
import wapp from "./Images/social.png";
import facebook from "./Images/facebook.png";
import { Typography } from "@mui/material";
import { COLORS } from "./Header";

export function Footer({ isDarkMode }) {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "10vh",
        boxSizing: "border-box",
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        position: "sticky",
        backgroundColor: !isDarkMode ? "#e6e4e0" : COLORS.ligtherDarkBg,
      }}
    >
      <Typography color={!isDarkMode ? COLORS.ligtherDarkBg : "#F0ECE5"}>
        Reach us on social media:
      </Typography>
      <img
        src={instagram}
        style={{ height: 30, width: 30, cursor: "pointer" }}
      />
      <img src={wapp} style={{ height: 30, width: 30, cursor: "pointer" }} />
      <img
        src={facebook}
        style={{ height: 30, width: 30, cursor: "pointer" }}
      />
    </div>
  );
}
