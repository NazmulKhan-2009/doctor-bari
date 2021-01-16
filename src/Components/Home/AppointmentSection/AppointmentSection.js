import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';
import  './AppointmentSection.css';


const AppointmentSection = () => {


 return (
  <Container fluid className='my-appointment mt-5'>
   <Row>
      <Col md={6} xs={6}>
      <div className='cus_img'>
       <img src={doctor} alt="" className='img-fluid'/>
      </div>

      </Col>

      <Col md={6} xs={6} className='mt-5 text-light'>
       <h4>APPOINTMENT</h4>
       <h1>Make an Appointment <br/> Today</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisici Lorem ipsum dolor sit amet.</p>
       <Button variant='dark'>
        Learn Details
       </Button>
       
      </Col>
   </Row>
  </Container>

 );
};

export default AppointmentSection;