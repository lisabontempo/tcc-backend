const AtividadesModel = require('../models/atividades');

module.exports = {
  async index(req, res) {
    const todasAsAtividades = await AtividadesModel.find({})

    return res.json(todasAsAtividades)
  },

  async store(req, res) {
    const { Id_Usuario, Professor, Nota, Descricao, IdAvaliacao } = req.body;

    const atividade = await AtividadesModel.create({ Id_Usuario, Professor, Nota, Descricao, IdAvaliacao })

    return res.json(atividade)
  }
};