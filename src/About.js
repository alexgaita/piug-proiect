import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";
import { COLORS } from "./Header";

export function About({ isDarkMode }) {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100vw",
        backgroundColor: !isDarkMode ? "#e6e4e0" : COLORS.ligtherDarkBg,
        boxSizing: "border-box",
        padding: 5,
        pt: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: !isDarkMode ? COLORS.ligtherDarkBg : "#F0ECE5" }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: !isDarkMode ? COLORS.ligtherDarkBg : "#F0ECE5" }}
      >
        Welcome to our website, where you can read reviews about your favorite
        movies.
      </Typography>
      <ReactPlayer
        style={{ maxWidth: "80%" }}
        url="https://www.youtube.com/watch?v=H3jaIhSj23E"
      />
    </Box>
  );
}
