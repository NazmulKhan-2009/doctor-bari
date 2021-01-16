import React from 'react';

const RecentPatient = () => {
 return (
  <div className="pt-5">
  <h6 className="pb-3">Recent Patients</h6>
   <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Sr No</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Prescription</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
       
      </tr>
      
    </tbody>
  </table>
   
  </div>
 );
};

export default RecentPatient;