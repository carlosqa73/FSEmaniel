const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require("./usuarios.model.js")(sequelize, Sequelize);
db.productos = require("./productos.model.js")(sequelize, Sequelize);
db.noticias = require("./usuarios.model.js")(sequelize, Sequelize);
db.correos = require("./correos.model.js")(sequelize, Sequelize);
db.telefonos = require("./telefonos.model.js")(sequelize, Sequelize);

//un usuario admin administra una o muchas noticias
db.usuarios.hasMany(db.noticias, {foreignKey: "admin"});
//muchas noticias son administradas por un usuario admin
db.noticias.belongsTo(db.usuarios, {foreignKey: "admin"});

//un usuario admin administra uno o muchos productos
db.usuarios.hasMany(db.productos, {foreignKey: "admin"});
//muchos productos son administrados por un usuario admin
db.productos.belongsTo(db.usuarios, {foreignKey: "admin"});

//un usuario tiene uno o muchos correos
db.usuarios.hasMany(db.correos, {foreignKey: "idUsuario"});
//muchos correos le pertenecen a un usuario
db.correos.belongsTo(db.usuarios, {foreignKey: "idUsuario"});

//un usuario tiene uno o muchos teléfonos
db.usuarios.hasMany(db.telefonos, {foreignKey: "idUsuario"});
//muchos teléfonos le pertenecen a un usuario
db.telefonos.belongsTo(db.usuarios, {foreignKey: "idUsuario"});

module.exports = db;