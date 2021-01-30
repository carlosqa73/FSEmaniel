var express = require('express');
var router = express.Router();

const maestroController = require("../controllers/maestro.controller.js");

router.get('/', maestroController.findAll);
router.post('/save',  maestroController.create);
router.post('/find/:id', maestroController.findOne);
router.put('/update/:id', maestroController.update);
router.delete('/delete/:id', maestroController.delete);
router.delete('/deleteAll', maestroController.deleteAll);

module.exports = router;
