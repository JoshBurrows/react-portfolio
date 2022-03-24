import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function ECommerce() {
  return (
    <Card className="myCard">
      <Card.Img
        variant="top"
        alt="ecommerce site screenshot"
        src={require("../images/my-merch.png")}
      />
      <Card.Body>
        <Card.Title>E-commerce</Card.Title>
        <Card.Text>
          I made this using Bootstrap Studio and Reflow. Bootstrap studio is a
          development environment similar to wordpress. This is hosted on GitHub
          pages. It works, but please dont buy anything.
        </Card.Text>
      </Card.Body>
      <ListGroup horizontal className="d-flex justify-content-center flex-wrap">
        <ListGroupItem variant="primary">HTML</ListGroupItem>
        <ListGroupItem variant="secondary">CSS</ListGroupItem>
        <ListGroupItem variant="success">JS</ListGroupItem>
        <ListGroupItem variant="primary">Git</ListGroupItem>
        <ListGroupItem variant="secondary">GitHub</ListGroupItem>
        <ListGroupItem variant="success">Bootstrap Studio</ListGroupItem>
        <ListGroupItem variant="primary">Reflow</ListGroupItem>
      </ListGroup>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JoshBurrows/my-merchandise"
      >
        Source Code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://joshburrows.github.io/my-merchandise/"
      >
        Live Version
      </a>
    </Card>
  );
}
