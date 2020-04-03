const S = require('sequelize');
const db = require('../db/db');

class Propiedades extends S.Model { }

Propiedades.init({
    nombre: {
        type: S.STRING,
        validate: { notEmpty: true }
    },
    descripcion: {
        type: S.TEXT,
        allowNull: false
    },
    precio: {
        type: S.INTEGER,
        allowNull: false
    },
    ubicacion: {
        type: S.STRING,
        allowNull: false
    },
    imagen: {
        type: S.ARRAY(S.STRING),
        allowNull: false
    },
    disponible: {
        type: S.BOOLEAN,
        defaultValue: true,
        set(value) {
            if (!value) { this.setDataValue('nombre', `${this.nombre} NO DISPONIBLE`) } 
            this.setDataValue("disponible", value)
        }
    },
    truncarDescripcion: {
        type: S.VIRTUAL,
        get(){
            const texto = this.getDataValue("descripcion")
           if (texto.length >= 20) {return `${texto.slice(0, 20)}...`}
        }
    }
}, { 
    sequelize: db, 
    modelName: 'propiedades' 
})




module.exports = Propiedades;