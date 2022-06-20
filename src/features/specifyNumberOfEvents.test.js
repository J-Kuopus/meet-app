import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('that a list of events for a location are displayed', () => {
            AppWrapper = mount(<App />);
    });

        when('the user hasn\'t specified a number of events', () => {
            AppWrapper.update();
        });

        then(/^the default number of events listed for that location should be (\d+)$/, (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('that the default number of events are listed', () => {
            AppWrapper = mount(<App />);
        });

        when('the user inserts a number into the \'number of events\' field', () => {
            AppWrapper.update();
            AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: '1' } });
        });

        then('the number of events displayed should match the number that was inserted', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });
});

