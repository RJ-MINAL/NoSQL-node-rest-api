const mongoose = require('mongoose');
const genres = require('./routes/genres.route');
const customers = require('./routes/customers.route');
const clinicas = require('./routes/clinicas.route');
const express = require('express');
//const ngrok = require('ngrok');
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
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/clinicas', clinicas);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
