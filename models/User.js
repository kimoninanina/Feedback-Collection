const mongoose = require('mongoose');
const { Schema } = mongoose;

// create model class
const userSchema = new Schema({
    googleId: String
  });
// create a new collection call user
mongoose.model('users', userSchema);