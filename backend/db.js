const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = () => {
    // mongoose.connect(mongoURI,()=> {
    //     console.log("Connected to momgo successfully!")
    // })
    mongoose.connect(mongoURI)
  .then(() => console.log('Connected to Mongo successfully'))
  .catch((error) => console.error('Connection error', error));
}
module.exports = connectToMongo;