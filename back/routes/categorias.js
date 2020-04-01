//Here hare the routes that will go search categories from the db
const express = require("express");
const router = express.Router();
const { Categoria, Propiedades } = require("../models/index");
const { Op } = require("sequelize");

router.get("/all", (req, res, next) => {
  Categoria.findAll().then(data => res.json(data));
});

router.get("/single/:id", (req, res, next) => {
  Categoria.findAll({
    include: [
      {
        model: Propiedades
      }
    ],
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
});

module.exports = router;