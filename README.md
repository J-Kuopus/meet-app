# The Meet App

This project is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The app uses the Google Calendar API to fetch upcoming events.

A user can type in an event location and the app will search for all upcoming events in the location. It will also give the users more details about the events if they choose to click on them. Aside from the list of events there is also a visual chart that represents the amount of upcoming events in the location.


## User Stories:

### Feature 1: Filter Events By City

#### - **Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**
As a user <br/>
I should be able to see a list of upcoming events from all cities by default <br/>
So that it will help me make a decision about what events and locations to search for

#### - **Scenario 2: User should see a list of suggestions when they search for a city.**
As a user <br/>
I should be able to see a list of suggestions when searching for a city <br/>
So that I can find the city I'm looking for quicker and easier

#### - **Scenario 3: User can select a city from the suggested list.**
As a user <br/>
I should be able to select a city from the suggested list of cities <br/>
So that I can search for event locations quicker and easier

### Feature 2: Show/Hide An Element

#### - **Scenario 1: An event element is collapsed by default**

As a user <br/>
I should be able to see a list of events by name <br/>
So I can browse through them quickly without having to view the details for each one

#### - **Scenario 2: User can expand an event to see its details**

As a user <br/>
I should be able to click on a button to expand the event details <br/>
So that I can view the details

#### - **Scenario 3: User can collapse an event to hide its details**

As a user <br/>
I should be able to click a button to hide the event details <br/>
So that I can hide those details


### Feature 3: Specify Number Of Events

#### - **Scenario 1: When user hasn't specified a number, 32 is the default number**

As a user <br/>
I should be able to see that the default number of listed events is 32 <br/>
So I can change that number should I choose to

#### - **Scenario 2: User can change the number of events they want to see**

As a user <br/>
I should be able to change the number of events listed <br/>
So I can tailor it to my specific needs


### Feature 4: Use The App When Offline

#### - **Scenario 1: Show cached data when there's no internet connection**

As a user <br/>
I should be able to view my cached data saved from my last session <br/>
So I can jump back into my event browsing

#### - **Scenario 2: Show error when user changes the settings (city, time range)**

As a user <br/>
I should be able to see an error message when I change the settings <br/>
So that I'm aware that the settings don't fit the event locations and times listed


### Feature 5: Data Visualization

#### - **Scenario 1: Show a chart with the number of upcoming events in each city**

As a user <br/>
I should be able to view a chart with the number of upcoming events in each city <br/>
So that I can immediately get an idea of the number of events in each city


## Gherkin Syntax:

### Feature 1: Filter Events By City

#### - **Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**
Given that the app is in its default state <br/>
When the user hasn't searched for anything yet <br/>
Then the app should list upcoming events from all cities

#### - **Scenario 2: User should see a list of suggestions when they search for a city.**
Given that a search parameter is being typed in <br/>
When the user types in the city <br/>
Then the app should make a list of suggestions to match that city

#### - **Scenario 3: User can select a city from the suggested list.**
Given that a search parameter has been typed in and the app has suggested a list of matches <br/>
When the user sees the list of suggestions <br/>
Then the user should be able to select a city from the list

### Feature 2: Show/Hide An Element

#### - **Scenario 1: An event element is collapsed by default**
Given that the events for a location are listed <br/>
When the user doesn't click on anything <br/>
Then the details for an event are collapsed

#### - **Scenario 2: User can expand an event to see its details**
Given that the events for a location are listed <br/>
When the user clicks on a specific event <br/>
Then the details for that event are expanded

#### - **Scenario 3: User can collapse an event to hide its details**
Given that the details for an event are already expanded <br/>
When the user clicks on a 'hide details' button <br/>
Then the event details should be collapsed


### Feature 3: Specify Number Of Events

#### - **Scenario 1: When user hasn't specified a number, 32 is the default number**
Given that the user has not specified the number of events they want to see <br/>
When the user searches for an event location <br/>
Then the default number of events listed for that location should be 32

#### - **Scenario 2: User can change the number of events they want to see**
Given that the default number of events are listed <br/>
When the user clicks on the default number of events <br/>
Then the user should be able to change that number to suit their needs


### Feature 4: Use The App When Offline

#### - **Scenario 1: Show cached data when there's no internet connection**
Given that app has already been used and is reopened <br/>
When the user makes no action <br/>
Then the cached data from the last session should be displayed

#### - **Scenario 2: Show error when user changes the settings (city, time range)**
Given that a location and its events are listed <br/>
When the user tries to change the settings <br/>
Then an error message should be displayed


### Feature 5: Data Visualization

#### - **Scenario 1: Show a chart with the number of upcoming events in each city**
Given that an event location has already been entered <br/>
When the user makes no action <br/>
Then a chart with the number of upcoming events in that location should be displayed
