const express = require("express");
const router = express.Router();
const { Favoritos, Propiedades } = require("../models/index");
const { Op } = require("sequelize");

router.get("/all/:user", (req, res) => {
  Favoritos.findAll({
    include: [
      {
        model: User,
        where: {
          id: req.params.user
        }
      }, //filtra la busqueda si incluye el modelo user y si el user tiene id
      {
        model: Propiedades
      }
    ],
    where: { disponible: true }
  }).then(data => {
    res.json(data);
  });
});

router.post("/add", (req, res) => {
  Favoritos.create(req.body)
    //.then(favorito => favorito.setPropiedad(req.body.id))
    .then(favorito => res.send(favorito));
});


router.delete("/remove/:propiedad", (req, res, next) => {
  Favoritos.destroy({
    where: {
      propiedadId: req.params.propiedad
    }
  })
    .then(data => res.json(data))
    .catch(next);
});
//Chequear si funciona con 'propiedad' solamente!!!

module.exports = router;
