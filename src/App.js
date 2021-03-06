import { Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Introduction />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
