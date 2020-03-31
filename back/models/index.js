const Users = require('./Users');
const Propiedades = require('./Propiedades');
const Favoritos = require('./Favoritos');
const Categoria = require('./Categorias');

Favoritos.belongsTo(Users);
Favoritos.belongsTo(Propiedades);
Propiedades.belongsToMany(Categoria, { through: 'propiedades_categoria' });
Categoria.belongsToMany(Propiedades, { through: 'propiedades_categoria' });

module.exports = { Users, Propiedades, Favoritos, Categoria };