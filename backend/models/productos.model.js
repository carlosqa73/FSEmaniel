module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define("productos", {
      descripcion: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.FLOAT
      },
      stock: {
        type: DataTypes.INTEGER
      },
      imagen: {
        type: DataTypes.STRING
      }
    });
  
    return Productos;
  };