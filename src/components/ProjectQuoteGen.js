import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function QuoteGen() {
  return (
    <Card className="myCard">
      <Card.Img
        variant="top"
        alt="screenshot of quote machine"
        src={require("../images/quoteMachineImg.png")}
      />
      <Card.Body>
        <Card.Title>Quote Generator</Card.Title>
        <Card.Text>
          I made this quote generator as part of the FreeCodeCamp curriculum.
          However, Instead of using the suggested codepen template I used
          node.js and create-react-app. Its helped me understand the component
          nature of react and passing props and states from parent to child
          components.
        </Card.Text>
      </Card.Body>
      <ListGroup horizontal className="d-flex justify-content-center flex-wrap">
        <ListGroupItem variant="primary">HTML</ListGroupItem>
        <ListGroupItem variant="secondary">CSS</ListGroupItem>
        <ListGroupItem variant="success">Node.js</ListGroupItem>
        <ListGroupItem variant="primary">React</ListGroupItem>
        <ListGroupItem variant="secondary">Bootstrap</ListGroupItem>
        <ListGroupItem variant="success">Axios</ListGroupItem>
        <ListGroupItem variant="primary">JSX</ListGroupItem>
        <ListGroupItem variant="secondary">Express</ListGroupItem>
      </ListGroup>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JoshBurrows/react-quote-machine"
      >
        Source Code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://joshburrows.github.io/react-quote-machine/"
      >
        Live Version
      </a>
    </Card>
  );
}
