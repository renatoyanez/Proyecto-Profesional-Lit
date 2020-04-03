const S = require("sequelize");
const db = require("../db/db");

class Categoria extends S.Model {}

Categoria.init(
  {
    name: {
      type: S.STRING,
      allowNull: true,
    //   validate: {
    //     notNull: {
    //       msg: "Please enter your name"
    //     }
    //   }
    }
  },
  { sequelize: db, modelName: "categoria" }
);

module.exports = Categoria;
