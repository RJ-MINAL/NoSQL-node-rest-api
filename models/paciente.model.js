const mongoose = require('mongoose');

const Paciente = mongoose.model(
  'Paciente',
  new mongoose.Schema({
    name: { type: String, required: true, min: 5, max: 50 },
    last_name: String,
    email: String,
    phone: String,
    dpi: Number,
    inscription_date: { type: Date, default: Date.now },
    age: Number,
    ocupation: String,
    id_avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Avatar'
    },
    id_country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pais'
    },
    id_clinica: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clinica'
    }
  })
);

exports.Paciente = Paciente;
//exports.validate = validatePaciente;
