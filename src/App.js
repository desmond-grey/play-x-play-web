import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>Foo</Col>
          <Col>Bar</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
