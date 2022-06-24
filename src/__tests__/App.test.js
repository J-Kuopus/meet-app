import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> integration', () => {
  // Integration Tests
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  // Integration tests for Number Of Events
  test('the default value of number of events is 32', async () => {
    const AppWrapper = mount(<App />);
    expect(AppWrapper.state('numberOfEvents')).toBe(32);
    AppWrapper.unmount();
  });

  test('the state of NumberOfEvents is updated, when input number is changed', () => {
    let AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 12 } };
    NumberOfEventsWrapper.find('#events-number').at(0).simulate('change', eventObject);
    expect(AppWrapper.state('numberOfEvents')).toBe(12);
    AppWrapper.unmount();
  });


  test('if user enters number larger than number of available events', async () => {
    let AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 5 } };
    NumberOfEventsWrapper.find('#events-number').at(0).simulate('change', eventObject);
    await getEvents();
    AppWrapper.update();
    const EventListWrapper = AppWrapper.find(EventList);
    expect(AppWrapper.state('events')).toHaveLength(mockData.length);
    expect(EventListWrapper.props().events).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });

/*   test('if user enters number lower than number of available events', async () => {
    let AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 1 } };
    NumberOfEventsWrapper.find('#events-number').simulate('change', eventObject);
    await getEvents();
    AppWrapper.update();
    const EventListWrapper = AppWrapper.find(EventList);
    expect(AppWrapper.state('events')).toHaveLength(mockData.length);
    expect(EventListWrapper.props().events).toHaveLength(mockData.length);
    AppWrapper.unmount();
  }); */

});

// Component Tests
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });

      test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
      });

      test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
      });
});