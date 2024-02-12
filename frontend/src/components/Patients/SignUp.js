import "../../App.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SignUp() {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [dob, setDob] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHide(true);
    if (password === confirmPass) {
      // console.log(name, phoneNo, email, age, gender, dob);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        password: password,
        email: email,
        phoneNo: phoneNo,
        address: address,
        gender: gender,
        age: age,
        dob: dob,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:5000/patient/createPatient",
        requestOptions
      );
      if (response.status === 200) {
        setShow(true);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    } else {
      setHide(false);
    }
  };
  return (
    <div className="main">
      <div
        className="d-flex align-items-center justify-content-center p-5"
        id="signup"
      >
        <div className="m-3 conatiner shadow-lg">
          <h3 className="text-center mt-4">
            Sign-Up<hr></hr>
          </h3>
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

            <div className="mb-4 ">
              <label htmlFor="date-of-birth" className="form-label fw-bold">
                DOB :
              </label>
              <input
                className="form-control"
                id="date-of-birth"
                placeholder="Enter your date-of-birth."
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-bold">
                Password :
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Enter your Password."
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-5  ">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label fw-bold"
              >
                Confirm Password :
              </label>
              <input
                required
                type="password"
                placeholder="Enter Password again"
                className="form-control"
                id="exampleInputPassword2"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
              />
              <p hidden={hide} className="m-2 text-danger text-center">
                Password and Confirm password doesn't match.
              </p>
            </div>
            <div className="d-grid mb-3 col-12 mx-auto text-center">
              <button className="btn btn-warning" type="submit">
                Submit
              </button>
              <p className="m-2 fs-6">
                Already have an account? <Link to="/login">Login</Link>
              </p>
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
            Account Created
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="text-success fs-4">
            Your Account has been created Successfully.
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
}

export default SignUp;
