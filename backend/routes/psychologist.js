const express = require("express");
const router = express.Router();
const {
  loginPsychologist,
  getAllPsychologists,
  getPsychologistById,
  createPsychologist,
  updatePsychologist,
  deletePsychologist,
} = require("../controllers/psychologist");

router.post("/login", loginPsychologist);
router.get("/get", getAllPsychologists);
router.get("/get/:psychologistId", getPsychologistById);
router.post("/createPsychologist", createPsychologist);
router.put("/updatePsychologist/:psychologistId", updatePsychologist);
router.delete("/deletePsychologist/:psychologistId", deletePsychologist);

module.exports = router;
