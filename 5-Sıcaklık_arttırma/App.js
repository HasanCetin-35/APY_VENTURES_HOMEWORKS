import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import Celcius from "./Celcius";
import Buton from "./Buton";

export default class App extends Component {
  SıcaklıkDegistir = (deger) => {
    this.setState({ DegisenSıcaklık: deger.Cdeger });
  };
  state = { DegisenSıcaklık: "" };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>HAVA SICAKLIGI</h1>
          </Row>

          <Row>
            <Buton SıcaklıkDegistir={this.SıcaklıkDegistir} />
          </Row>

          <Row>
            <Col xs="4">
              <Celcius DegisenSıcaklık={this.state.DegisenSıcaklık} />
            </Col>
            <Col xs="4">
              <Kelvin DegisenSıcaklık={this.state.DegisenSıcaklık} />
            </Col>

            <Col xs="4">
              <Fahrenheit DegisenSıcaklık={this.state.DegisenSıcaklık} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
