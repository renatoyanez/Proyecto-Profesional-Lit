//Here are the routes tha will get data from the db
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db");
const propiedades = require('./propiedades');
const user = require('./user')
const favoritos = require('./favoritos')
const categorias = require('./categorias')

router.use('/api/propiedades', propiedades)
router.use('./api/user', user)
router.use('./api/favoritos', favoritos)
router.use('./api/categorias', categorias)

module.exports = router;