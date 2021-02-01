var mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    usuario: {
        type: Number,
    },
    producto: {
        type: Number,
    },
    fecha: {
        type: Date,
    },
    cantidad: {
        type: Number,
    },
});

module.exports = mongoose.model('compras', compraSchema, 'compras');