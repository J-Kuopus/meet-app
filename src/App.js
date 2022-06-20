import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" ? events : events.filter((event) => event.location === location);
      const eventNumberFilter =
        eventCount > locationEvents.length ? locationEvents : locationEvents.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: eventNumberFilter,
        });
      }
    });
  };

  updateEventNumbers = (numberOfEvents) => {
    this.setState({
      numberOfEvents,
    },
    this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
              <CitySearch locations={locations} updateEvents={this.updateEvents}/>
              <br/>
              <NumberOfEvents numberOfEvents={numberOfEvents} updateEventNumbers={this.updateEventNumbers}/>
              <EventList events={events}/>
      </div>
    );
  }
}

export default App;
