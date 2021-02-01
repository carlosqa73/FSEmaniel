const db = require("../models");
const Noticias = db.noticias;
const Op = db.Sequelize.Op;

//obtener todos las noticias
exports.findAll = (req, res) => {
    Noticias.findAll()
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

//crear noticia
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tit || !req.body.contenido || !req.body.fecha ||
        !req.body.imagen || !req.body.adm) {
        res.status(400).send({
            message: req.body.fecha + "," + req.body.contenido + "," + req.body.tit + "," + req.body.imagen + "," + req.body.adm
        });
        return;
    }

    // Create a Tutorial
    const noticia = {
        titulo: req.body.tit,
        contenido: req.body.contenido,
        fecha: req.body.fecha,
        imagen: req.body.imagen,
        admin: req.body.adm
    };

    // Save Tutorial in the database
    Noticias.create(noticia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });
};

//buscar producto por id
exports.findOne = (req, res) => {
    Noticias.findOne({ where: { id: req.params.id } })
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

//actualizar noticia
exports.update = (req, res) => {
    // Validate request
    if (!req.body.titulo || !req.body.contenido || !req.body.fecha ||
        !req.body.imagen || !req.body.admin) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const noticia = {
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        fecha: req.body.fecha,
        imagen: req.body.imagen,
        admin: req.body.admin
    };

 // Save Tutorial in the database
    Noticias.update(noticia, {where: { id: req.params.id }})
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
            err.message || "Some error occurred."
        });
    });
};

//eliminar noticia
exports.delete = (req, res) => {
    Noticias.destroy({ where: { id: req.params.id } })
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

//eliminar todas las noticias
exports.deleteAll = (req, res) => {
    Noticias.destroy({ where: {} })
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