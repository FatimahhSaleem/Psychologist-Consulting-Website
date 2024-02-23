import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      getAppointments(decoded.id);
    }
  }, []);
  const getAppointments = async (patientId) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/appointment/getPatientAppointment/${patientId}`,
      requestOptions
    );
    const json = await response.json();
    setAppointments(json);
    console.log(json);
  };
  return (
    <div className="main">
      <div className="container-fluid bg-secondary p-5 100vh">
        <div className="container w-75 justify-content-center shadow-lg p-5 bg-light rounded">
          <h1 className="text-warning text-center">My Appointments</h1>

          {appointments?.map((appointment, index) => {
            return (
              <div className="mt-5 d-flex justify-content-center">
                <table class="table table-bordered border-warning border-3 table-info table-striped">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        Appointment No:
                      </th>
                      <th scope="col">Date</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-center">
                        {index + 1}
                      </th>
                      <td>{appointment.date.split("T")[0]}</td>
                      <td>{appointment.fee} Rs</td>
                      <td>{appointment.startTime}</td>
                      <td>{appointment.endTime}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
