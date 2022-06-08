# The Meet App

This project is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The app uses the Google Calendar API to fetch upcoming events.

A user can type in an event location and the app will search for all upcoming events in the location. It will also give the users more details about the events if they choose to click on them. Aside from the list of events there is also a visual chart that represents the amount of upcoming events in the location.


## User Stories:

### Feature 2: Show/Hide An Element

Scenario 1: An event element is collapsed by default

As a user
I should be able to observe that an element has more details
So that I can choose to click on those details

Scenario 2: User can expand an event to see its details

As a user
I should be able to click on a button to expand the event details
So that I can view the details

Scenario 3: User can collapse an event to hide its details

As a user
I should be able to click a button to hide the event details
So I can continue to browse for other events


### Feature 3: Specify Number Of Events

Scenario 1: When user hasn't specified a number, 32 is the default number

As a user
I should be able to see that the default number of listed events is 32
So I can change that number should I choose to

Scenario 2: User can change the number of events they want to see

As a user
I should be able to change the number of events listed
So I can tailor it to my specific needs


### Feature 4: Use The App When Offline

Scenario 1: Show cached data when there's no internet connection

As a user
I should be able to view my cached data saved from my last session
So I can jump back into my event browsing

Scenario 2: Show error when user changes the settings (city, time range)

As a user
I should be able to see an error message when I change the settings
So that I'm aware that the settings don't fit the event locations and times listed


### Feature 5: Data Visualization

Scenario 1: Show a chart with the number of upcoming events in each city

As a user
I should be able to view a chart with the number of upcoming events in each city
So that I can immediately get an idea of the number of events in each city


## Gherkin Syntax:

### Feature 2: Show/Hide An Element

Scenario 1: An event element is collapsed by default
Given that the user hasn't opened the event details
When the user views an event listing
Then the user should be able to see that the event has more details that they can click on

Scenario 2: User can expand an event to see its details
Given that the user hasn't opened the event details
When the user clicks on a button
Then the user can expand the event details to view them

Scenario 3: User can collapse an event to hide its details
Given that the user has already opened the event details
When the user clicks on a button
Then the user should be able to close the event details to keep browsing other events


### Feature 3: Specify Number Of Events

Scenario 1: When user hasn't specified a number, 32 is the default number
Given that the user has already typed in an event location
When the user enters the event location
Then the user should see that the default number of listed events is 32

Scenario 2: User can change the number of events they want to see
Given that the user has already entered an event location
When the user sees that the default number of listed events is 32
Then the user should be able to change that number to suit their needs


### Feature 4: Use The App When Offline

Scenario 1: Show cached data when there's no internet connection
Given that the user has previously used the app
When the user reopens the application offline
Then the user should be able to view their cached browsing data

Scenario 2: Show error when user changes the settings (city, time range)
Given that the user has already browsed for event listings
When the user tries to change the settings
Then the user should be able to see an error message that the settings don't correspond with the listed events


### Feature 5: Data Visualization

Scenario 1: Show a chart with the number of upcoming events in each city
Given that the user has already typed in an event location
When the user enters the event location
Then the user should be able to view a chart with the number of upcoming events in the location
