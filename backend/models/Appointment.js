const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointment", AppointmentSchema);
