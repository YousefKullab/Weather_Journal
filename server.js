/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Dependencies */
const express = require('express')
const cors = require('cors')

// Start up an instance of app
const app = express();

/* Middleware */
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listing);
function listing(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

// Get route that return the projectData
app.get('/data', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});

// Post route that add incoming data to projectData
app.post('/addData', (req, res) =>{
    const { temp, date, user_res} = req.body;
    const newEntry = {
        temp,
        date,
        user_res
    };
    projectData = newEntry;
    res.send({message: "Data added successfully"});
});

