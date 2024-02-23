import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { jwtDecode } from "jwt-decode";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
const day = String(today.getDate()).padStart(2, "0");

const PatientHome = () => {
  const [patientId, setPatientId] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentTime, setAppointmentTime] = useState();
  const [available, setAvailable] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [education, setEducation] = useState();
  const [experiance, setExperiance] = useState();
  const [expertise, setExpertise] = useState();
  const [fee, setFee] = useState();
  const [timings, setTimings] = useState();

  const [notAvailable, setNotAvailable] = useState(false);
  const [booking, setBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    getPsychologist();
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      setPatientId(decoded.id);
    }
  }, []);

  const getPsychologist = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/psychologist/get`,
      requestOptions
    );
    const json = await response.json();
    const psychologist = json[0];
    console.log(psychologist);
    setName(psychologist.name);
    setEmail(psychologist.email);
    setPhoneNo(psychologist.phoneNo);
    setGender(psychologist.gender);
    setAge(psychologist.age);
    setAddress(psychologist.address);
    setEducation(psychologist.education);
    setExperiance(psychologist.experiance);
    setExpertise(psychologist.expertise);
    setFee(psychologist.fee);
    setTimings(psychologist.timing);
  };

  const checkAvailability = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      date: appointmentDate,
      startTime: startTime,
      endTime: endTime,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:5000/appointment/checkAvailability",
      requestOptions
    );
    const json = await response.json();
    if (json.available) {
      setAvailable(true);
    } else {
      setNotAvailable(true);
      setAvailable(false);
    }
  };

  const bookAppointment = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      patientId: patientId,
      date: appointmentDate,
      startTime: startTime,
      endTime: endTime,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:5000/appointment/createAppointment",
      requestOptions
    );
    if (response.status === 200) {
      setBookingSuccess(true);
      setAvailable(false);
    }
  };

  return (
    <div className="main">
      <div className="container p-5">
        <div className="shadow p-5 bg-body-tertiary rounded">
          <h1 className="text-center text-warning fw-bold">
            Welcome to Virtual Therapy
          </h1>
          <div className="d-flex justify-content-center">
            <div className="card m-5" style={{ width: "40rem" }}>
              <div className="card-header bg-warning-subtle text-center">
                <h3 className="mt-2">Psychologist Profile</h3>
              </div>

              <div className="card-body mx-4">
                <div className="row">
                  <div className="col-4">
                    <h5>
                      <b>Name :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{name}</h5>
                  </div>

                  <div className="col-4">
                    <h5>
                      <b>Email :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{email}</h5>
                  </div>

                  <div className="col-4">
                    <h5>
                      <b>Phone No :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{phoneNo}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Gender :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{gender}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Age :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{age}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Address :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{address}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Education :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{education}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Experiance :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{experiance}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Expertise :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{expertise}</h5>
                  </div>
                  <div className="col-4">
                    <h5>
                      <b>Fee :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{fee}Rs</h5>
                  </div>

                  <div className="col-4">
                    <h5>
                      <b>Timings :</b>
                    </h5>
                  </div>
                  <div className="col-8">
                    <h5>{timings}</h5>
                  </div>

                  <hr />

                  <div className="col-6 my-4">
                    <input
                      placeholder="Select appointment date."
                      className="form-control"
                      id="appointmentDate"
                      type="date"
                      min={`${year}-${month}-${day}`}
                      max={`${year + 1}-${month}-${day}`}
                      onChange={(e) => {
                        setAppointmentDate(e.target.value);
                        setAvailable(false);
                      }}
                    />
                  </div>

                  <div className="col-6 text-center my-4">
                    <Dropdown>
                      <Dropdown.Toggle variant="warning" id="appointmentTime">
                        {appointmentTime
                          ? appointmentTime
                          : "Select Appointment Time"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={(e) => {
                            setAppointmentTime("8 to 9 AM");
                            setAvailable(false);
                            setStartTime("8:00 AM");
                            setEndTime("9:00 AM");
                          }}
                        >
                          "8 to 9 AM"
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            setAppointmentTime("10 to 11 AM");
                            setAvailable(false);
                            setStartTime("10:00 AM");
                            setEndTime("11:00 AM");
                          }}
                        >
                          "10 to 11 AM"
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            setAppointmentTime("12 to 1 PM");
                            setAvailable(false);
                            setStartTime("12:00 PM");
                            setEndTime("1:00 PM");
                          }}
                        >
                          "12 to 1 PM"
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            setAppointmentTime("2 to 3 PM");
                            setAvailable(false);
                            setStartTime("2:00 PM");
                            setEndTime("3:00 PM");
                          }}
                        >
                          "2 to 3 PM"
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={(e) => {
                            setAppointmentTime("4 to 5 PM");
                            setAvailable(false);
                            setStartTime("4:00 PM");
                            setEndTime("5:00 PM");
                          }}
                        >
                          "4 to 5 PM"
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="d-grid gap-2 col-6 m-4 mx-auto">
                    <button
                      onClick={checkAvailability}
                      className="btn btn-info"
                      type="button"
                      disabled={
                        !appointmentTime || !appointmentDate || available
                      }
                    >
                      {available ? "Available" : "Check Availability"}
                    </button>
                    <button
                      onClick={() => {
                        setBooking(true);
                      }}
                      className="btn btn-success"
                      type="button"
                      disabled={!available}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Check Availability */}
        <Modal
          show={notAvailable}
          onHide={() => {
            setNotAvailable(false);
          }}
          centered
          className="text-center"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fw-bold text-center fs-3"
            >
              Check Availability
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-danger fs-3">
              Sorry! this appointment slot is not available. Please book another
              slot.
            </div>
            <Button
              variant="outline-warning shadow-lg fs-5 fw-bold px-4 my-4 mx-2"
              onClick={() => {
                setNotAvailable(false);
              }}
            >
              Okay
            </Button>
          </Modal.Body>
        </Modal>

        {/* Confirm Booking */}
        <Modal
          show={booking}
          onHide={() => {
            setBooking(false);
          }}
          centered
          className="text-center"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fw-bold text-center fs-3"
            >
              Book Appointment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-danger fs-3">
              Are you sure? <br />
              This booking apointment cannot be cancelled.
            </div>
            <Button
              variant="outline-warning shadow-lg fs-5 fw-bold px-3 my-4 mx-2"
              onClick={() => {
                setBooking(false);
                bookAppointment();
              }}
            >
              Book Appointment
            </Button>
            <Button
              variant="outline-secondary shadow-lg fs-5 fw-bold px-3 my-4 mx-2"
              onClick={() => {
                setBooking(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Body>
        </Modal>

        {/* Appointment booked successfully */}
        <Modal
          show={bookingSuccess}
          onHide={() => {
            setBookingSuccess(false);
          }}
          centered
          className="text-center"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fw-bold text-center fs-3"
            >
              Appointment Booked Successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-success fs-3">
              Your Appointment has been booked successfully!
            </div>
            <Button
              variant="outline-warning shadow-lg fs-5 fw-bold px-4 my-4 mx-2"
              onClick={() => {
                setBookingSuccess(false);
              }}
            >
              Okay
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default PatientHome;
