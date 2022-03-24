import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function LottoPicker() {
  return (
    <Card className="myCard">
      <Card.Img
        variant="top"
        alt="lotto picker screenshot"
        src={require("../images/lotto-tickets.png")}
      />
      <Card.Body>
        <Card.Title>Lotto Number Picker</Card.Title>
        <Card.Text>
          This project is made mostly with JS and manipulating the DOM. It
          helped teach me about refactoring code, manipulating the dom, and
          using GitHub. As well as, expanding my limited JS knowledge.
        </Card.Text>
      </Card.Body>
      <ListGroup horizontal className="d-flex justify-content-center flex-wrap">
        <ListGroupItem variant="primary">HTML</ListGroupItem>
        <ListGroupItem variant="secondary">CSS</ListGroupItem>
        <ListGroupItem variant="success">JS</ListGroupItem>
        <ListGroupItem variant="primary">Git</ListGroupItem>
        <ListGroupItem variant="secondary">GitHub</ListGroupItem>
        <ListGroupItem variant="success">Bootstrap</ListGroupItem>
      </ListGroup>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JoshBurrows/Lotto-Number-Picker"
      >
        Source Code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://joshburrows.github.io/Lotto-Number-Picker/"
      >
        Live Version
      </a>
    </Card>
  );
}
