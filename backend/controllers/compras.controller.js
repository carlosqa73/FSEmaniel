const Compras = require("../collections/compras.model");

exports.findAll = (req, res) => {
    Compras.find({}, (err, docs) => {
        res.send(docs)
    })
};

exports.findByUsuario = (req, res) => {
    Compras.find({usuario: req.params.usuario}, (err, docs) =>{
        res.send(docs)
    })
};

exports.findByProducto = (req, res) => {
    Compras.find({producto: req.params.producto}, (err, docs) => {
        res.send(docs)
    })
};

exports.findByFecha = (req, res) => {
    Compras.find({fecha: req.params.fecha}, (err, docs) => [
        res.send(docs)
    ])
};

exports.findById = (req, res) => {
    Compras.find({_id: req.params._id}, (err, docs) => {
        res.send(docs)
    })
};

exports.create = (req, res) => {

    if(!req.body.usuario || !req.body.producto || !req.body.fecha || !req.body.cantidad){
        res.status(400).send({
            message: req.body.usuario + "," + req.body.producto + "," + req.body.fecha + "," + req.body.cantidad
        });
        return;
    }

    const compra = {
        usuario: req.body.usuario,
        producto: req.body.producto,
        fecha: req.body.fecha,
        cantidad: req.body.cantidad
    };

    Compras.create(compra)
        .then(docs => {
            res.send(docs)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });

};

exports.update = (req, res) => {

    if(!req.body.usuario || !req.body.producto || !req.body.fecha || !req.body.cantidad){
        res.status(400).send({
            message: req.body.usuario + "," + req.body.producto + "," + req.body.fecha + "," + req.body.cantidad
        });
        return;
    }

    Compras.findById(req.params.id, function(err, docs) {
        docs.usuario = req.body.usuario;
        docs.producto = req.body.producto;
        docs.fecha = req.body.fecha;
        docs.cantidad = req.body.cantidad;

        docs.save(function(err) {
            if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(docs);
        });
    });

};

exports.delete = (req, res) => {
    Compras.findById(req.params.id, (err, docs) =>{
        docs.remove(function(err) {
            if(err) return res.status(500).send(err.message);
        res.status(200).send();
        })
    });
};