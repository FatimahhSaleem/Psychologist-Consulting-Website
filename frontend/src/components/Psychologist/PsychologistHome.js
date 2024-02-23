import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PsychologistHome = () => {
  const [appointments, setAppointments] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getAppointments = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:5000/appointment/get",
        requestOptions
      );
      const json = await response.json();
      setAppointments(json);
    };
    getAppointments();
  }, []);
  return (
    <div className="main">
      <div className="container p-5">
        <div className="shadow-lg p-5 bg-body-tertiary rounded">
          <h1 className="text-center text-warning mb-5">Appointements</h1>

          <table className="shadow-sm table table-striped border table-hover align-middle">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #No
                </th>
                <th scope="col">PatientId</th>
                <th scope="col">Date</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Patient Profile</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="text-center">
                      {index + 1}
                    </th>
                    <td>{appointment.patientId}</td>
                    <td>{appointment.date?.split("T")[0]}</td>
                    <td>{appointment.startTime}</td>
                    <td>{appointment.endTime}</td>
                    <td>
                      <div>
                        <button
                          className="btn btn-outline-warning shadow-sm"
                          type="button"
                          onClick={() => {
                            navigate(
                              `/psychologist/patientProfile/${appointment.patientId}`
                            );
                          }}
                        >
                          Patient Profile
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PsychologistHome;
