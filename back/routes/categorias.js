//Here hare the routes that will go search categories from the db
const express = require("express");
const router = express.Router();
const { Categoria, Propiedades } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


/**** Searches by params ****/
router.get("/:categoria", (req, res, next) => {
  const lowCase = req.params.categoria.toLowerCase()
  Categoria.findAll({
    include: [
    {
      model: Propiedades
    }
  ], 
  where: {
    name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + lowCase + '%')
  }}).then((categoria) => {
    return res.json(categoria)
  })
  .catch(next)
});


router.delete("/delete/:id", (req, res, next) => {
  Categoria.destroy({
    where: { id: req.params.id }
  }).then(data => res.json(data))
  next()
});

router.delete("/delete/:categoria", (req, res, next) => {
  Categoria.destroy({
    where: { name: req.params.categoria }
  }).then(data => res.json(data))
  .catch(err => {
    throw new Error(err);
  });
});

router.put("/edit/:id", (req, res, next) => {
  Categoria.update(
    { name: req.body.name },
    { where: { id: req.params.id } }
  ).then(() => res.sendStatus(201))
  next()
});

router.put("/edit/:categoria", (req, res, next) => {
  Categoria.update(
    { name: req.body.name },
    { where: { name: req.params.categoria } }
  ).then(() => res.sendStatus(201))
  .catch(err => {
    throw new Error(err);
  });
});


router.post("/create", (req, res, next) => {
  Categoria.create(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      throw new Error(err);
    });
});

module.exports = router;