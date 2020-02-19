import React, { Component } from 'react';
import { Form, Button, Input, TextArea } from 'semantic-ui-react';

class AddNote extends Component {
  state = {
    author: '',
    note: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      author: this.state.author,
      note: this.state.note,
    };
    this.props.addNote(note);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            control={Input}
            label="Author"
            placeholder="Author"
            onChange={this.handleChange}
            name="author"
            value={this.state.author}
          />
          <Form.Field
            control={TextArea}
            label="Note"
            placeholder="Note"
            onChange={this.handleChange}
            name="note"
            value={this.state.note}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default AddNote;
