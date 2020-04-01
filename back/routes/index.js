//Here are the routes tha will get data from the db
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db");
const propiedades = require('./propiedades');
const user = require('./user')
const favoritos = require('./favoritos')
const categorias = require('./categorias')

router.use('/propiedades', propiedades)
router.use('/user', user)
router.use('/favoritos', favoritos)
router.use('/categorias', categorias)

module.exports = router;