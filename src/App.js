import React, { Component, Fragment } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
    offlineText: '',
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    if (navigator.onLine && !window.location.href.startsWith('http://localhost')) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");

      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events,
              locations: extractLocations(events),
              offlineText: ''
            });
          }
        });
      }
    } else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events,
            locations: extractLocations(events),
            offlineText: 'No internet connection. Event list may not be up to date',
            showWelcomeScreen: false
          });
        }
      });
    }
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


  updateEventNumbers = (eventNumbers) => {
    this.setState({
      numberOfEvents: eventNumbers,
    });
    this.updateEvents(this.state.location, eventNumbers);

  };

  render() {
    if (this.state.showWelcomeScreen === undefined) 
    return <div className="App" />

    const { events, locations, numberOfEvents, offlineText } = this.state;

    return (
    <Fragment>
      <div className="Header">
        <h1>Meet App</h1>
        <br/>
        <br/>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <br/>
        <NumberOfEvents updateEventNumbers={this.updateEventNumbers}/>
        <br/>
      </div>
      <div className="App">
        <OfflineAlert text={offlineText} />
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
                       getAccessToken={() => { getAccessToken() }} />
      </div>
    </Fragment>
    );
  }
}

export default App;

