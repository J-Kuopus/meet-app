import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('if number of events input is rendered', () => {
    expect(NumberOfEventsWrapper.find('#events-number')).toHaveLength(1);
  });

  test('if default number of events loaded is 32', () => {
    expect(NumberOfEventsWrapper.find('#events-number').get(0).props.value).toEqual(32);
  });

  test('if user enters number less than 1', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    NumberOfEventsWrapper.find('#events-number').simulate('change', {target: { value: -1 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });

  test('if user can change the amount of events loaded', () => {
    NumberOfEventsWrapper.find('#events-number').simulate('change', {target: { value: 10 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });
});