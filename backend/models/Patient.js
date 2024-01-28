const mongoose = require("mongoose");
const { Schema } = mongoose;

const PatientSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: Number,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  gender: { type: String },
  age: { type: Number },
  address: { type: String },
});
const Patient = mongoose.model("patient", PatientSchema);
// for creating index in mongodb so that email should be unique:
// User.createIndexes();
module.exports = Patient;
