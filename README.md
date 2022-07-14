# Weather Forecaster React Project

This weather forecast project can be ran using npm
start. This project was made to test my knowledge 
with redux, proptypes, eslinter, and unit plus
component testing.
If a user enters an invalid location, then they 
will receive a prompt to search for a valid 
location.

#### [Description](#description) | [Demo](#demo) | [Important Git/GitHub Expectations](#important-gitgithub-expectations) | [Important Notes on APIs](#important-notes-on-apis) | [Getting Started](#getting-started) | [Requirements](#requirements) | [Bonuses](#bonuses)

---------

## Description:
In the next week or two, you will be building a React app similar to the demo seen below. This app will firm up your existing knowledge of the React basics (components, JSX, props, event handling, using forms, making API calls, basic hooks) and allow you to practice with React best practices like an ErrorBoundaries, PropTypes, ESLint (to enforce code style consistency), and writing component and unit tests.

Each individual will complete their project in a GitHub repository. Even though this is an individual project and not a pair or group project, you will still use branches for each feature that you add to your app, use Pull Requests to merge completed code into your `main` branch, and follow other Git best practices. 

You are encouraged to collaborate with your fellow Bytes to discuss strategy, debug issues, review code, etc. Sarah will also offer optional code sessions in the coming days to talk through and build some of the more complex site functionalities.

Below you will see a demo of Weather Forecaster app, that initially loads WeatherBit forecast data for a hardcoded location (Fresno), and displays this information to the user via seven individual card components, one for each day of the week. The user can then click on an individual forecast day to view detailed forecast information, or choose instead to search for weather in a new location.

**Note that this demo uses the WeatherBit API, one option among many for weather forecast data. The code sessions Sarah will offer will use this API, but you are welcome to use an alternate weather API if you like. Please know however that if you do choose an alternate weather API, the code and concepts covered in the code sessions may not work properly for your app.** 

---------

## Demo:

![Weather Forecaster Functionality Demo](weather-forecaster-demo.gif)

[View larger version of demo here](https://watch.screencastify.com/v/oOK2ttb6XrB2suEhz2Mh).

---------

## Important Git/GitHub Expectations:

- [ ] Each person should create a GitHub repository for their app, and should add two Byte Me teammates **AND** `scullenBitwise` as collaborators. After the repo is set up, add [branch protections](https://docs.github.com/en/enterprise-server@3.2/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) that require at least one PR approval before merging into `main`.
- [ ] Although each Byte will complete their own project, the collaborators discussed above will review each PR you make so that it can be extensively code-reviewed by at least one teammate.
- [ ] All work should be done within branches, and code should only be moved to your `main`/`master` branch by way of teammate-approved pull requests. As you work, do regular adds/commits to give yourself multiple "save points" just in case something goes wrong.
- [ ] **It is very important that you create a new branch off of the updated `main` branch every time you start a new feature. This branch should be used to complete the functionality associated with that branch and should be named accordingly.** Once the feature/functionality in this branch is finished, a PR can be made to merge the branch into `main`, and a new branch can be created for your next task. **This process is crucial to minimizing merge conflicts and mimicking the workflow you'll use once you join a development team.**
- [ ] Use clear, descriptive, and professional commit messages. (This will make things easier if you ever have to revert to a prior commit, and it looks great to potential employers!)
- [ ] Reference the [Git Collaboration Workflow document](https://github.com/scullenBitwise/git-collaboration-workflow) for a list of Git best practices!

---------

## Important Notes on APIs:

Immediately begin researching a weather API (remember that [WeatherBit](https://www.weatherbit.io/) is one option!) and a geocoding API.

### Notes on the WeatherBit API:
If you choose to use the WeatherBit API, you will discover quickly that the API's free tier limits you to a mere 500 requests per day. To work around this issue, you can use the demo JSON data included here (`weatherBit-sample-data.json`) to build out the core functionality of the app. Note that the provided data is actual data retrieved from the API's `https://api.weatherbit.io/v2.0/forecast/daily` endpoint effective 5/24/22.

Then, once you get the 7-day forecast, weather forecast details, etc wired up using the provided static data, switch over to using the actual API to load live data for each weather search. This workflow will help you avoid burning through the 500 requests each day, as you'll only be using the live API once the majority of your app's functionality is already completed.

### Choosing an API:
When selecting an API, consider the following recommendations:

- Make sure the API is free or has a free tier.
- **tl;dr: Make sure the API allows LOTS of free requests!** APIs often limit the number of requests you can make per day or month. Make sure this number is generous: every time your app reloads it will likely kick off one or more API requests. Remember that if you're making lots of small changes to your app and saving those files, React will hot reload after every save, thus potentially kicking off more API requests with every save. 
- Make sure the API either requires no authentication or simple authentication, else it may not be workable in a front-end-only app.
- Make sure the API returns data in JSON format.
- Make sure the API has good documentation.
- **Make sure that the API outputs the data your app needs!!!** You can test this initially in Postman or Insomnia. After confirming that the data is returned correctly there, now you must verify you can access the same data through your React app, which is front-end-only. **NOTE: Some APIs will work properly through Postman or Insomnia but will *not* return data to a front-end app like React, due to a lack of CORS permissions on the API server.**
    * If you run into issues re: the bullet point above, read more about CORS below to determine whether you can find a functional workaround for this project.

### CORS (Cross-Origin Resource Sharing):
Since your app will be front-end-only (with no back-end server), there are some APIs that will not work for you due to a lack of CORS permissions on the API server. Learn more about CORS below, and take a look at one potential workaround:

- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [What are CORS proxies, and when are they safe?](https://httptoolkit.tech/blog/cors-proxies/)
- [CORS Anywhere](https://cors-anywhere.herokuapp.com/) - this is one of those less-than-ideal and somewhat risky resources discussed in the article above... but for a simple project like this one with no secure data being transmitted, it's okay in a pinch.

---------

## Getting Started

- [ ] Take time to read through the [core requirements](#requirements) below, and think through what components your app will need, what data you'll need to access, what you might store in state, etc.
- [ ] Next, build out simple wireframes for your app using [wireframe.cc](https://wireframe.cc/), [Figma](https://www.figma.com/) or a similar tool. Use these wireframes to determine how to divide your app up into modular components, and to determine how best to prioritize the necessary tasks.
- [ ] Consider using [Trello](http://trello.com) to create a project board to track tasks, priorities, and deadlines, and for visibility into project progress and remaining priorities. [See here](https://trello.com/b/WjhFXOdJ/demo-project-board) for an example of how one might be organized.
- [ ] Use create-react-app to generate a new React application for your app: `npx create-react-app project-name-here`. If you need help getting your project linked up to a GitHub repo, just ask! Once this code has been merged into the `main`/`master` branch, you're ready to start initial development!
- [ ] Use the demos provided in class for reference. [Here](https://github.com/scullenBitwise/react-apprenticeship) is a link to the full demo repo.
- [ ] Dig into the React or JavaScript documentation if you get stuck!
- [ ] When you run into a bug or other unexpected behavior, use your debugging tools wisely: read error messages critically, set breakpoints, use `console.log()` and watch variables, use your Google Fu, etc.
- [ ] Challenge yourself to use ES6 syntax whenever possible: arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc.

---------

## Requirements:

- [ ] Your app should be set up to use ESLint with the Airbnb style guide and Prettier.
- [ ] Your app should have the following `devDependencies` installed: `eslint eslint-config-airbnb eslint-config-node eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier`
- [ ] Your app should also contain `.eslintignore`, `.eslintrc.json`, and `.prettierrc` files in the root directory, based on the demo files provided here. Note that you can choose to override some of the default linter rules if necessary, but should strive to stick with the recommended Airbnb rules as much as possible.
- [ ] **No code should be merged into `main` until ALL linter errors are corrected.**
- [ ] **No code should be merged into `main` until all console and Terminal errors and warnings are corrected.**
- [ ] Your app should contain a functional error boundary that displays an alternate UI in case of component error.
- [ ] Each component that receives props must have React PropTypes and DefaultProps.
- [ ] Your app should have passing component tests for at least two of your main components (SearchBar, DayCard, DayDetails, etc). Any utility functions your app uses (with exception to API calls) should have thorough unit test coverage.
- [ ] Upon initial render, your app should load a 7-day weather forecaset for the default location of your choice.
- [ ] Your app should have a search bar that allows a user to specify a new location to search in. After user search, the app should render weather forecast data for the new location.
- [ ] The user of your app should be able to enter either a city/state, a zip code, an address, or a landmark for their search term. If your weather API relies on a lat/lon for search, use a geocoder to convert the human-friendly search into location coordinates.
- [ ] Each component's props should be destructured for component readibility.
- [ ] Pull data from your external APIs using `axios`, `fetch`, or a similar tool.
- [ ] Hide any API keys using a `.env.local` file.
- [ ] Your app should have multiple components. Use props to pass data from parent components into child components to allow customization of the child components. (Sometimes it's easiest to start with one or two big components, and to break code out into smaller, more specific components after the core functionality is in place.)
- [ ] Make your code as DRY (**D**on't **R**epeat **Y**ourself) as possible!

---------

## Bonuses:

- [ ] Use a React-specific CSS framework like [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) or [React Materialize](https://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome) to jumpstart your styling, and to ensure mobile responsiveness.
- [ ] Disable the search button until the user has entered a search value.
- [ ] Install React Router and route users to a separate page to view forecast details.
- [ ] Have your app auto-detect a user's location on render (if that feature is enabled on the user's end) and use this location to render the initial weather forecast.
- [ ] Consider implementing autocomplete functionality on your location search field. (Use an autocomplete API for this.)
- [ ] Practice using [Bitwise's official commit message format](https://github.com/Shift3/standards-and-practices/blob/main/standards/commits.md).
- [ ] Deploy your app and share the url with the team so we can all try it!
- [ ] Write a detailed README.md file using best practices: [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [ ] Look into using [Storybook](https://storybook.js.org/docs/react/get-started/introduction) as a tool for building, standardizing, and documenting your React components in isolation.
