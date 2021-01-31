var express = require('express');
var router = express.Router();

const usuariosController = require("../controllers/usuarios.controller.js");

router.get('/', usuariosController.findAll);
router.post('/save',  usuariosController.create);
router.post('/find/:id', usuariosController.findOne);
router.put('/update/:id', usuariosController.update);
router.delete('/delete/:id', usuariosController.delete);
router.delete('/deleteAll', usuariosController.deleteAll);

module.exports = router;