import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
    <Navbar bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={require("../images/favicon-32x32.png")} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={handleProjects}>Projects</Nav.Link>
          <Nav.Link onClick={handleContact}>Contact</Nav.Link>
          <Nav.Link onClick={handleAbout}>About Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
