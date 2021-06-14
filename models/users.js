const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  date: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("Users", userDataSchema);
exports.Users = Users;
