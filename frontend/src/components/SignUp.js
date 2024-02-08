import React from "react";
import "../App.css";

function SignUp() {
  return (
    <>
      <div
        className="container min-vh-100 d-flex align-items-center justify-content-center"
        id="signup"
      >
        <div className="conatiner shadow-lg  ">
          <h3 className="text-center mt-3 ">
            Sign-Up<hr ></hr>
          </h3>
        <form className="px-5 py-3 mx-3" >
          <div className="mb-4 ">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
              Password : 
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              />
          </div>
          <div className="d-grid  col-6 mx-auto mb-4 text-center">
                <button className="btn btn-warning " type="submit">Submit</button>
            </div>
          
        </form>
              </div>
      </div>
    </>
  );
}

export default SignUp;
