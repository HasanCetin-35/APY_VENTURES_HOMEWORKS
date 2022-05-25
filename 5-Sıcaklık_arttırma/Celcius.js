import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h3>Celcius:{0 + this.props.DegisenSıcaklık}</h3>
      </div>
    );
  }
}
