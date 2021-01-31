const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

//obtener todos los usuarios
exports.findAll = (req, res) => {
    Usuarios.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving usuarios."
        });
      });
  };

//crear usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre || !req.body.apellido || !req.body.clave ||
        !req.body.tipoUsuario || !req.body.direccion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        clave: req.body.clave,
        tipoUsuario: req.body.tipoUsuario,
        direccion: req.body.direccion
    };

    // Save Tutorial in the database
    Usuarios.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });
};

//buscar usuario por id
exports.findOne = (req, res) => {
  Usuarios.findOne({ where: { id: req.params.id } })
  .then(data => {
    if(data == null){
      res.send("Sin resultados");
    }else{
      res.send(data);
    }
    
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred."
    });
  });
};

//actualizar usuario
exports.update = (req, res) => {
   // Validate request
  if (!req.body.nombre || !req.body.apellido || !req.body.clave ||
    !req.body.tipoUsuario || !req.body.direccion) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    clave: req.body.clave,
    tipoUsuario: req.body.tipoUsuario,
    direccion: req.body.direccion
  };

 // Save Tutorial in the database
  Usuarios.update(usuario, {where: { id: req.params.id }})
  .then(data => {
    if(data[0] == 0){
      res.send("No se actualizó");
    }else{
      res.send("Registro con id = "+req.params.id+" actualizado");
    }
  })

  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while updating maestros."
    });
  });
};

//eliminar usuario
exports.delete = (req, res) => {
  Usuarios.destroy({ where: { id: req.params.id } })
  .then(data => {
    if(data==1){
      res.send("Registro con id = "+req.params.id+" eliminado");
    }else{
      res.send("No existe registro con id = "+req.params.id);
    }
    
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred."
    });
  });
};

//eliminar todos los usuarios
exports.deleteAll = (req, res) => {
  Usuarios.destroy({ where: {} })
  .then(data => {
    res.send('Todos los registros se han eliminados');
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred."
    });
  })
};