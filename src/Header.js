import { Button, Typography, Image } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../src/Images/logo.png";
import { CustomSwitch } from "../src/Switch";
import React, { useCallback, useState, useEffect } from "react";

export const COLORS = {
  darkBg: "#B6BBC4",
  lightBg: "#161A30",
  lightTxt: "#F0ECE5",
  whiteTxt: "#FFFFFF",
  ligtherDarkBg: "#31304D",
};

export function Header({ isDarkMode, setDarkMode }) {
  let navigate = useNavigate();
  const location = useLocation();

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const computeImageShown = useCallback(() => {
    return screenSize.width > 600 ? "block" : "none";
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const computeTextColor = useCallback(
    (loc) => {
      const isInLocation = location.pathname === loc;

      console.log("location", isInLocation);

      console.log("isDarkMode", isDarkMode);

      if (isDarkMode && isInLocation) return COLORS.whiteTxt;

      if (!isDarkMode && isInLocation) return COLORS.ligtherDarkBg;

      if (isDarkMode && !isInLocation) return COLORS.darkBg;

      return COLORS.ligtherDarkBg;
    },
    [isDarkMode, location.pathname]
  );

  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        height: "10vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: isDarkMode ? "#161A30" : "#B6BBC4",
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
          display: computeImageShown(),
        }}
      />
      <Button
        sx={{
          color: computeTextColor("/home"),
          borderBottom:
            location.pathname === "/home"
              ? `1px solid ${computeTextColor("/home")}`
              : "none",
        }}
        onClick={() => navigate("/home")}
      >
        Home
      </Button>
      <Button
        sx={{
          color: computeTextColor("/movies"),
          borderBottom:
            location.pathname === "/movies"
              ? `1px solid ${computeTextColor("/movies")}`
              : "none",
        }}
        onClick={() => navigate("/movies")}
      >
        Movies
      </Button>
      <Button
        sx={{
          color: computeTextColor("/about"),
          borderBottom:
            location.pathname === "/about"
              ? `1px solid ${computeTextColor("/about")}`
              : "none",
        }}
        onClick={() => navigate("/about")}
      >
        About
      </Button>
      <Button
        sx={{
          color: computeTextColor("/contact"),
          borderBottom:
            location.pathname === "/contact"
              ? `1px solid ${computeTextColor("/contact")}`
              : "none",
        }}
        onClick={() => navigate("/contact")}
      >
        Contact
      </Button>
      <CustomSwitch checked={isDarkMode} onChange={setDarkMode} />
    </div>
  );
}
