const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  registeredTime: {
    type: Date,
    require: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);
