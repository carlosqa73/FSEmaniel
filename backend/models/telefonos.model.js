module.exports = (sequelize, DataTypes) => {
    const Telefonos = sequelize.define("telefonos", {

      idUsuario: {
        type: DataTypes.INTEGER
      },

      telefono: {
        type: DataTypes.STRING
      }
    },
    {  timestamps: false});
  
    return Telefonos;
  };