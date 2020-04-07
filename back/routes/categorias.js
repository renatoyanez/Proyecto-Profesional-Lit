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
  Categoria.update(
    { name: req.body.name },
    { where: { id: req.params.id } }
  ).then(() => res.sendStatus(201));
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

/**** Agrega propiedades a categoria *****/
// router.post("/add", (req, res, next) => {
//   Propiedades.create(req.body)
//   .then(propiedad =>
//     Categoria.findAll()
//     .then(categorias => {
//       const filtrada = categorias.filter(c => {
//         if (req.body.categorias.includes(c.name)) return c;
//       });
//       propiedad.addCategoria(filtrada)
//       .then(() => {
//         res.status(200).send("OK");
//       });
//     })
//   );
// });



// router.get('/:nombre', function (req, res) {
//   try {
//     Propiedades.findAll({
//           include: [{
//               model: Categoria,
//               where: {
//                   name: req.params.nombre
//               }
//           }]
//       })
//       .then((categoria) => {
//           res.status(200).send(categoria)
//       })
//   } catch (err) { console.log(err) }
// })


module.exports = router;
