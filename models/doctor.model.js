const mongoose = require('mongoose');

const Doctor = mongoose.model(
  'Doctor',
  new mongoose.Schema({
    name: { type: String, required: true, min: 5, max: 50 },
    last_name: String,
    phone: String,
    dpi: Number,
    address: String,
    blocked: Boolean,
    email: String,
    password: String,
    age: Number,
    rol: Number,
    configured: Boolean,
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

exports.Doctor = Doctor;
//exports.validate = validateDoctor;
