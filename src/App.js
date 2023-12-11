import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { About } from "./About";
import { ContactForm } from "./Contact";
import { Footer } from "./Footer";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-ZPK1ZY28GR"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
