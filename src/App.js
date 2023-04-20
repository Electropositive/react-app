import "./old/index.css";

import "./old/font_face.css";
import Materialbar from "./components/Materialbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Including Pages
import Home  from "./components/Home";
import Anime from "./components/Anime";

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <header>

        {/* Importing Materialbar */}
        <Materialbar />

        {/* Importing Navbar */}
        <Navbar />

        {/* importing routes */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Anime" element={<Anime />} />
        </Routes>

      </header>

      {/* Importing footer */}
      <Footer />
    </>
  );
}

export default App;
