import React from "react";

const PatientHome = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="shadow m-3 p-4 bg-body-tertiary rounded">
          <h1 className="text-center text-warning">Book Appointements</h1>
          <div className="d-flex justify-content-center">
            <div class="card m-5 " style={{ width: "40rem" }}>
              <div class="card-header bg-warning-subtle">
                <h4>Psychologist Name</h4>
              </div>
              <div class="card-body ">
                <div class="row">
                  <div class="col-4">
                    <h5>Specialization:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Eduation:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Experience:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Gender:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Age:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Fee:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>
                  <div class="col-4">
                    <h5>Timings:</h5>
                  </div>
                  <div class="col-8">
                    <p>Patient name</p>
                  </div>

                  <div class="col-6 ">
                    <input
                      className="form-control"
                      id="date-of-birth"
                      placeholder="Enter your date-of-birth"
                      type="date"
                      aria-label="default input example"
                    />
                  </div>
                  <div class="col-6 ">
                    <input
                      className="form-control"
                      id="date-of-birth"
                      placeholder="Enter your date-of-birth"
                      type="time"
                      aria-label="default input example"
                    />
                  </div>
                  <div class="d-grid gap-2 col-6 my-3 mx-auto">
                    <button class="btn btn-info" type="button">
                      Check Availability
                    </button>
                    <button class="btn btn-warning" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHome;
