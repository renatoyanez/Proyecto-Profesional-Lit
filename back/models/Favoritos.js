const S = require('sequelize');
const db = require('../db/db');

class Favoritos extends S.Model { }
Favoritos.init({
    cantidad: {
        type: S.INTEGER,
        defaultValue: 0
    },
    estado: {
        type: S.STRING,
        defaultValue: "pending"
    },
    cambiarBoton: {
        type: S.BOOLEAN,
        defaultValue: false
    }
}, { sequelize: db, modelName: 'favorito' })

module.exports = Favoritos;