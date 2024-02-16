import React from "react";
import { Link } from 'react-router-dom'

const PsychologistHome = () => {
  return (
      
    <>
      
    <div className='container mt-5'>
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1 className='text-center text-warning mb-3'>Appointements</h1>

      <table class="table table-striped border table-hover">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Date & Time</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><Link className="patient-profile" to="/patient-profile" >6823674267384677326832absusd</Link></th>
      <td>13-04-2024  
            09:00
      </td>
      <td>Reject</td>
      <td>
            <div class="d-flex gap-2 ">
                <button class="btn btn-outline-warning  " type="button">Approved</button>
                <button class="btn btn-outline-warning" type="button">Reject</button>
            </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
            <div class="d-flex gap-2">
                <button class="btn btn-outline-warning  " type="button">Approved</button>
                <button class="btn btn-outline-warning" type="button">Reject</button>
            </div>
      </td>
    </tr>
    
  
  </tbody>
</table>
        </div>
    </div>
      </>
  )
};

export default PsychologistHome;




 
