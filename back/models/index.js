const Users = require('./Users');
const Propiedades = require('./Propiedades');
const Favoritos = require('./Favoritos');
const Categoria = require('./Categorias');

Favoritos.belongsTo(Users);
Favoritos.belongsTo(Propiedades);

Propiedades.belongsToMany(Categoria, { through: 'producto_categoria' });
Categoria.belongsToMany(Propiedades, { through: "producto_categoria" });

module.exports = { Users, Propiedades, Favoritos, Categoria };