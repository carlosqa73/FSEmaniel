var express = require('express');
var router = express.Router();

const correosController = require("../controllers/correos.controller.js");

router.get('/', correosController.findAll);
router.post('/save',  correosController.create);
router.post('/findByDireccion/:dir', correosController.findByDireccion);
router.post('/findByUsuario/:idUser', correosController.findByUsuario);
router.put('/update/:id', correosController.update);
router.delete('/delete/:id', correosController.delete);
router.delete('/deleteAll', correosController.deleteAll);

module.exports = router;