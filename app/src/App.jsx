import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx";
import Art from "./pages/Art.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/art" element={<Art />} />
      <Route path="/porygon" element={<Porygon/>}/>
    </Routes>

  );
}

