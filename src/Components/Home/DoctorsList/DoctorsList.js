import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const DoctorsList = ({doctors}) => {

 const [doctor, setDoctor]=useState([])
console.log(doctor)
 useEffect(()=>{
 //  const pInfo=async()=>{

 //   try{
 //     const getInfo=await axios.get("http://localhost:8000/doctorlist")
 //     setDoctor(getInfo.data)
     
 //    }catch(e){
 //      console.log(new Error("Its not getting"))
 //   } ;
 // }
 // pInfo()

 fetch("http://localhost:8000/doctorlist")
 .then(res=>res.json())
 .then(res=>setDoctor(res))

 },[])


 // const {img, name, cell}=doctor
 return (
  <Col md={4}>

{
 doctor.map((info)=>

<Col md={3} className="float-left">
 <img src={`http://localhost:8000/${info.img}`} alt="img" className="img-fluid"/>
  <div className='text-center pt-3'>
  <h5 >{info.name}</h5>
  <p>{info.email}</p>
  </div>
 </Col>



 )
}




  </Col>
 );
};

export default DoctorsList;