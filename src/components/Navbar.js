import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/react-portfolio">
          <img alt="logo" src={require("../images/favicon-32x32.png")} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/react-portfolio/projects">Projects</Nav.Link>
          <Nav.Link href="/react-portfolio/contact">Contact</Nav.Link>
          <Nav.Link href="/react-portfolio/about">About Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
