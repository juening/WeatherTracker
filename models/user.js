const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  firstName: String,
  lastName: String,
  cities: Array
});

//create the model class
const ModelClass  = mongoose.model('user', userSchema);

module.exports = ModelClass;
