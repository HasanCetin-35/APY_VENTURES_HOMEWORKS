import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class verileri extends Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.veriler.map((urun) => (
            <li>
              {urun.username}: {urun.name}
            </li>
          ))}
        </Container>
      </div>
    );
  }
}
