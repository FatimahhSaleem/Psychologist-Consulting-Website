const Appointment = require("../models/Appointment");

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
      error: "Internal Server Error: Could not retrieve Appointment.",
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
      error: "Internal Server Error: Could not get the Appointment by Id.",
    });
  }
};

// Create a new Appointment:
const createAppointment = async (req, res) => {
  try {
    // let appointment = await Appointment.findOne({
    //   $or: [{ email: req.body.email }, { phoneNo: parseInt(req.body.phoneNo) }],
    // });
    // if (appointment) {
    //   if (appointment.email === req.body.email) {
    //     return res.status(400).json({
    //       message: "Sorry an Appointment with this email already exists.",
    //     });
    //   }
    //   if (appointment.phoneNo === parseInt(req.body.phoneNo)) {
    //     return res.status(400).json({
    //       message:
    //         "Sorry an Appointment with this phone number already exists.",
    //     });
    //   }
    // }

    const appointment = await Appointment.create({
      patientId: req.body.patientId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      status: req.body.status,
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
    res.status(500).send({
      error: "Internal Server Error: Could not create new Appointment.",
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
      error: "Internal Server Error: Could not update the Appointment by Id.",
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
      error: "Internal Server Error: Could not delete the Appointment.",
    });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
