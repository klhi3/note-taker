// Dependencies

const express = require('express');
const path = require('path');

const fs = require('fs');
const note = require('./db/db.json');


// Sets up the Express App

const app = express();
const PORT = proess.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  (DATA)

const note;

// Routes

// res.send("Welcome Page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// res.send("Notes Page!")
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));


// Displays all characters
// app.get('/api/characters', (req, res) => res.json(characters));


// delete note from id 
app.get('/api/notes/:id', (req, res) => {
  const chosen = req.params.id;

  console.log(chosen);

//  read file from db.json


//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

  return res.json(db_list);
});

// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
