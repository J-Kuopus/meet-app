import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          currentLocation: location,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
              <br/>
              <NumberOfEvents numberOfEvents={this.state.numberOfEvents}/>
              <EventList events={this.state.events}/>
           </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
