const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Patient Login
const loginPatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    let patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(401).json({
        error: "Please try to login with correct credentials",
      });
    }
    const passwordCompare = await bcrypt.compare(password, patient.password);
    if (!passwordCompare) {
      return res.status(401).json({
        error: "Please try to login with correct credentials",
      });
    }
    const data = {
      id: patient.id,
      name: patient.name,
      email: patient.email,
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET); //returns a promise

    return res.status(200).json({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: "Internal Server Error: Could not login User.",
    });
  }
};

//Get All Patients:
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    if (patients.length) {
      res.status(200).json(patients);
    } else {
      res.status(404).json({ message: "There isn't any Patients yet." });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).send({
      error: "Internal Server Error: Could not retrieve Patients.",
    });
  }
};

// Get Patient By Id:
const getPatientById = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findById(patientId);

    if (patient) {
      return res.status(200).send(patient);
    }
    return res.status(404).send("There isn't any patient of this Id exist.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: "Internal Server Error: Could not get the Patient by Id.",
    });
  }
};

// Create a new Patient:
const createPatient = async (req, res) => {
  try {
    let patient = await Patient.findOne({
      $or: [{ email: req.body.email }, { phoneNo: parseInt(req.body.phoneNo) }],
    });
    if (patient) {
      if (patient.email === req.body.email) {
        return res
          .status(400)
          .json({ message: "Sorry a patient with this email already exists." });
      }
      if (patient.phoneNo === parseInt(req.body.phoneNo)) {
        return res.status(400).json({
          message: "Sorry a patient with this phone number already exists.",
        });
      }
    }

    //hashing and adding salt to the password:
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    patient = await Patient.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      phoneNo: parseInt(req.body.phoneNo),
      address: req.body.address,
      gender: req.body.gender,
      age: req.body.age,
      dob: req.body.dob,
    });

    return res.status(200).json({ message: "Patient created successfully." });
  } catch (error) {
    console.error(error.message);

    res.status(500).send({
      error: "Internal Server Error: Could not create Patient.",
    });
  }
};

// Update a Patient:
const updatePatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    if (req.body.email || req.body.phoneNo) {
      const patient = await Patient.findOne({
        $or: [{ email: req.body.email }, { phoneNo: req.body.phoneNo }],
      });
      if (patient && patient.id !== patientId) {
        if (patient.email === req.body.email) {
          return res.status(400).json({
            message: "Sorry a patient with this email already exists.",
          });
        }
        if (patient.phoneNo === req.body.phoneNo) {
          return res.status(400).json({
            message: "Sorry a patient with this phone number already exists.",
          });
        }
      }
    }

    const patient = await Patient.findByIdAndUpdate(patientId, req.body);

    if (patient) {
      return res.status(200).json({
        message: "Patient updated successfully.",
      });
    }
    return res
      .status(404)
      .json({ message: "There isn't any Patient of this Id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal Server Error: Could not update the patient by Id.",
    });
  }
};

// Delete a Patient:
const deletePatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await Patient.findByIdAndDelete(patientId);

    if (patient) {
      return res.status(200).json({
        message: "Patient deleted successfully.",
      });
    }

    return res
      .status(404)
      .json({ message: "There isn't any Patient of this id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal Server Error: Could not delete the patient.",
    });
  }
};

module.exports = {
  loginPatient,
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
