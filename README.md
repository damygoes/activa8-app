# ACTIVATE

#### _An activity finder app_

ACTIVATE is an app that helps you find, or rather suggests an activity to do when you run out of ideas or are bored. It is able to do this by connecting to the BoredAPI to fetch and suggest activities to users.

## Tools

The app is built using React JS, REST API, FramerMotion and CSS. I used React because of the benefits of single page applications and FramerMotion for simple, fast and responsive animations.

## Challenges

At the time of building this app, I faced a few challenges with structuring the project in a way that would allow efficiency, functionality and scalability. I used a file structure that cramped all logic and functionality into a single file - _app.js_

### Future Improvements

In the future, I would prefer; for the purpose of efficiency and scalability, to separate all functionalities and logic into different, smaller re-useable components as well as manage all component states using a global state manager like **REDUX** or **REDUX Toolkit**. It would also be nice to implement a feature that saves activities that users like the most or actually did.

## How to use the app

ACTIVATE is very intuitive and easy to use.

- Load the app
- Click on the get started button
- Choose a category of activity that you're interested in
- Click of the **GO** button
- Then, you get an activity suggestion.

You can either proceed with the suggested activity, shuffle the suggestions or choose a different category entirely.

## Development

#### File Structure

```
── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   └── motivation.svg
│   ├── components
│   │   ├── Navbar.jsx
│   │   └── navbar.css
│   ├── index.css
│   └── index.js
└── yarn.lock
```

> As mentioned above, this file structure is not optimal and would be improved upon in the future.
