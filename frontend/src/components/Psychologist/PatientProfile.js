import React from "react";

const PatientProfile = () => {
  return (
    <>
      <div
        className="container-fluid bg-secondary p-3 patient-profile "
        style={{ height: "100vh" }}
      >
        <div className="container justify-content-center shadow p-5 bg-light  rounded">
          <h1 className="text-warning text-center ">Patient Profile</h1>

          <div class="p-4 m-5 bg-warning-subtle bg-opacity-10 mt-5 border border-warning  rounded">

            <div class="row">
              <div class="col-4">
                <h5>Name:</h5>
              </div>
              <div class="col-8">
                <p>Patient name</p>
              </div>
              <div class="col-4">
                <h5>Age:</h5>
              </div>
              <div class="col-8">
                <p>Patient Age</p>
              </div>
              <div class="col-4">
                <h5>Address:</h5>
              </div>
              <div class="col-8">
                <p>Patient Address</p>
              </div>
              <div class="col-4">
                <h5>Date Of Birth:</h5>
              </div>
              <div class="col-8">
                <p>Patient DOB</p>
              </div>
              <div class="col-4">
                <h5>Phone no:</h5>
              </div>
              <div class="col-8">
                <p>Patient phone no</p>
              </div>
              <div class="col-4">
                <h5>Gender:</h5>
              </div>
              <div class="col-8">
                <p>Patient gender</p>
              </div>
              <div class="col-4">
                <h5>Appointement  Time:</h5>
              </div>
              <div class="col-8">
                <p className="text-danger">Patient appointment time</p>
              </div>
            </div>
 

          </div>
        </div>
      </div>
    </>
  );
}

export default PatientProfile;
