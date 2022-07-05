import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  state = {
    errorText: ''
  };

  /* handleInputChanged = (event) => {
    const value = event.target.value;
      if (value >= 1 && value <= 32) {
        this.setState({ numberOfEvents: value });
        if (this.props.updateEventNumbers) 
          this.props.updateEventNumbers(value);
      } else {
          console.log('Please enter a valid number.');
      }

  }; */

  handleInputChanged = event => {
    let value = event.target.value;
    if (value === '') { value = undefined};
    if (value <= 0 || value > 32) {
      this.setState({
        errorText: 'Select a number from 1 to 32'
      })
    } else {
      this.props.updateEventNumbers(value);
      this.setState({
        errorText: ''
      })
    };
  }



  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="number"
          id="events-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;