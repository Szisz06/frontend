/*import "./App.css";
import Konyvek from "./component/kartyak/Konyvek";
import DataService from "./model/DataService";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import Tablazatom from "./component/tablazatom/Tablazatom";
import Urlap from "./component/urlap/Urlap";
const DS = new DataService();

function App() {
  let vegpont = "/autos";

  const lista = ["Id", "Szerző", "Cím", "Leírás", "", ""];
  const [objLista, setObjLista] = useState([{}]);

  useEffect(() => {
    DS.getData(vegpont, setObjLista);
  }, []);

  function torles(id) {
    console.log("App.js");
    DS.deleteData(vegpont, id);
  }

  function kuldes(adat) {
    DS.postData(vegpont, adat);
    setObjLista([...objLista, adat])

    console.log("kuldve:", adat);
  }
  return (
    <div className="App">
      <header className="App-header">
        Props, state, eseménykezelők használata, gyakorlása
      </header>
      <Container>
        <Row>
          <Urlap kuldes={kuldes} />
        </Row>
        <Row style={{ marginTop: "2em" }}>
          <Konyvek konyvek={objLista} />
        </Row>
        <Row>
          <Tablazatom adatok={objLista} lista={lista} torles={torles} />
        </Row>
      </Container>
      <footer className="App-footer">Készítette: Szlucska Dóra</footer>
    </div>
  );
}

//////////////////////
//////////////////////


export default App;*/

/*import "./App.css";
//import Konyvek from "./component/kartyak/Konyvek";
import DataService from "./modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
//import Tablazatom from "./component/tablazatom/Tablazatom";
import Urlap from "./view/Urlap";
const DB = new DataService();

function App() {
  let vegpont = "/autos";
  // Konyvek, Cella js-ben leellenőrizzük, hogy null az értéke vagy sem
  const lista = ["Id", "Name", "Year", "Fuel type", "", ""];
  const [objLista, setObjLista] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont, setObjLista);
  }, []);

 /** function delete(id) {
    console.log("App.js");
    DB.deleteData(vegpont, id);
  }*/
/*
  function send(adat) {
    DB.postData(vegpont, adat);
    setObjLista([...objLista, adat])

    console.log("send:", adat);
  } 
  return (
    <div className="App">
      <header className="App-header">
        Heo
      </header>
      <Container>
        <Row>
          <Urlap send={send} />
        </Row>
      </Container>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;

/*       <Row style={{ marginTop: "2em" }}>
          <Konyvek konyvek={objLista} />
        </Row>
        <Row>
          <Tablazatom adatok={objLista} lista={lista} delete={delete} />
        </Row> */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Auto from "./pages/Auto";
import NoPage from "./pages/NoPage";
import Navbar from "./view/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/autos" element={<Auto />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

/**<Route index element={<Pictures />} />
          <Route path="car" element={<Car />} />
          <Route path="*" element={<NoPage />} /> */
