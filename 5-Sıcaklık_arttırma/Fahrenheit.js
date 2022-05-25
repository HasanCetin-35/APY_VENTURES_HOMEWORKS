import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h3>Fahrenheit :{33.8+this.props.DegisenSıcaklık}</h3>
      </div>
    );
  }
}
