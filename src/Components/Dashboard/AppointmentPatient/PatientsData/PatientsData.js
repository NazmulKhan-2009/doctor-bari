import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PatientsData = () => {

  const [patient, setPatient]=useState([])
console.log(patient)

  
useEffect(()=>{
const pInfo=async()=>{

  try{
    const getInfo=await axios.get("http://localhost:8000/appointments")
    setPatient(getInfo.data)
   }catch(e){
     console.log(new Error("Its not getting"))
  } ;
}
pInfo()
 
},[])


 return (
  <div>
  <h6 className="pb-3">All Patients</h6>
   <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Sr No</th>
        <th scope="col">Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Age</th>
        <th scope="col">Weight</th>
        <th scope="col">Contact</th>
        <th scope="col">email</th>
      </tr>
    </thead>
    <tbody>
    {patient.map((info,index)=>
      <tr >
        <th scope="row">{index+1}</th>
        <td>{info.yourname}</td>
        <td>{info.gender}</td>
        <td>{Math.floor(Math.random()*(100-20+1)+20) }</td>
        <td>{Math.floor(Math.random()*(100-50+1)+50)+" kg" }</td>
        <td>{info.phone}</td>
        <td>{info.email}</td>
       
      </tr>
    )
      
    }
    </tbody>
  </table>
   
  </div>
 );
};

export default PatientsData;