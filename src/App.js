import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route path="/react-portfolio/about" element={<About />} />
        <Route path="/react-portfolio/projects" element={<AllProjects />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
