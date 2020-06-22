import React, { Component } from "react";
import "./App.scss";
import Container from "./components/Container";
import Qcm from "./components/Qcm";
import Question from "./components/Question";

class App extends Component {
  render() {
    return (
      <Container>
        <Qcm />
      </Container>
    );
  }
}

export default App;
