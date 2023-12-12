import React, { useEffect } from "react";
import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { About } from "./About";
import { ContactForm } from "./Contact";
import { Footer } from "./Footer";
import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "G-ZPK1ZY28GR"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "Custom Title",
  });
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ isDarkMode });
  }, [isDarkMode]);

  return (
    <div>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/movies" element={<Movies isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route
          path="/contact"
          element={<ContactForm isDarkMode={isDarkMode} />}
        />
      </Routes>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
