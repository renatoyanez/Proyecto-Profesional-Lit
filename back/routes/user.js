const express = require('express');
const router = express.Router()
const { User, Propiedades } = require('../models/index');
const passport = require('../passport/passport');
const { Op } = require("sequelize");


// const userLogged = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         res.json(req.user)
//     } else {
//         res.json("")
//     }
// } descomentar de ser necesario

router.post("/register", (req, res) => {
    User.create(req.body)
        .then(res.send("Created"))
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get("/logout", (req, res) => {
    req.logout()
    res.send('loguedout')
})

//router.get("/auth", userLogged) chequea que el usuario que intenta loguearse esta autenticado para autorizar el logueo, descomentalo cuando descomentes la funcion userLogged

module.exports = router;