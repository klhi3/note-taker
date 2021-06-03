// Dependencies
const express = require('express');
const path = require('path');
const util = require('util');
const fs = require('fs');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware
app.use(express.static(path.join(__dirname,"/public")));

//  (DATA)
const readFile = util.promisify(fs.readFile);  
const writeFile = util.promisify(fs.writeFile);
const dbFile = path.join(__dirname,'/db/db.json');
let notes;

// Routes

// res.send("Welcome Page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// res.send("Notes Page!")
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Displays all notes
// app.get('/api/notes', (req, res) => res.json(notes));
app.get('/api/notes', (req, res) =>  {
  readFile(dbFile, 'utf-8')
     .then(data => {
        return res.json(JSON.parse(data));
     })
});

// Create New Note- takes in JSON input
app.post('/api/notes', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the note
  // This works because of our body parsing middleware
  const newNote = req.body;

  readFile(dbFile, 'utf-8')
    .then(data => {
            notes = JSON.parse(data);

            notes.push(newNote);

             writeFile(dbFile, JSON.stringify(notes))
              .then(() =>{
                    console.log("added:"+newNote.title)
              });
        });
  res.json(newNote);
});


// delete note from id 
app.delete('/api/notes/:id', (req, res) => {
   const chosen = parseInt(req.params.id);
 
   console.log("chosen:"+chosen);
   readFile(dbFile, 'utf-8')
      .then(data => {
         notes = JSON.parse(data);
 
         notes.splice(chosen, 1);
         writeFile(dbFile, JSON.stringify(notes))
            .then (() =>{
                 console.log("deleted:"+chosen)
            });
     });
     res.json(chosen);
 });

 
//wild route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
