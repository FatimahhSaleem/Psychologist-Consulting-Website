const express = require("express");
const router = express.Router();
const {
  getAllAppointments,
  getAppointmentById,
  getAppointmentByPatientId,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  checkAvailability,
} = require("../controllers/appointment");

router.get("/get", getAllAppointments);
router.get("/get/:appointmentId", getAppointmentById);
router.get("/getPatientAppointment/:patientId", getAppointmentByPatientId);
router.post("/createAppointment", createAppointment);
router.put("/updateAppointment/:appointmentId", updateAppointment);
router.put("/checkAvailability", checkAvailability);
router.delete("/deleteAppointment/:appointmentId", deleteAppointment);

module.exports = router;
