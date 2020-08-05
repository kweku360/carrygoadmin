const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { ServerLocation } = require("@reach/router");
const App = require("./src/app");
const path = require("path");
const fs = require("fs");
const app = express();

const html = fs.readFileSync("build/index.html").toString();

const parts = html.split(`<div id="fullscreen">
<div class="centerform">
    <h1>CarryGo Africa</h1>
    <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>`);

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
    const reactMarkup = <ServerLocation url={req.url}></ServerLocation>;
    res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    res.end();
});

app.listen(process.env.PORT || 8383);











// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8383);
