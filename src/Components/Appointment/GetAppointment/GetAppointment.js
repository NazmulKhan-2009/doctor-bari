import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyCalendar from './Calendar/Calendar';
import chair from '../../../images/chair.png'
import { UserContext } from '../../../App';

const GetAppointment = ({handleDate}) => {

 // const [selectDate,setSelectDate]=useState(new Date())
 // // const [selectDate,setSelectDate]=useContext(UserContext)

 // const handleDate=(date)=>{
 //  setSelectDate(date)
 // }

 return (
  <Container  className='pt-5 d-flex justify-content-center'>
  <Row>
  {/* <h1>{selectDate.toDateString()}</h1> */}
   <Col xs={10} md={5} className='mb-5'>
    <h1 className='pb-3'>Appointment</h1>
    
    <MyCalendar
     handleDate={handleDate}
     value={new Date()}

    />

   </Col>
   <Col xs={10} md={6} className='offset-md-1 '>
    <img src={chair} alt="img" className='img-fluid' />
   </Col>
  </Row>
 </Container>
 );
};

export default GetAppointment;