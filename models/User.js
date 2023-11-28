const mongoose = require('mongoose');
const { Schema } = mongoose;

// create model class
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
  });
// create a new collection call user
mongoose.model('users', userSchema);