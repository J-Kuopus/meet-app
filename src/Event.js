import React, { Component } from 'react';
import { mockData } from './mock-data';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    this.setState({ showDetails: true })
  }

  handleHideDetails = () => {
    this.setState({ showDetails: false })
  }

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h3 className="title">{event.summary}</h3>
        <br/>
        <p className="start-time">
          {event.start.dateTime} {event.start.timeZone}
        </p>
        <p className="location">{event.location}</p>
        <br/>
        {!this.state.showDetails && <button className="btn-details" onClick={this.handleShowDetails}>
          show details
        </button>}
        {this.state.showDetails && <p className="event-details">{this.props.event.description}</p>}
        {this.state.showDetails && <button className="btn-details-hide" onClick={this.handleHideDetails}>hide details</button>}
      </div>
    );
  }
}
export default Event;