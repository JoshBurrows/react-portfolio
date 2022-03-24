import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function ColorGen() {
  return (
    <Card className="myCard">
      <Card.Img
        variant="top"
        alt="screenshot of color generator"
        src={require("../images/color-gen.png")}
      />
      <Card.Body>
        <Card.Title>Color Generator</Card.Title>
        <Card.Text>
          My first completed projects. I know its a simple one, but it signified
          the first time I created something. It taught me to search for
          solutions when stuck, and dont be afraid to ask for help.
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
        href="https://github.com/JoshBurrows/color-picker"
      >
        Source Code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://joshburrows.github.io/color-picker/"
      >
        Live Version
      </a>
    </Card>
  );
}
