import React, { Component } from 'react';
import AddNote from './AddNote';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  state = {
    notes: [],
  };

  handleAddNote = async (note) => {
    const url = 'http://localhost:3001/notes';
    const payload = {
      ...note,
      createdAdd: new Date(),
    };
    const response = await axios.post(url, payload);
    // console.log(response);

    if (response.status === 200 || response.status === 201) {
      this.setState({
        notes: this.state.notes.concat(response.data),
      });
    }
  };
  render() {
    return (
      <>
        <Container>
          <AddNote addNote={this.handleAddNote} />
        </Container>
      </>
    );
  }
}

export default App;
