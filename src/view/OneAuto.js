import { Button, Card } from "react-bootstrap";

export default function OneAuto(props) {
  return (
    <Card style={{ marginTop: "2em" }} className="text-center">
      <Card.Body>
        <Card.Title>{props.auto.name}</Card.Title>
        <Card.Text>{props.auto.price}$ <br /> {props.auto.fuel_type}</Card.Text>
        <Card.Footer className="text-muted">
          <Button variant="primary" className="btn btn-dark" style={{ width: "100%" }}>
            Buy
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
