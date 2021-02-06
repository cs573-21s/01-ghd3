// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.use(express.static("."));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests :)
// const listener = app.listen(process.env.PORT, () => {
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
