import { Box, TextField } from "@mui/material";

import armyOfThieves from "./Images/armyofthieves.jpeg";
import mortalKombat from "./Images/mortalkombat.jpeg";
import mulan from "./Images/mulan.jpeg";
import shadowInTheCloud from "./Images/shadowinthecloud.jpeg";
import sonic from "./Images/sonic.jpeg";
import theMercenary from "./Images/themercenary.jpeg";
import nomansland from "./Images/nomansland.jpeg";
import moneyPlane from "./Images/moneyplane.jpeg";
import { useState } from "react";

const movies = [
  { url: armyOfThieves, name: "armyofthieves" },
  { url: mortalKombat, name: "mortalkombat" },
  { url: mulan, name: "mulan" },
  { url: shadowInTheCloud, name: "shadowinthecloud" },
  { url: sonic, name: "sonic" },
  { url: theMercenary, name: "themercenary" },
  { url: nomansland, name: "nomansland" },
  { url: moneyPlane, name: "moneyplane" },
];

export function Movies() {
  const [inputValue, setInputValue] = useState("");
  // const [filteredCars, setFilteredCars] = useState(cass);
  const [filtered, setFiltered] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100vw",
        backgroundColor: "#31304D",
        boxSizing: "border-box",
        pt: "10vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "#31304D",
          justifyContent: "center",
          padding: 2,
          position: "fixed",
        }}
      >
        <TextField
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-notchedOutline:focus": {
              borderColor: "white",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          boxSizing: "border-box",
          flexWrap: "wrap",
          backgroundColor: "transparent",
          justifyContent: "center",
          gap: { xs: 2, lg: 10 },
          padding: 5,
          pt: "15vh",
        }}
      >
        {movies
          .filter(
            (movie) =>
              !inputValue ||
              movie.name.includes(inputValue.toLowerCase().replaceAll(" ", ""))
          )
          .map((movie) => (
            <Box
              sx={{
                height: { xs: 200, lg: 400 },
                width: { xs: 150, lg: 300 },
                backgroundColor: "white",
                objectFit: "cover",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={movie.url}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
