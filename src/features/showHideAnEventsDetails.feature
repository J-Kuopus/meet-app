Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
Given that the events for a location are listed
When the user does not click on anything
Then the details for an event are collapsed

Scenario: User can expand an event to see its details
Given that the events for a location are listed
When the user clicks on a specific event
Then the details for that event are expanded

Scenario: User can collapse an event to hide its details
Given that the details for an event are already expanded
When the user clicks on a 'hide details' button
Then the event details should be collapsed