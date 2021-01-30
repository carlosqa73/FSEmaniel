module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("usuarios", {
      nombre: {
        type: DataTypes.STRING
      },
      apellido: {
        type: DataTypes.STRING
      },
      clave: {
        type: DataTypes.STRING
      },
      tipoUsuario: {
        type: DataTypes.STRING
      },
      direccion: {
        type: DataTypes.STRING
      }
    });
  
    return Usuarios;
  };