const S = require('sequelize');
const db = require('../db/db');

class Propiedades extends S.Model { }

Propiedades.init({
    nombre: {
        type: S.STRING,
        allowNull: false
    },
    descripcion: {
        type: S.TEXT,
        allowNull: false,
        // get(){
        //     const texto = this.getDataValue(descripcion)
        //    if (texto.length >= 20) {return `${texto.slice(0, 20)}...`}
        // }
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
        allowNull: false,
        defaultValue: true,
        // set(value) {
        //     if (this.disponible == false ) {this.setDataValue('nombre', `${value} NO DISPONIBLE`)} 
        // }
    }
}, { 
    // hooks: {
    //     beforeCreate: (instance, options) => {
    //         instance.disponible == false ? instance.nombre = `${instance.nombre} NO DISPONIBLE` : null
    //     }
    // },
    sequelize: db, 
    modelName: 'propiedades' 
})




module.exports = Propiedades;