var express = require('express');
var router = express.Router();

const telefonosController = require("../controllers/telefonos.controller.js");

router.get('/', telefonosController.findAll);
router.post('/save',  telefonosController.create);
router.post('/findByNumero/:num', telefonosController.findByNumero);
router.post('/findByUsuario/:idUser', telefonosController.findByUsuario);
router.put('/update/:id', telefonosController.update);
router.delete('/delete/:id', telefonosController.delete);
router.delete('/deleteAll', telefonosController.deleteAll);

module.exports = router;