import { Button, Card } from "react-bootstrap";

export default function Auto(props) {
  return (
    <Card style={{ marginTop: "2em" }} className="text-center">
      <Card.Body>
        <Card.Title>{props.auto.name}</Card.Title>
        <Card.Text>{props.auto.price}</Card.Text>
        <Card.Footer className="text-muted">
          <Button variant="primary" style={{ width: "100%" }}>
            Buy
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
