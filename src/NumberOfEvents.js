import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1) {
      return this.setState({ numberOfEvents: value });
    } else {
      console.log('Please enter a valid number.');
      return this.state.numberOfEvents;
    }
  };

  render() {
    return (
      <div>
        <Form>
        <Form.Label>Number of Events: </Form.Label>
        <Form.Control
          type="text"
          id="events-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        </Form>
      </div>
    );
  }
}
export default NumberOfEvents;