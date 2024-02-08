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
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Email address :
              </label>
              <input
                type="email "
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-5  ">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="d-grid mb-3 col-12 mx-auto text-center">
              <button class="btn btn-warning" type="submit">
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
