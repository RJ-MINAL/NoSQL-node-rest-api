const mongoose = require('mongoose');
const clinicas = require('./routes/clinicas.route');
const doctores = require('./routes/doctores.route');
const express = require('express');
const app = express();

mongoose
  .connect(
    'mongodb://localhost/kevDemo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'));

app.set('view engine', 'pug');
app.set('views', './views'); //default path - use to change path
app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.json());
app.use('/api/clinicas', clinicas);
app.use('/api/doctores', doctores);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
