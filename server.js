/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable node/no-unpublished-require */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listing from the ${port} port...`);
});
