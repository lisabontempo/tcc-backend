const { Schema, model } = require ('mongoose');

const DevSchema = new Schema({
  Id_Usuario: {
    type: Number,
    required: true
  },
  Professor: {
    type: String,
    require: true
  },
  Nota: {
    type: Number,
    required: true
  },
  Descricao: {
    type: String,
    required: true
  },
  IdAvaliacao: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Atividades', DevSchema);