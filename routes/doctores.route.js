const express = require('express');
const router = express.Router();
const { Doctor } = require('../models/doctor.model');

const ERR_404 = 'No se encontro el DOCTOR con el ID especificado';

router.get('/', async (req, res) => {
  const arr = await Doctor.find();
  res.send(arr);
});

router.get('/:id', async (req, res) => {
  const reg = await Doctor.findById(req.params.id);
  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

router.post('/', async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let reg = new Doctor({ ...req.body });
  reg = await reg.save();
  res.send(reg);
});

router.put('/:id', async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const reg = await Doctor.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

router.delete('/:id', async (req, res) => {
  const reg = await Doctor.findByIdAndRemove(req.params.id);
  if (!reg) return res.status(404).send(ERR_404);

  res.send(reg);
});

module.exports = router;
