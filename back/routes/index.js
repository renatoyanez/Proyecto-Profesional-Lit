//Here are the routes tha will get data from the db
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db");
const propiedades = require('./propiedades')

router.use('/api/propiedades', propiedades)

module.exports = router;