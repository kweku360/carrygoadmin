const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { ServerLocation } = require("@reach/router");
const App = require("./src/app");
const path = require("path");
const fs = require("fs");
const app = express();

const html = fs.readFileSync("build/index.html").toString();

const parts = html.split("Loading");

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
  const reactMarkup = <ServerLocation url={req.url}></ServerLocation>;
  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

app.listen(process.env.PORT || 12345);

//app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
