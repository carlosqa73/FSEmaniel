var express = require('express');
var router = express.Router();

const noticiasController = require("../controllers/noticias.controller.js");

router.get('/', noticiasController.findAll);
router.post('/save',  noticiasController.create);
router.post('/find/:id', noticiasController.findOne);
router.put('/update/:id', noticiasController.update);
router.delete('/delete/:id', noticiasController.delete);
router.delete('/deleteAll', noticiasController.deleteAll);

module.exports = router;