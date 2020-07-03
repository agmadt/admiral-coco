require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const helmet = require('helmet');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || '3000');

let server = http.createServer(app);
server.timeout = 20000;
server.listen(app.port);

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

module.exports = app;