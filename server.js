/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Dependencies */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Start up an instance of app
const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listing);
function listing(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}



