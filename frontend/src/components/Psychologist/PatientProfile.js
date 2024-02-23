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

          <div class="p-5 m-5 bg-warning-subtle bg-opacity-10 mt-5 border border-warning rounded">
            <div class="row">
              <div className="col-4">
                <h5>
                  <b>Name :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.name}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Age :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.age}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Gender :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.gender}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Address :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.address}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Email :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.email}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Phone No :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.phoneNo}</h5>
              </div>
              <div className="col-4">
                <h5>
                  <b>Date Of Birth :</b>
                </h5>
              </div>
              <div className="col-8">
                <h5>{patient?.dob.split("T")[0]}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
