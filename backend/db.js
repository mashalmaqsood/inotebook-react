
// require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI
console.log('mongoURI:', mongoURI);

const connectToMongo = () => {
    mongoose.connect(mongoURI)
  .then(() => console.log('Connected to Mongo successfully'))
  .catch((error) => console.error('Connection error', error));
}
module.exports = connectToMongo;