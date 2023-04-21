import "./old/index.css";

import Footer from "./components/Footer";
import Materialbar from "./components/Materialbar";
import Navbar from "./components/Navbar";
import "./old/font_face.css";

// Including Pages
import Home from "./components/Home";
import Anime from "./components/Anime";
import Changelog from "./components/Changelog";
import Error from "./components/Error.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        {/* Importing Materialbar */}
        <Materialbar />

        {/* Importing Navbar */}
        <Navbar />
      </header>
      
      <Routes>
      {/* importing routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Anime" element={<Anime />} />
        <Route exact path="/history" element={<Changelog />} />
        <Route exact path="/error" element={<Error />} />
      </Routes>

      {/* Importing footer */}
      <Footer />
    </>
  );
}

export default App;
