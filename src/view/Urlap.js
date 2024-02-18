import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Urlap(props) {
  const [adat, setAdat] = useState({ name: "", price: "", fuel_type: "" });

  function adatValt(event) {
    const masolat = { ...adat };
    masolat[event.target.id] = event.target.value;
    setAdat(masolat);
  }
  function kuldes(event) {
    event.preventDefault();
    props.kuldes(adat);
  }

  return (
    <Form onSubmit={kuldes}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={adat.name}
          id="name"
          placeholder="Car name"
          onChange={adatValt}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          id="price"
          value={adat.price}
          onChange={adatValt}
          placeholder="Price"
        />
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Fuel Type</Form.Label>
      <Form.Select
        id="fuel_type"
        value={adat.fuel_type}
        onChange={adatValt}
        placeholder="Fuel Type"
        readOnly
      >
        <option style={{visibility: 'hidden'}} value="">Select Fuel Type</option>
        <option value="Electric">Electric</option>
        <option value="Diesel">Diesel</option>
        <option value="Gasoline">Gasoline</option>
      </Form.Select>
    </Form.Group>
      <Button variant="primary" className="btn btn-dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}
