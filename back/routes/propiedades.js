//Here hare the routes that will go search properties from the db
const express = require("express");
const router = express.Router();
const { Propiedades } = require("../models/index");
const { Op } = require("sequelize");

/**** This one creates a property ****/
router.post("/create", (req, res, next) => {
  
  Propiedades.create(req.body)
    .then(propiedad => {
      res.status(201).json(propiedad);
    })
    .catch(err => {
      throw new Error(err);
    });
});

/**** This one edits property: ****/
router.post("/edit", (req, res, next) => {

  Propiedades.findOne({ where: { id: req.body.id } })
    .then(propiedad =>
      propiedad.update({
        nombre: req.body.nombre ? req.body.nombre : propiedad.nombre
        // descripcion: req.body.descripcion ? req.body.descripcion : propiedad.descripcion,
        // precio: req.body.precio ? req.body.precio : propiedad.precio
      })
    )
    .then(() => Propiedades.findAll()
    .then((propiedades) => {
      res.status(200).json(propiedades)
  }))
  .catch(next)
 })


//Route that goes to the db by searching parameter
//The first route will search with params
router.get("/search/:propiedades", (req, res, next) => {
  //this bellow sets the filters so the searching brings filtered data properly
  const search = req.params.propiedades.toLowerCase();

  Propiedades.findAll()
    .then(data => {
      if (!data) res.sendStatus(404);
      const propertiesFilter = data.filter(
        /*** Buscar con metodos sequelize****/
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

/***** Searches by location *****/
router.get("/barrio/:ubicacion", (req, res, next) => {
  //const search = req.params.ubicacion.toLowerCase()

  Propiedades.findAll({
    where: { ubicacion: req.params.ubicacion }
  }).then(data => {
    if (!data) res.sendStatus(404);
    res.json(data)
  }).catch(err => {
    throw new Error(err);
  })

})

/**** Deletes property ****/
router.delete("/delete/:id", (req, res, next) => {
  Propiedades.destroy({
    where: { id: req.params.id }
  }).then(data => res.json(data))
})

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
