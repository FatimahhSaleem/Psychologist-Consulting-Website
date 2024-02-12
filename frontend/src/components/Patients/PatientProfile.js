import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PatientProfile = () => {
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [dob, setDob] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      setId(decoded.id);
      getUser(decoded.id);
    }
  }, []);
  const getUser = async (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/patient/get/${id}`,
      requestOptions
    );
    const json = await response.json();
    setName(json.name);
    setEmail(json.email);
    setPhoneNo(json.phoneNo);
    setGender(json.gender);
    setAge(json.age);
    setAddress(json.address);
    setDob(json.dob);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      phoneNo: phoneNo,
      address: address,
      gender: gender,
      age: age,
      dob: dob,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/patient/updatePatient/${id}`,
      requestOptions
    );
    if (response.status === 200) {
      setShow(true);
      getUser(id);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  };

  return (
    <div className="main">
      <div
        className="d-flex align-items-center justify-content-center  p-5 pb-0"
        id="login"
      >
        <div className="m-4 mb-5 conatiner shadow-lg  p-5">
          <h1 className="mt-2 text-center text-warning">
            My Profile
            <hr
              style={{
                width: "210px",
                border: "3px solid #ffca0a",
                color: "#ffca0a",
              }}
              className="mx-auto shadow-lg"
            />
          </h1>
          <div className="text-center">
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              width="200"
              height="180"
              className="rounded-circle mx-auto"
              alt="Profile Pic"
            />
          </div>
          <form className="px-5 py-3 mx-3" onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="name" className="form-label fw-bold">
                Name :
              </label>
              <input
                required
                className="form-control"
                id="name"
                placeholder="Enter your name."
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="email" className="form-label fw-bold">
                Email address :
              </label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="example@gmail.com"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="phoneNo" className="form-label fw-bold">
                Phone No :
              </label>
              <input
                required
                className="form-control"
                id="phoneNo"
                placeholder="Enter your phone number."
                type="number"
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="age" className="form-label fw-bold">
                Age :
              </label>
              <input
                className="form-control"
                id="age"
                placeholder="Enter your age."
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold pe-2">Gender :</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="maleRadio"
                  value="male"
                  checked={gender === "male"}
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="maleRadio">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="femaleRadio"
                  value="female"
                  checked={gender === "female"}
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="femaleRadio">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="otherRadio"
                  value="other"
                  checked={gender === "other"}
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="otherRadio">
                  Other
                </label>
              </div>
            </div>

            <div className="mb-4 ">
              <label htmlFor="address" className="form-label fw-bold">
                Address :
              </label>
              <input
                className="form-control"
                id="address"
                placeholder="Enter your address."
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="date-of-birth" className="form-label fw-bold">
                DOB :
              </label>
              <input
                className="form-control"
                id="date-of-birth"
                placeholder="Enter your date-of-birth."
                type="date"
                value={dob && new Date(dob).toISOString().split("T")[0]}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>

            <div className="d-grid mb-3 col-12 mx-auto text-center mt-3">
              <button className="btn btn-warning" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-center"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter "
            className="fw-bold text-center fs-3"
          >
            Update Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="text-success fs-4">
            Your Profile has been updated Successfully.
          </div>
          <Button
            variant="outline-danger shadow-lg fs-5 fw-bold px-3 my-3"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PatientProfile;
