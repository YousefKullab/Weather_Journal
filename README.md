# Weather Journal App
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## How it works

1. The app uses the OpenWeatherMap API to fetch weather data for a specific location based on its latitude and longitude.
2. Users can enter their zip code and how they are feeling in the provided input fields.
3. When the "Generate" button is clicked, the app makes a POST request to the server with the weather data and user input.
4. The server stores the data in a `projectData` object and sends a success message back to the client.
5. The app then updates the UI with the retrieved data from the server.

## Techniques That Use

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

## Prerequisites

To run this app locally, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download) (with npm)

## Installation

- Clone this repository to your local machine using: `git clone git@github.com:YousefKullab/Weather_Journal.git`.
- Navigate to the project folder: `cd weather-journal-app`.
- Install the required npm packages: `npm install express body-parser cors`.
- Start the server: `node server.js`.
- Open your web browser and go to `http://localhost:3000` to access the app.

## API Key

To use the [OpenWeatherMap API](https://openweathermap.org/api), you need to sign up for an API key. Replace 'YOUR_API_KEY' with your actual API key in the `app.js` file.

## License

© Yousef Kullab