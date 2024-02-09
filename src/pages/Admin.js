/*import React from "react";
import { Row } from "react-bootstrap";
//import PicturesModel from "../modell/PicturesModell";
//import Card from "../view/Card";

export default function Pictures(props) {
//  const picturesModel = new PicturesModel();
  //const pictureList = picturesModel.getList();

  return (
    <div className="pictures">
      <h2>See the best pictures of my dog, buy your favorite</h2>
      
    </div>
  );
}
/**<Row xs={1} md={3}>
        {pictureList.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </Row> */




//import "./App.css";
//import Konyvek from "./component/kartyak/Konyvek";
import DataService from "../modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
//import Tablazatom from "./component/tablazatom/Tablazatom";
import Urlap from "../view/Urlap";
const DB = new DataService();

function Admin() {
  let vegpont = "/autos";
  // Konyvek, Cella js-ben leellenőrizzük, hogy null az értéke vagy sem
  const lista = ["Id", "Name", "Year", "Fuel type", "", ""];
  const [objLista, setObjLista] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont, setObjLista);
  }, []);

 /** function delete(id) {
    console.log("Admin.js");
    DB.deleteData(vegpont, id);
  }*/

  function send(adat) {
    DB.postData(vegpont, adat);
    setObjLista([...objLista, adat])

    console.log("send:", adat);
  } 
  return (
    <div className="Admin">
      <Container>
        <Row>
          <Urlap send={send} />
        </Row>
      </Container>
      
    </div>
  );
}

export default Admin;

/*       <Row style={{ marginTop: "2em" }}>
          <Konyvek konyvek={objLista} />
        </Row>
        <Row>
          <Tablazatom adatok={objLista} lista={lista} delete={delete} />
        </Row> */
