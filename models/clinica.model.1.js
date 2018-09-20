const Joi = require('joi');
const mongoose = require('mongoose');

const Clinica = mongoose.model(
  'Clinica',
  new mongoose.Schema({
    name: { type: String, required: true, min: 5, max: 255 },
    address: { type: String, required: true, min: 5, max: 255 },
    phone: { type: String, required: true, min: 5, max: 50 },
    open_horary: Date,
    close_horary: Date,
    email: String
  })
);

function validateClinica(clinica) {
  return Joi.validate(clinica, {
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
    address: Joi.string()
      .min(5)
      .max(255)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string(),
    open_horary: Joi.date(),
    close_horary: Joi.date()
  });
}

exports.Clinica = Clinica;
exports.validate = validateClinica;
