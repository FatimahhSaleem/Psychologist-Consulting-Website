const Psychologist = require("../models/Psychologist");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Psychologist Login
const loginPsychologist = async (req, res) => {
  const { email, password } = req.body;
  try {
    let psychologist = await Psychologist.findOne({ email });
    if (!psychologist) {
      return res.status(401).json({
        error: "Please try to login with correct credentials",
      });
    }
    const passwordCompare = await bcrypt.compare(
      password,
      psychologist.password
    );
    if (!passwordCompare) {
      return res.status(401).json({
        error: "Please try to login with correct credentials",
      });
    }
    const data = {
      id: psychologist.id,
      name: psychologist.name,
      email: psychologist.email,
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET); //returns a promise

    return res.status(200).json({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: "Internal Server Error: Could not login Psychologist.",
    });
  }
};

//Get All Psychologists:
const getAllPsychologists = async (req, res) => {
  try {
    const psychologists = await Psychologist.find();
    if (psychologists.length) {
      res.status(200).json(psychologists);
    } else {
      res.status(404).json({ message: "There isn't any Psychologist yet." });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).send({
      error: "Internal Server Error: Could not retrieve Psychologists.",
    });
  }
};

// Get Psychologist By Id:
const getPsychologistById = async (req, res) => {
  try {
    const { psychologistId } = req.params;
    const psychologist = await Psychologist.findById(psychologistId);

    if (psychologist) {
      return res.status(200).send(psychologist);
    }
    return res
      .status(404)
      .send("There isn't any psychologist of this Id exist.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: "Internal Server Error: Could not get the Psychologist by Id.",
    });
  }
};

// Create a new Psychologist:
const createPsychologist = async (req, res) => {
  try {
    let psychologist = await Psychologist.findOne({
      $or: [{ email: req.body.email }, { phoneNo: parseInt(req.body.phoneNo) }],
    });
    if (psychologist) {
      if (psychologist.email === req.body.email) {
        return res.status(400).json({
          message: "Sorry a psychologist with this email already exists.",
        });
      }
      if (psychologist.phoneNo === parseInt(req.body.phoneNo)) {
        return res.status(400).json({
          message:
            "Sorry a psychologist with this phone number already exists.",
        });
      }
    }

    //hashing and adding salt to the password:
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    psychologist = await Psychologist.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      phoneNo: parseInt(req.body.phoneNo),
      address: req.body.address,
      gender: req.body.gender,
      age: req.body.age,
      dob: req.body.dob,
      education: req.body.education,
      expertise: req.body.expertise,
      experiance: req.body.experiance,
    });

    return res
      .status(200)
      .json({ message: "Psychologist created successfully." });
  } catch (error) {
    console.error(error.message);

    res.status(500).send({
      error: "Internal Server Error: Could not create Psychologist.",
    });
  }
};

// Update a Psychologist:
const updatePsychologist = async (req, res) => {
  try {
    const { psychologistId } = req.params;
    if (req.body.email || req.body.phoneNo) {
      const psychologist = await Psychologist.findOne({
        $or: [{ email: req.body.email }, { phoneNo: req.body.phoneNo }],
      });
      if (psychologist && psychologist.id !== psychologistId) {
        if (psychologist.email === req.body.email) {
          return res.status(400).json({
            message: "Sorry a psychologist with this email already exists.",
          });
        }
        if (psychologist.phoneNo === req.body.phoneNo) {
          return res.status(400).json({
            message:
              "Sorry a psychologist with this phone number already exists.",
          });
        }
      }
    }

    const psychologist = await Psychologist.findByIdAndUpdate(
      psychologistId,
      req.body
    );

    if (psychologist) {
      return res.status(200).json({
        message: "Psychologist updated successfully.",
      });
    }
    return res
      .status(404)
      .json({ message: "There isn't any Psychologist of this Id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal Server Error: Could not update the Psychologist by Id.",
    });
  }
};

// Delete a Psychologist:
const deletePsychologist = async (req, res) => {
  try {
    const { psychologistId } = req.params;

    const psychologist = await Psychologist.findByIdAndDelete(psychologistId);

    if (psychologist) {
      return res.status(200).json({
        message: "Psychologist deleted successfully.",
      });
    }

    return res
      .status(404)
      .json({ message: "There isn't any Psychologist of this id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal Server Error: Could not delete the psychologist.",
    });
  }
};

module.exports = {
  loginPsychologist,
  getAllPsychologists,
  getPsychologistById,
  createPsychologist,
  updatePsychologist,
  deletePsychologist,
};
