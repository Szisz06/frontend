import DataService from "../modell/DataService";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Tabla from "../view/Tabla";
import Urlap from "../view/Urlap";
const DB = new DataService();

function Admin() {
  let vegpont = "/autos";
  const [objLista, setObjLista] = useState([{}]);
  const [adat, setAdat] = useState({});

  useEffect(() => {
    betolt();
  }, []);

  const betolt = () => {
    DB.getData(vegpont, setObjLista);
  }

  function send(adat) {
    if (adat.internalId) {
      const { internalId, ...updatedData } = adat;
      DB.putData(`${vegpont}/${internalId}`, updatedData, (response) => {
        console.log("modified:", response);
      });
    } else {
      DB.postData(vegpont, adat, (response) => {
        const addedItem = response; 
        setObjLista([...objLista, addedItem]);
        console.log("send:", addedItem);
      });
    }
  }
   
  
  
  function kattintas(internalId, action) {
    if (action === 'modify') {
      const selectedItem = objLista.find(item => item.auto_id === internalId);
      if (selectedItem) {

        setAdat({...selectedItem, internalId: selectedItem.auto_id}); 
      }
    } else if (action === 'delete') {
      DB.deleteData(vegpont, internalId);
    }
  }
  
  return (
    <div className="Admin">
      <Container>
        <Row>
          <Urlap send={send} adat={adat}/>
          <Tabla obj={objLista} kattintas={kattintas} />
        </Row>
      </Container>
    </div>
  );
}

export default Admin;