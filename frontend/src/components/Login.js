import React from "react";
import "../App.css";

function Login() {
  return (
    <>
      <div
        className="container min-vh-100 d-flex align-items-center justify-content-center"
        id="login" 
      >
        <div className="conatiner shadow-lg  ">
          <h3 className="text-center mt-3 ">
            Login Form<hr ></hr>
          </h3>
        <form className="px-5 py-3 mx-3" >
          <div className="mb-4 ">
            <label for="exampleInputEmail1" className="form-label">
              Email address: 
            </label>
            <input 
              type="email "
              className="form-control "
              id="exampleInputEmail1"
              
              aria-describedby="emailHelp"
              />
            
          </div>
          <div className="mb-5 ">
            <label for="exampleInputPassword1" className="form-label">
              Password: 
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              />
          </div>
          <div class="d-grid mb-3 col-12 mx-auto text-center">
                <button class="btn btn-warning" type="submit">Submit</button>
                <a className="mt-2" href="/login">Already have an account?</a>
                
            </div>
          
        </form>
              </div>
      </div>
    </>
  );
}

export default Login;
