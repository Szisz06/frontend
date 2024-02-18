import DataService from "../modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Tabla from "../view/Tabla";
import Urlap from "../view/Urlap";
const DB = new DataService();

function Admin() {
  let vegpont = "/autos";
  const lista = ["Id", "Name", "Year", "Fuel type"];
  const [objLista, setObjLista] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont, setObjLista);
  }, []);

  function send(adat) {
    DB.postData(vegpont, adat);
    setObjLista([...objLista, adat])
    console.log("send:", adat);
  } 

  function kattintas(id, action) {
    if (action === 'delete') {
      console.log(id);
      DB.deleteData(vegpont, id );
    } else {
      // Kezelje a többi műveletet, például a módosítást
    }
  }

  return (
    <div className="Admin">
      <Container>
        <Row>
          <Urlap send={send} />
          <Tabla obj={objLista} kattintas={kattintas} />
        </Row>
      </Container>
    </div>
  );
}

export default Admin;