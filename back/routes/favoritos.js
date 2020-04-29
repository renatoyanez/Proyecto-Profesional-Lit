const express = require("express");
const router = express.Router();
const { Favoritos, Propiedades, Users } = require("../models/index");
const { Op } = require("sequelize");


router.post("/test", (req, res) => {

  Propiedades.create({
    nombre: "un nombre",
    descripcion: "una descripcion",
    precio: 10,
    ubicacion: "una ubicacion",
    imagen: [""],
    disponible: true
  })
    .then(propiedad => Favoritos.create({ cantidad: 1 })
      .then(favorito => favorito.setPropiedades(propiedad))
      .then(nuevofavorito => res.json(nuevofavorito))
    )
})

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
    .then(favorito => favorito.setPropiedades(req.body.propiedad))
    .then(favorito => favorito.setUsers(req.body.user))
    .then(favorito => res.json(favorito));
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
