import React, { Component } from "react";
import axios from "axios";
import Verileri from "./Verileri";
import "./App.css";


export default class App extends Component {
  state = { veriler: [], isFetching: false };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000/json");
    this.setState({ veriler: response.data, isFetching: true });
    setTimeout(
      function () {
        this.setState({ isFetching: false });
      }.bind(this),
      1000
    );
  };

  render() {
    return (
      <div>
        {!this.state.isFetching && (
          <ul
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1rem",
              flexDirection: "column",
              backgroundColor:"white",
              width: "100%",
              height: "100vh",
              margin: "0",
              padding: "0",
            }}
          >
            <h5>
              <Verileri veriler={this.state.veriler} />
            </h5>
          </ul>
        )}
        {this.state.isFetching && (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001219",
              width: "100%",
              height: "100vh",
              margin: "0",
              padding: "0",
              color: "#FFFFFF",
            }}
          >
            Loading...
          </p>
        )}
      </div>
    );
  }
}
