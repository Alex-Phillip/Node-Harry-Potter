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

app.get("/characters", (req, res) => {
    let characters = data;
    let name = req.query.name;
    let house = req.query.house;
    if (name) {
        characters = characters.filter(char => char.name === name)
    }
    if (house) {
      characters = characters.filter(char => char.house === house)
    }
    res.send(characters);
    });

    app.get("/characters/:id", (req, res) => {
      const characterId = parseInt(req.params.id);
      res.send(data.find((c) => c.id === characterId));
    });
    
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });