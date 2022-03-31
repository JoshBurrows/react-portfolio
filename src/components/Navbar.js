import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navigation() {
  const navigate = useNavigate();
  const handleContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  const handleProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
  };
  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  return (
    <Navbar className="navBar" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={require("../images/favicon-32x32.png")} />
        </Navbar.Brand>
      </Container>

      <Nav className="btnContainer">
        <Nav.Link className="btn bg-info text-white" onClick={handleProjects}>
          Projects
        </Nav.Link>
        <Nav.Link className="btn bg-info text-white" onClick={handleContact}>
          Contact
        </Nav.Link>
        <Nav.Link className="btn bg-info text-white" onClick={handleAbout}>
          About Me
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
