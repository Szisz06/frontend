import { useState } from "react";
import { Button, Form } from "react-bootstrap";


export default function Urlap(props) {
  const [adat, setAdat] = useState({author: "", title: ""});

  function adatValt(event){
    const masolat={...adat}
    masolat[event.target.id] = event.target.value
    setAdat(masolat)
}
function kuldes(event){
    event.preventDefault()
    props.kuldes(adat)
}

  return (
    <Form onSubmit={kuldes}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={adat.author}
          id="author"
          placeholder="Car name"
          onChange={adatValt}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" id="title" value={adat.title} onChange={adatValt} placeholder="Price" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}