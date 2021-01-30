module.exports = (sequelize, DataTypes) => {
    const Noticias = sequelize.define("noticias", {
      titulo: {
        type: DataTypes.STRING
      },
      contenido: {
        type: DataTypes.STRING
      },
      fecha: {
        type: DataTypes.Date
      },
      imagen: {
        type: DataTypes.STRING
      }
    });
  
    return Noticias;
  };