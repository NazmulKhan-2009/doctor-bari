import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import MyCalendar from '../../Appointment/GetAppointment/Calendar/Calendar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const AppointmentDashboard = () => {

  const [user, setUser ]=useContext(UserContext)
  const [selectDate, setSelectDate]=useState(new Date())
  const [appointments, setAppointments]=useState([])

  console.log(`${user.email} & ${selectDate.toDateString()}`)

  const handleDate=(date)=>{
    setSelectDate(date)
  }

  useEffect(()=>{
    const userInfo={
      email:user.email,date:selectDate.toDateString()
    }
    fetch(`http://localhost:8000/appointmentbydate`,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userInfo)

    }).then(res=>
      res.json()
    ).then(result=>setAppointments(result))

  }, [selectDate])

 return (
  
   <section>
  <Container fluid>
    <Row className='' >
      <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
        <Sidebar/>
      </Col>
      
      
     
      <Col md={10} className='d-flex flex-column justify-content-around dashboard_right' style={{backgroundColor:'#F4FDFB'}}> 
        <div>
          <h4>APPOINTMENTING</h4>
        </div>

          <Row className='d-flex flex-row justify-content-center'>
          
            <Col md={5} className='my_cal'>
              <MyCalendar
                handleDate={handleDate}
                value={selectDate}
                
              />
            </Col>

            <Col md={5}>
              <div className="d-flex justify-content-between">              
                  <h5>Appointment</h5>         
                  <p>{selectDate.toDateString()}</p>             
              </div> 

              <div>
                <AppointmentByDate 
                  appointments={appointments}
                />
                  
              </div>
           </Col>
        </Row>

      
      
      </Col>
      
      
        
      
    </Row>
   
   </Container>
   </section> 
   
  
 );
};

export default AppointmentDashboard;