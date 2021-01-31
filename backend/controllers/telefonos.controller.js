const db = require("../models");
const Telefonos = db.telefonos;
const Op = db.Sequelize.Op;

//obtener todos los teléfonos
exports.findAll = (req, res) => {
    Telefonos.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred."
        });
      });
};

//crear teléfono
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idUsuario || !req.body.telefono) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const telefono = {
        idUsuario: req.body.idUsuario,
        telefono: req.body.telefono,
    };

    // Save Tutorial in the database
    Telefonos.create(telefono)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });
};

//buscar teléfono por número
exports.findByNumero = (req, res) => {
  Telefonos.findOne({ where: { telefono: req.params.num } })
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

//buscar teléfono por idUsuario
exports.findByUsuario = (req, res) => {
    Telefonos.findAll({ where: { idUsuario: req.params.idUser } })
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

//actualizar correo
exports.update = (req, res) => {
    // Validate request
    if (!req.body.idUsuario || !req.body.telefono) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const telefono = {
        idUsuario: req.body.idUsuario,
        telefono: req.body.telefono,
    };

    // Save Tutorial in the database
    Telefonos.update(telefono, {where: { id: req.params.id }})
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

//eliminar teléfono
exports.delete = (req, res) => {
    Telefonos.destroy({ where: { id: req.params.id } })
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

//eliminar todos los teléfonos
exports.deleteAll = (req, res) => {
  Telefonos.destroy({ where: {} })
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