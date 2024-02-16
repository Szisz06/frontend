//import "./App.css";
//import Konyvek from "./component/kartyak/Konyvek";
import DataService from "../modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Autos from "../view/Autos";
//import Tablazatom from "./component/tablazatom/Tablazatom";
//import Urlap from "../view/Urlap";
const DB = new DataService();

function Auto() {
  let vegpont = "/autos";
  // Konyvek, Cella js-ben leellenőrizzük, hogy null az értéke vagy sem
  const lista = ["Id", "Name", "Year", "Fuel type", "", ""];
  const [objLista, setObjLista] = useState([{}]);

 

  useEffect(() => {
    DB.getData(vegpont, setObjLista);
  }, []);

 /** function delete(id) {
    console.log("Auto.js");
    DB.deleteData(vegpont, id);
  }*/

 /* function send(adat) {
    DB.postData(vegpont, adat);
    setObjLista([...objLista, adat])

    console.log("send:", adat);
  } */

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