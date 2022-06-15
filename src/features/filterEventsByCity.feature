Feature 1: Filter Events By City
- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given that the app is in its default state
When the user hasn't searched for anything yet
Then the app should list upcoming events from all cities

- Scenario 2: User should see a list of suggestions when they search for a city.
Given that a search parameter is being typed in
When the user types in the city
Then the app should make a list of suggestions to match that city

- Scenario 3: User can select a city from the suggested list.
Given that a search parameter has been typed in and the app has suggested a list of matches
When the user sees the list of suggestions
Then the user should be able to select a city from the list