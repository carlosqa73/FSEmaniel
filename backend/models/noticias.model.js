module.exports = (sequelize, DataTypes) => {
    const Noticias = sequelize.define("noticias", {
      titulo: {
        type: DataTypes.STRING
      },
      contenido: {
        type: DataTypes.STRING
      },
      fecha: {
        type: DataTypes.DATE
      },
      imagen: {
        type: DataTypes.STRING
      },
      admin: {
        type: DataTypes.INTEGER
      }
    },
    {  timestamps: false});
  
    return Noticias;
  };