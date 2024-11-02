const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Sutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

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

const server = app.listen(port, () => {
  console.log(`Listing from the ${port} port...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Sutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
