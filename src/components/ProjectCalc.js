import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Calc() {
  return (
    <Card className="myCard">
      <Card.Img
        variant="top"
        alt="calculator screenshot"
        src={require("../images/calc.png")}
      />
      <Card.Body>
        <Card.Title>Calculator</Card.Title>
        <Card.Text>
          This project is made mostly with JS. It is a simple calculator with
          basic functionality. Layout is done with css grid, and I was trying to
          emulate a smartphone calculator.
        </Card.Text>
      </Card.Body>
      <ListGroup horizontal className="d-flex justify-content-center flex-wrap">
        <ListGroupItem variant="primary">HTML</ListGroupItem>
        <ListGroupItem variant="secondary">CSS</ListGroupItem>
        <ListGroupItem variant="success">JS</ListGroupItem>
        <ListGroupItem variant="primary">Git</ListGroupItem>
        <ListGroupItem variant="secondary">GitHub</ListGroupItem>
      </ListGroup>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JoshBurrows/calculator"
      >
        Source Code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://joshburrows.github.io/calculator/"
      >
        Live Version
      </a>
    </Card>
  );
}
