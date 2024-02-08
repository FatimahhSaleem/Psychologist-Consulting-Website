import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div
        className="d-flex align-items-center justify-content-center p-5"
        id="login"
      >
        <div className="m-4 mb-5 conatiner shadow-lg">
          <h3 className="text-center mt-4">
            Login<hr></hr>
          </h3>
          <form className="px-5 py-3 mx-3">
            <div className="mb-4 ">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Email address:
              </label>
              <input
                type="email "
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-5 ">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="*******"
              />
            </div>
            <div class="d-grid mb-3 col-12 mx-auto text-center">
              <button class="btn btn-warning" type="submit">
                Submit
              </button>
              <p className="m-2 fs-6">
                Create a new Account. <Link to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
