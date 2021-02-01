const Compras = require("../collections/compras.model");

exports.findAll = (req, res) => {

    Compras.find({}, (err, docs) => {
        res.send(docs)
    })

};

exports.findOne = (req, res) => {

    Compras.find({usuario: req.params.usuario}, (err, docs) =>{
        res.send(docs)
    })

};