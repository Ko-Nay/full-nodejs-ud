const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(4000);
