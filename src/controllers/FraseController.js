const Frase = require('../models/Frase');

module.exports = {
    async index(request, response){
        const frases = await Frase.find();

        return response.json(frases);
    },

    async store(request, response){
        const { nome, traducao } = request.body;

        const frase = await Frase.create({
            nome,
            traducao
        });

        return response.json(frase);
    }
}