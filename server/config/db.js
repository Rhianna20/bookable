const config = require('config')
const mongoose = require('mongoose')

const db = config.get('mongoURI')
console.log(config.has('mongoURI'))
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log('MongoDB is Connected...');
  } catch ( err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;