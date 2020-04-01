//Here hare the routes that will go search properties from the db
const express = require("express");
const router = express.Router();
const { Propiedades } = require("../models/index");
const { Op } = require("sequelize");

//Route that goes to the db by searching parameter
//The first route will search with params
router.get("/search/:propiedades", (req, res, next) => {
  //this bellow sets the filters so the searching brings filtered data properly
  const search = req.params.propiedades.toLowerCase();
  // const first = propiedades.substr(1, propiedades.length);
  // const firstLetter = propiedades.toUpperCase().substr(0, 1);
  // const search = firstLetter + first;

  Propiedades.findAll()
    .then(data => {
      if (!data) res.sendStatus(404);
      const propertiesFilter = data.filter(
        propiedades =>
        propiedades.nombre.toLowerCase().includes(search) ||
        propiedades.descripcion.toLowerCase().includes(search) ||
        propiedades.ubicacion.toLowerCase().includes(search)
      );
      res.json(propertiesFilter);
    })
    .catch(err => {
      throw new Error(err);
    });
});

//This one goes looking for all properties in the db
router.get("/all", (req, res, next) => {

  Propiedades.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
});

//This one finds the single property by id
router.get("/:id", (req, res, next) => {
  Propiedades.findByPk(req.params.id).then(data => {
    res.json(data);
  });
});

module.exports = router;
