const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost/kevDemo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'));

const Pais = mongoose.model(
  'Pais',
  new mongoose.Schema({
    name: String,
    code: Number
  })
);

async function createCountry(name, code) {
  const pais = new Pais({
    name,
    code
  });

  const result = await pais.save();
  console.log(result);
}

async function listCountries() {
  const countries = await Pais.find().sort('name');
  console.log(countries);
}

//createCountry('USA', 100);

//listCountries();

exports.Pais = Pais;
