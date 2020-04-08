const express = require('express');
const router = express.Router()
const User = require("../models/Users")
const passport = require('../passport/passport');
const { Op } = require("sequelize");


// const userLogged = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         res.json(req.user)
//     } else {
//         res.json("")
//     }
// } //descomentar de ser necesario



router.post("/register", (req, res) => {
    console.log('PASE');
    console.log(req.body)
    User.create(req.body)
    .then(user => res.status(200).send(user));
    
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get("/logout", (req, res) => {
    req.logout()
    res.send('loguedout')
})

router.get('/all', (req, res, next) => {
    User.findAll().then(data => {
        res.status(201).json(data)
    }).catch(next)
})


// router.get("/auth", userLogged) chequea que el usuario que intenta loguearse esta autenticado para autorizar el logueo, descomentalo cuando descomentes la funcion userLogged

module.exports = router;