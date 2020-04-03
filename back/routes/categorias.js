//Here hare the routes that will go search categories from the db
const express = require("express");
const router = express.Router();
const { Categoria, Propiedades } = require("../models/index");
const { Op } = require("sequelize");

router.post("/create", (req, res, next) => {
  Categoria.create(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      throw new Error(err);
    });
});

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

router.get("/:categoria", (req, res, next) => {
  Categoria.findAll({
    where: { name: req.params.categoria }
  }).then(data => {
    res.json(data);
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Categoria.destroy({
    where: { id: req.params.id }
  }).then(data => res.json(data));
});

router.put("/edit/:id", (req, res, next) => {
  Categoria.update({ name: req.body.name }, { where: { id: req.params.id } })
  .then(() => res.sendStatus(201));
});

// router.put("/edit/:id", (req, res, next) => {

//   Categoria.findOne({ where: { id: req.body.id } })
//     .then(categoria =>
//       categoria.update({
//         nombre: req.body.nombre ? req.body.nombre : categoria.nombre
//         // descripcion: req.body.descripcion ? req.body.descripcion : categoria.descripcion,
//         // precio: req.body.precio ? req.body.precio : categoria.precio
//       })
//     )
//     .then(() => Categoria.findAll()
//     .then((categoria) => {
//       res.status(200).json(categoria)
//   }))
//   .catch(next)
//  })

module.exports = router;
