import { Box, Typography } from "@mui/material";
import Carousel from "better-react-carousel";
import armyOfThieves from "./Images/armyofthieves.jpeg";
import mortalKombat from "./Images/mortalkombat.jpeg";
import mulan from "./Images/mulan.jpeg";
import shadowInTheCloud from "./Images/shadowinthecloud.jpeg";
import sonic from "./Images/sonic.jpeg";
import theMercenary from "./Images/themercenary.jpeg";
import nomansland from "./Images/nomansland.jpeg";
import moneyPlane from "./Images/moneyplane.jpeg";
import { COLORS } from "./Header";

const movies = [
  armyOfThieves,
  mortalKombat,
  mulan,
  shadowInTheCloud,
  sonic,
  theMercenary,
  nomansland,
  moneyPlane,
];

export function Home({ isDarkMode }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        backgroundColor: !isDarkMode ? "#e6e4e0" : COLORS.ligtherDarkBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          justifySelf: "flex-start",
          textAlign: "center",
          pt: { xs: 10, lg: 5 },
          color: !isDarkMode ? COLORS.ligtherDarkBg : "#F0ECE5",
        }}
      >
        Find reviews for your favorite movies
      </Typography>
      <Carousel cols={4} rows={1} gap={1} loop showDots autoplay={2000}>
        {movies.map((movie) => (
          <Carousel.Item>
            <img style={{ marginLeft: 30 }} width="80%" src={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}
