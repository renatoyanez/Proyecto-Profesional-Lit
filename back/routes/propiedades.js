//Here hare the routes that will go search properties from the db
const express = require("express");
const router = express.Router();
const { Propiedades, Categoria } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


/**** This one creates a property ****/
router.post("/create", (req, res, next) => {
  console.log("CATEGORIA EN EL REQ BODY: ", req.body);

  Propiedades.create({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    ubicacion: req.body.ubicacion,
    imagen: req.body.imagen,
    disponible: req.body.disponible
  })
    .then(propiedad => {
      Categoria.findAll({
        where: {
          name: req.body.categorias
        }
      }).then(categorium =>
        propiedad.addCategoria(categorium).then(() => res.status(201).json(propiedad))
      );
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
        nombre: req.body.nombre ? req.body.nombre : propiedad.nombre,
        descripcion: req.body.descripcion
          ? req.body.descripcion
          : propiedad.descripcion,
        precio: req.body.precio ? req.body.precio : propiedad.precio,
        ubicacion: req.body.ubicacion ? req.body.ubicacion : propiedad.ubicacion,
        imagen: req.body.imagen ? req.body.imagen : propiedad.imagen
      })
    )
    .then(() =>
      Propiedades.findAll().then(propiedad => {
        res.status(200).send(propiedad);
      })
    )
    .catch(next);
});


//Route that goes to the DB by searching parameter
router.get("/search/:propiedades", (req, res, next) => {
  console.log("EL QUERY CATEGORIES:  ", req.query.categories.split("_"));
  const categorium = req.query.categories.split("_")
  if (req.query.categoriesBoolean === "true") {
    req.findByCategory = {
      include: [
        {
          model: Categoria,
          where: {
            name: { [Op.like]: { [Op.any]: categorium } }
          }
        }
      ]
    }
  }
  next();
});

router.get("/search/:propiedades", (req, res, next) => {
  console.log("EL QUERY:  ", req.query);
  if (req.query.filterByPrice === "true") {
    req.findByPrice = {
      where: {
        precio: { [Op.between]: [req.query.menor, req.query.mayor] }
      }
    };
  }
  next();
});


router.get("/search/:propiedades", (req, res, next) => {
  const search = req.params.propiedades.toLowerCase();
  Propiedades.findAll({ ...req.findByPrice, ...req.findByCategory })
    .then(data => {
      if (!data) res.sendStatus(404);
      const propertiesFilter = data.filter(
        /**** Buscar con metodos sequelize****/
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

/**** Deletes property ****/
router.delete("/delete/:id", (req, res, next) => {
  Propiedades.destroy({
    where: { id: req.params.id }
  }).then(data => res.json(data));
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
