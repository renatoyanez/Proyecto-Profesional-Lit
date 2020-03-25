//Here hare the routes that will go search properties from the db
const express = require('express');
const router = express.Router();
const { Users, Propiedades, Favoritos, Categoria } = require('../models/index');
const { Op } = require("sequelize");

//The first route will search with params 
// router.get('/search/:property', (req, res, next) => {

//     //this bellow sets the filters so the searching brings filtered data properly
//     const propiedad = req.params.propiedad.toLowerCase();
//     const first = propiedad.substr(1, propiedad.length);
//     const firstLetter = propiedad.toUpperCase().substr(0, 1);
//     const search = firstLetter + first;

//     Propiedades.findAll()
//         .then(data => {
//             if (!data) res.sendStatus(404)
//             const propertiesFilter = data.filter(property => property.nombre.includes(search) || property.descripcion.includes(search) || property.precio.includes(search) || property.ubiacion.includes(search))
//             res.json(propertiesFilter)
//         })
//         .catch(err => { throw new Error(err) })
// })

router.get('/all', (req, res, next) => {
    Propiedades.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(next)
})

// router.get("/:id", (req, res) => {
//     const id = req.params.id;
//     Propiedades.findAll({
//         where: {
//             id
//         }
//     })
//         .then((property) => {
//             res.status(200).send(property)
//         })
// })

module.exports = router