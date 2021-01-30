module.exports = (sequelize, DataTypes) => {
    const Correo = sequelize.define("correo", {
      correo: {
        type: DataTypes.STRING
      }
    });
  
    return Correo;
  };