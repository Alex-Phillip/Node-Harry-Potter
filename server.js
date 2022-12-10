/* We have a client requirement to build a RESTful API in Express
to manage a database of Harry Potter Characters.

This API should include:
- an endpoint that returns a list of all characters

- - this endpoint should have the ability to filter by house 
    and by name. 

- an endpoint that returns the details of a single character */

const express = require("express");

const app = express();

const port = 3000;

const data = require("./data/data.json");

app.listen(port, () => {
    console.log("API initialised!");
});

app.get("/characters", (req, res) => {

})

console.log(data);