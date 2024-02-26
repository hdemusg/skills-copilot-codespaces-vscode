// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a GET request');
});
app.post('/comments', (req, res) => {
  res.send('This is a POST request');
});
app.put('/comments', (req, res) => {
  res.send('This is a PUT request');
});
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request');
});
// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Open terminal and run the server
// $ node comments.js
// Open browser and visit http://localhost:3000/comments
// You will see "This is a GET request"
// Open Postman and send a POST request to http://localhost:3000/comments
// You will see "This is a POST request"
// Send PUT and DELETE request to the server and see the response
// When you are done, press Ctrl+C in the terminal to stop the server

// Path: comments.js
// Create web server
