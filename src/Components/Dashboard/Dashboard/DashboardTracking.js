import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { trackAppointment } from '../../../fakeData';
import Sidebar from '../Sidebar/Sidebar';
import RecentPatient from './RecentPatient/RecentPatient';
import Tracking from './Tracking/Tracking';

const DashboardTracking = () => {
const [count, setCount]=useState([])
//total appointment
console.log(count.length)
//todays Count
const tarikh=new Date().toDateString()
const todayApp=count.filter(info=>info.appointmentDate===tarikh)
console.log(todayApp.length)
useEffect(()=>{
    const pInfo=async()=>{
    
      try{
        const getInfo=await axios.get("http://localhost:8000/appointments")
        setCount(getInfo.data)
       }catch(e){
         console.log(new Error("Its not getting"))
      } ;
    }
    pInfo()
     
    },[])


   const trackAppointment=[
      {
          count:0,
          appointments:"Pending Appoitmnet",
          color:"#F1536E"
      },
      {
          count:todayApp.length,
          appointments:"Todays Appointment",
          color:"#3DA5F4"
      },
      {
          count:count.length,
          appointments:"Total Appoitmnet",
          color:"#00C689"
      },
      {
          count:0,
          appointments:"Total Patients seen",
          color:"#FDA006"
      },
      ]

 return (
  
  <Container fluid>
   <Row>

     <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
        <Sidebar/>
     </Col>

     <Col md={10} >
     <h6>Dashboard</h6>

     <div className="d-flex justify-content-between pt-5">
        {
         trackAppointment.map((track,index)=><Tracking 
          key={index}
          track={track}
         />)
        }
       </div>  

       <div>
        
        <RecentPatient/>

       </div>
      
     </Col>

     
     
   </Row>
  </Container>

 );
};

export default DashboardTracking;