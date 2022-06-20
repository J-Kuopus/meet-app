Feature: Specify Number Of Events

Scenario: When user has not specified a number, 32 is the default number
Given that a list of events for a location are displayed
When the user hasn't specified a number of events
Then the default number of events listed for that location should be 32

Scenario: User can change the number of events they want to see
Given that the default number of events are listed
When the user inserts a number into the 'number of events' field
Then the number of events displayed should match the number that was inserted