import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";

export function About() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100vw",
        backgroundColor: "#31304D",
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
      <Typography variant="h2" sx={{ color: "#FFFFFF" }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
        Welcome to our website, where you can read reviews about your favorite
        movies.
      </Typography>
      <ReactPlayer
        style={{ maxWidth: "80%" }}
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </Box>
  );
}
