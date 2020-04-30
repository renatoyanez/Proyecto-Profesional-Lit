const express = require("express");
const router = express.Router();
const { Favoritos, Propiedades, Users } = require("../models/index");
const { Op } = require("sequelize");


router.post("/add", (req, res) => {
  console.log(req.body);
  Favoritos.create({
    cantidad: 0
  })
    .then(favoritos => (
      favoritos.setPropiedade(req.body.propiedad)))
    .then(favoritos => (
      favoritos.setUser(req.body.user.id)))
    .then(favoritos => (res.json(favoritos)))
})


router.get("/all/:user", (req, res) => {
  Favoritos.findAll({
    include: [
      {
        model: Users,
        where: {
          id: req.params.user
        }
      }, //filtra la busqueda si incluye el modelo user y si el user tiene id
      {
        model: Propiedades
      }
    ]
    // where: { disponible: true }
  }).then(data => {
    res.json(data);
  });
});


router.delete("/remove/:propiedad", (req, res, next) => {
  Favoritos.destroy({
    where: {
      propiedad: req.params.propiedad
    }
  })
    .then(data => res.json(data))
    .catch(next);
});
//Chequear si funciona con 'propiedad' solamente!

module.exports = router;
