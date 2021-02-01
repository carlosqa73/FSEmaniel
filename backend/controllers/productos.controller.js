const db = require("../models");
const Productos = db.productos;
const Op = db.Sequelize.Op;

//obtener todos los productos
exports.findAll = (req, res) => {
    Productos.findAll()
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

//crear producto
exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion || !req.body.precio || !req.body.stock ||
        !req.body.imagen || !req.body.admin) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const producto = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        admin: req.body.admin
    };

    // Save Tutorial in the database
    Productos.create(producto)
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
    Productos.findOne({ where: { id: req.params.id } })
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

//actualizar producto
exports.update = (req, res) => {
     // Validate request
    if (!req.body.descripcion || !req.body.precio || !req.body.stock ||
        !req.body.imagen || !req.body.admin) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const producto = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        admin: req.body.admin
    };

 // Save Tutorial in the database
    Productos.update(producto, {where: { id: req.params.id }})
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

//eliminar producto
exports.delete = (req, res) => {
    Productos.destroy({ where: { id: req.params.id } })
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
    Productos.destroy({ where: {} })
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