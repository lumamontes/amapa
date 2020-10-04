const mongoose = require('mongoose');

const FraseSchema = new mongoose.Schema({
    nome: String,
    traducao: String
}, {
    timestamps: true,
})

module.exports = mongoose.model('Frase', FraseSchema);