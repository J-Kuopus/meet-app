import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('that the events for a location are listed', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
        });

        when('the user does not click on anything', () => {
            
        });

        then('the details for an event are collapsed', () => {
            expect(AppWrapper.find('.event')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('that the events for a location are listed', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user clicks on a specific event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2);
            AppWrapper.find('.btn-details').at(0).simulate('click');
        });

        then('the details for that event are expanded', () => {
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('that the details for an event are already expanded', () => {

        });

        when('the user clicks on a \'hide details\' button', () => {

        });

        then('the event details should be collapsed', () => {

        });
    });

});