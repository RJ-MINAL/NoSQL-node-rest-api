const express = require('express');
const router = express.Router();
const { Paciente } = require('../models/paciente.model');

const ERR_404 = 'No se encontro el Paciente con el ID especificado';

router.get('/', async (req, res) => {
  const arr = await Paciente.find();
  res.send(arr);
});

router.get('/:id', async (req, res) => {
  const reg = await Paciente.findById(req.params.id);
  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

router.post('/', async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let reg = new Paciente({ ...req.body });
  reg = await reg.save();
  res.send(reg);
});

router.put('/:id', async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const reg = await Paciente.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

router.delete('/:id', async (req, res) => {
  const reg = await Paciente.findByIdAndRemove(req.params.id);
  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

module.exports = router;
