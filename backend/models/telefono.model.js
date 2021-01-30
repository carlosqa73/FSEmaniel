module.exports = (sequelize, DataTypes) => {
    const Telefono = sequelize.define("telefono", {
      telefono: {
        type: DataTypes.STRING
      }
    });
  
    return Telefono;
  };