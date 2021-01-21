import React from 'react';

const AppointmentByDate = ({appointments}) => {
 return (
  <div>
   <table class="table table-borderless">
     <thead>
       <tr>
         
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
       </tr>
     </thead>
     <tbody>
     {appointments.map(info=>
      <tr>
         
         <td>{info.yourname}</td>
         <td>{info.phone}</td>
         <td>{info.email}</td>
       </tr>
     )}
       
       
     </tbody>
   </table>
   
  </div>
 );
};

export default AppointmentByDate;