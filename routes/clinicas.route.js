const express = require('express');
const router = express.Router();
const { Clinica, validate } = require('../models/clinica.model');

router.get('/', async (req, res) => {
  const clinicas = await Clinica.find().sort('name');
  res.send(clinicas);
});

router.get('/:id', async (req, res) => {
  const clinica = await Clinica.findById(req.params.id);

  if (!clinica)
    return res
      .status(404)
      .send('No se encontro la Clinica con el ID especificado');

  res.send(clinica);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let clinica = new Clinica({ ...req.body });
  clinica = await clinica.save();
  res.send(clinica);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const clinica = await Clinica.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  if (!clinica)
    return res
      .status(404)
      .send('No se encontro la Clinica con el ID especificado');

  res.send(clinica);
});

router.delete('/:id', async (req, res) => {
  const clinica = await Clinica.findByIdAndRemove(req.params.id);

  if (!clinica)
    return res
      .status(404)
      .send('No se encontro la Clinica con el ID especificado');

  res.send(clinica);
});

module.exports = router;
