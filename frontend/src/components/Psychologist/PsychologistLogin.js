import "../../App.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function PsychologistLogin({ refresh }) {
  const [hide, setHide] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const onChange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHide(true);
    const response = await fetch("http://localhost:5000/psychologist/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (response.status === 200) {
      //saving the auth-token in local-Storage and redirect
      localStorage.setItem("token", json.authToken);
      refresh();
      navigate("/psychologist/home");
    } else {
      console.log(json);
      setHide(false);
      // props.showAlert("Invalid credentials.", "danger");
    }
  };
  return (
    <div className="main">
      <div
        className="d-flex align-items-center justify-content-center p-5 pb-0"
        id="login"
      >
        <div className="m-4 mb-5 conatiner shadow-lg">
          <h3 className="text-center mt-4">
            Psychologist Login<hr></hr>
          </h3>
          <form className="px-5 py-3 mx-3" onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="email" className="form-label fw-bold">
                Email address:
              </label>
              <input
                required
                type="email"
                className="form-control "
                id="email"
                name="email"
                value={credentials.email}
                aria-describedby="email"
                onChange={onChange}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-5 ">
              <label htmlFor="password" className="form-label fw-bold">
                Password:
              </label>
              <input
                required
                placeholder="Enter your password here."
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
              <p hidden={hide} className="m-2 text-danger text-center">
                Invalid credentials
              </p>
            </div>
            <div className="d-grid mb-3 col-12 mx-auto text-center">
              <button className="btn btn-warning" type="submit">
                Submit
              </button>
              <p className="m-2">
                Create a new Account. <Link to="/signup"> Signup</Link>
              </p>
              <p className="m-2 mx-5">
                Login as Client. <Link to="/login"> ClientLogin </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PsychologistLogin;
