import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
      if (value >= 1 && value <= 32) {
        this.setState({ numberOfEvents: value });
    } if (this.props.updateEventNumbers) {
        this.props.updateEventNumbers(value);
    } else {
        console.log('Please enter a valid number.');
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="events-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;