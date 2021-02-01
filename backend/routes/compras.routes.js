var express = require('express');
var router = express.Router();

const comprasController = require("../controllers/compras.controller.js");

router.get('/', comprasController.findAll);

router.post('/findByUsuario/:usuario', comprasController.findByUsuario);
router.post('/findByProducto/:producto', comprasController.findByProducto);
router.post('/findByFecha/:fecha', comprasController.findByFecha);
router.post('/save', comprasController.create);

router.put('/update/:id', comprasController.update);

router.delete("/delete/:id", comprasController.delete);

module.exports = router;