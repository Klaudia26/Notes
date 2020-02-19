import React, { Component } from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    const url = 'http://localhost:3001/notes';
    const response = await axios.get(url);

    this.setState({
      notes: response.data,
    });
  }

  handleAddNote = async (note) => {
    const url = 'http://localhost:3001/notes';
    const payload = {
      ...note,
      createdAdd: new Date(),
    };
    const response = await axios.post(url, payload);

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
          <Divider />
          <NotesList notes={this.state.notes} />
        </Container>
      </>
    );
  }
}

export default App;
