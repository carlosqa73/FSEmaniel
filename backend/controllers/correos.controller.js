const db = require("../models");
const Correos = db.correos;
const Op = db.Sequelize.Op;

//obtener todos los correos
exports.findAll = (req, res) => {
    Correos.findAll()
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

//crear correo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idUsuario || !req.body.correo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const correo = {
        idUsuario: req.body.idUsuario,
        correo: req.body.correo,
    };

    // Save Tutorial in the database
    Correos.create(correo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });
};

//buscar correo por dirección
exports.findByDireccion = (req, res) => {
  Correos.findOne({ where: { correo: req.params.dir } })
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

//buscar correo por idUsuario
exports.findByUsuario = (req, res) => {
    Correos.findAll({ where: { idUsuario: req.params.idUser } })
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
    if (!req.body.idUsuario || !req.body.correo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const correo = {
        idUsuario: req.body.idUsuario,
        correo: req.body.correo,
    };

    // Save Tutorial in the database
    Correos.update(correo, {where: { id: req.params.id }})
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

//eliminar correo
exports.delete = (req, res) => {
    Correos.destroy({ where: { id: req.params.id } })
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

//eliminar todos los correos
exports.deleteAll = (req, res) => {
  Correos.destroy({ where: {} })
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