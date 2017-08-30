const express = require('express');
const path = require('path');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, "./views")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);

app.listen(3000, function() {
  console.log('Sucessfully started express application!');
});
