import React, { Component } from 'react';
import { mockData } from './mock-data';
import Button from 'react-bootstrap/Button';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.state.collapsed
      ? this.setState({ collapsed: false })
      : this.setState({ collapsed: true });
  };

  showSummary = () => {
    if (this.state.collapsed === false) {
      return mockData[0].description;
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h3 className="title">{event.summary}</h3>
        <p className="start-time">
          {event.start.dateTime} {event.start.timeZone}
        </p>
        <p className="location">{event.location}</p>
        <Button variant="primary" className="btn-details" onClick={this.handleClick}>
          show details
        </Button>
        <div className="event-details">{this.showSummary()}</div>
      </div>
    );
  }
}
export default Event;