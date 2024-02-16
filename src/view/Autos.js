import OneAuto from "./OneAuto";
import Col from "react-bootstrap/Col";

export default function Auto(props) {
  function show(lista) {
    // ha a lista nem null
    return lista && lista.map((elem, index) => {
      return (
        <Col md={3} lg={4} key={index}>
          <OneAuto auto={elem} />
        </Col>
      );
    });
  }
  return show(props.autos);
}