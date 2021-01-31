var express = require('express');
var router = express.Router();

const productosController = require("../controllers/productos.controller.js");

/*router.get('/', productosController.findAll);
router.post('/save',  productosController.create);
router.post('/find/:id', productosController.findOne);
router.put('/update/:id', productosController.update);
router.delete('/delete/:id', productosController.delete);
router.delete('/deleteAll', productosController.deleteAll);*/

module.exports = router;