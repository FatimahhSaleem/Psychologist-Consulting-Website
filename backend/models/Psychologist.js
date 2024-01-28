const mongoose = require("mongoose");
const { Schema } = mongoose;

const PsychologistSchema = new Schema({
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
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  dob: { type: Date },
  address: { type: String, required: true },
  education: { type: String, required: true },
  expertise: { type: String, required: true },
  experiance: { type: String, required: true },
});
const Psychologist = mongoose.model("psychologist", PsychologistSchema);
// for creating index in mongodb so that email should be unique:
// User.createIndexes();
module.exports = Psychologist;
