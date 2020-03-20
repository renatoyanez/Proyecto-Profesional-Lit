const S = require('sequelize')
const db = require('../db/db')

class Categoria extends S.Model { }

Categoria.init({
    name: {
        type: S.STRING,
        allowNull: false
    }
}, { sequelize: db, modelName: 'categoria' })

module.exports = Categoria;