import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PatientProfile = () => {
  const { patientId } = useParams();
  const [patient, setPatient] = useState();
  useEffect(() => {
    const getPatient = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        `http://localhost:5000/patient/get/${patientId}`,
        requestOptions
      );
      const json = await response.json();
      setPatient(json);
      console.log(json);
    };
    getPatient();
  }, []);
  return (
    <div className="main">
      <div className="main container-fluid bg-secondary p-5">
        <div className="container w-75 justify-content-center shadow-lg p-5 bg-light rounded">
          <h1 className="text-warning text-center">Patient Profile</h1>



          <table className="table border  table-bordered border-warning border-3 rounded table-striped ">
                
                <tbody>
                 
                  <tr>
                    <th scope="row">Name:</th>
                    <td>{patient?.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Age:</th>
                    <td>{patient?.age}</td>
                  </tr>

                  <tr>
                    <th scope="row">Gender:</th>
                    <td>{patient?.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email:</th>
                    <td>{patient?.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date Of Birth:</th>
                    <td>{patient?.dob.split("T")[0]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone no:</th>
                    <td>{patient?.phoneNo}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="flex-wrap">Address:</th>
                    <td>{patient?.address}</td>
                  </tr>
                 
                </tbody>
              </table>
          
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
