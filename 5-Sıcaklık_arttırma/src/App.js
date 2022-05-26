import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import "./App.css";

function App() {
  let [cel, setcel] = useState(0);
  let [fah, setFah] = useState(33.8);
  let [kel, setKel] = useState(-273);
  const setCelciusincrease = () => {
    //bir fonksiyon tanımlayarak içerisine set yani değiştirilebilir elemanı alıp cel,fah ve kel değişkenlerini arttırma işlemi yaptım.
    setcel(cel + 1);
    setFah(fah + 1);
    setKel(kel + 1);
  };
  const setCelciusdecrease = () => {
    setcel(cel - 1);
    setFah(fah - 1);
    setKel(kel - 1);
  };
  return (
    <div className="App">
      <Container>
        <h2>Şuan ki Hava sıcaklığı : {cel}</h2>
        <br />
        <Row>
          <Col>
            <h3>
              <Kelvin /> {cel}
            </h3>
          </Col>
          <Col>
            <h3>
              <Fahrenheit /> {fah}
            </h3>
          </Col>
          <Col>
            <h3>
              <Kelvin />{kel}
            </h3>
          </Col>
        </Row>

        <button onClick={() => setCelciusincrease()}>Sıcaklık Arttır</button>
        <button onClick={() => setCelciusdecrease()}>Sıcaklık Azalt</button>
      </Container>
      <br />
    </div>
  );
}

export default App;
