import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        given('that a list of events for a location are displayed', () => {

        });

        when('the user hasn\'t specified a number of events', () => {

        });

        then(/^the default number of events listed for that location should be (\d+)$/, (arg0) => {

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('that the default number of events are listed', () => {

        });

        when('the user inserts a number into the \'number of events\' field', () => {

        });

        then('the number of events displayed should match the number that was inserted', () => {

        });
    });
});

