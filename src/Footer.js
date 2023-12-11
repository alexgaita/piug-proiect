import instagram from "./Images/instagram.png";
import wapp from "./Images/social.png";
import facebook from "./Images/facebook.png";
import { Typography } from "@mui/material";

export function Footer() {
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
        backgroundColor: "#31304D",
      }}
    >
      <Typography color={"white"}>Reach us on social media:</Typography>
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
