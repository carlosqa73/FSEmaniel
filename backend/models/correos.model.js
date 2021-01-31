module.exports = (sequelize, DataTypes) => {
    const Correos = sequelize.define("correos", {
      
      idUsuario: {
        type: DataTypes.INTEGER
      },

      correo: {
        type: DataTypes.STRING
      }
    },
    {  timestamps: false});
  
    return Correos;
  };