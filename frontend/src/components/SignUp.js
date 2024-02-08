import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SignUp() {
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
          <form className="px-5 py-3 mx-3">
            <div className="mb-4 ">
              <label htmlFor="name" className="form-label fw-bold">
                Name :
              </label>
              <input
                className="form-control"
                id="name"
                placeholder="Enter your name"
                type="text"
                aria-label="default input example"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="age" className="form-label fw-bold">
                Age :
              </label>
              <input
                className="form-control"
                id="age"
                placeholder="Enter your age"
                type="number"
                aria-label="default input example"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="address" className="form-label fw-bold">
                Address :
              </label>
              <input
                className="form-control"
                id="address"
                placeholder="Enter your address"
                type="text"
                aria-label="default input example"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="number" className="form-label fw-bold">
                Phone no :
              </label>

              <input
                className="form-control"
                id="number"
                placeholder="Enter your phone no"
                type="number"
                aria-label="default input example"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="date-of-birth" className="form-label fw-bold">
                DOB :
              </label>
              <input
                className="form-control"
                id="date-of-birth"
                placeholder="Enter your date-of-birth"
                type="date"
                aria-label="default input example"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold pe-2">Gender : </label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="maleRadio"
                  value="male"
                  
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
                  
                />
                <label className="form-check-label" htmlFor="otherRadio">
                  Other
                </label>
              </div>
            </div>

            <div className="mb-4 ">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Email address :
              </label>
              <input
                type="email "
                className="form-control "
                placeholder="example@gmail.com"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4  ">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-5  ">
              <label htmlFor="exampleInputPassword2" className="form-label fw-bold">
                Confirm Password :
              </label>
              <input
                type="password"
                placeholder="Enter Password again"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>

            <div className="d-grid mb-3 col-12 mx-auto text-center">
              <button className="btn btn-warning" type="submit">
                Submit
              </button>
              <p className="m-2 fs-6">
                Already have an account?<Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
