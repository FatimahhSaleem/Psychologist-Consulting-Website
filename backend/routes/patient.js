const express = require("express");
const router = express.Router();
const {
  loginPatient,
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient");

router.post("/login", loginPatient);
router.get("/get", getAllPatients);
router.get("/get/:patientId", getPatientById);
router.post("/createPatient", createPatient);
router.put("/updatePatient/:patientId", updatePatient);
router.delete("/deletePatient/:patientId", deletePatient);

module.exports = router;
