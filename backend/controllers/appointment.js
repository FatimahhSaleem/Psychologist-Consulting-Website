const Appointment = require("../models/Appointment");
const Psychologist = require("../models/Psychologist");

// Check Availability for a booking slot.
const checkAvailability = async (req, res) => {
  try {
    console.log("request:", req.body);
    const appointment = await Appointment.findOne({
      $and: [
        { date: req.body.date },
        { startTime: req.body.startTime },
        { endTime: req.body.endTime },
      ],
    });
    if (appointment) {
      res.status(200).json({ available: false });
    } else {
      res.status(200).json({ available: true });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: error,
    });
  }
};

//Get All Appointments:
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    if (appointments.length) {
      res.status(200).json(appointments);
    } else {
      res.status(404).json({ message: "There isn't any Appointment yet." });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: error,
    });
  }
};

// Get Appointment By Patient Id :
const getAppointmentByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const appointments = await Appointment.find({ patientId });

    if (appointments.length) {
      return res.status(200).send(appointments);
    }
    return res
      .status(404)
      .send("There isn't any Appointment of this patient yet.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: error,
    });
  }
};
// Get Appointment By Id:
const getAppointmentById = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findById(appointmentId);

    if (appointment) {
      return res.status(200).send(appointment);
    }
    return res
      .status(404)
      .send("There isn't any Appointment of this Id exist.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      error: error,
    });
  }
};

// Create a new Appointment:
const createAppointment = async (req, res) => {
  try {
    const psychologist = await Psychologist.find();

    const appointment = await Appointment.create({
      patientId: req.body.patientId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      fee: psychologist[0].fee,
    });
    if (appointment) {
      return res
        .status(200)
        .json({ message: "Appointment created successfully." });
    }
    return res.status(500).json({
      message: "Something went wrong: Could not create new Appointment.",
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).send({
      error: error,
    });
  }
};

// Update a Appointment:
const updateAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    // if (req.body.email || req.body.phoneNo) {
    //   const appointment = await Appointment.findOne({
    //     $or: [{ email: req.body.email }, { phoneNo: req.body.phoneNo }],
    //   });
    //   if (appointment && appointment.id !== appointmentId) {
    //     if (appointment.email === req.body.email) {
    //       return res.status(400).json({
    //         message: "Sorry a psychologist with this email already exists.",
    //       });
    //     }
    //     if (appointment.phoneNo === req.body.phoneNo) {
    //       return res.status(400).json({
    //         message:
    //           "Sorry a psychologist with this phone number already exists.",
    //       });
    //     }
    //   }
    // }

    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      req.body
    );

    if (appointment) {
      return res.status(200).json({
        message: "Appointment updated successfully.",
      });
    }
    return res
      .status(404)
      .json({ message: "There isn't any Appointment of this Id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error,
    });
  }
};

// Delete a Appointment:
const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    if (appointment) {
      return res.status(200).json({
        message: "Appointment deleted successfully.",
      });
    }

    return res
      .status(404)
      .json({ message: "There isn't any Appointment of this id exist." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error,
    });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  getAppointmentByPatientId,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  checkAvailability,
};
