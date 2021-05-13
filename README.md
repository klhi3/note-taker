# 11  Note Taker

Note Taker that can be used to write and save notes. This application uses an Express.js back end and save and retrieve note data from a JSON file.

Connect to the application’s front end and the back end, and then deploy the entire application to Heroku.


## Features : note-taking application

1. write and save notes to organize my thoughts and keep track of tasks I need to complete
2. presented with a landing page with a link to a notes page
3. click on the link to the notes page
4. presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
5. enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
6. click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
7. click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
8. click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column



## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).


## Bonus


* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.





