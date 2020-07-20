import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Qcm from './components/Qcm';

class App extends Component {

  render() {

    return (
      <Container content = { <Qcm />}  >
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">QCM</span>
        </nav>
      </Container>
    )
  }
}

export default App;