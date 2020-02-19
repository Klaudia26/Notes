import React, { Component } from 'react';
import AddNote from './AddNote';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <AddNote />
        </Container>
      </>
    );
  }
}

export default App;
