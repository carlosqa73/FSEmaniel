var express = require('express');
var router = express.Router();

const comprasController = require("../controllers/compras.controller.js");

router.get('/', comprasController.findAll);
router.post('/findOne/:usuario', comprasController.findOne);

module.exports = router;