import DataService from "../modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Autos from "../view/Autos";
const DB = new DataService();

function Auto() {
  let vegpont = "/autos";
  const lista = ["Id", "Name", "Year", "Fuel type", "", ""];
  const [objLista, setObjLista] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont, setObjLista);
  }, []);

  return (
    <div className="Auto">
      <Container>
        <Row>
          <Autos autos={objLista} />
        </Row>
      </Container>
    </div>
  );
}

export default Auto;
