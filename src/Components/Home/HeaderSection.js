
import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import chair from '../../../src/images/chair.png';
import {
 Link
 
} from "react-router-dom";
import { UserContext } from '../../App';
const HeaderSection = () => {
 
 const [appDate]=useContext(UserContext)

 

 return (
  <Container  className='pt-5 d-flex justify-content-center'>
   <Row>
    <Col xs={10} md={4} className='mb-5'>
    
     <h4>Your New Smile <br/> Starts Here</h4>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, architecto ullam rem doloribus excepturi voluptatum? Vitae animi praesentium recusandae molestias?</p>
     <Link to="/appointment"><Button>Get Appointment</Button></Link>

    </Col>
    <Col xs={10} md={6} className='offset-md-2 '>
     <img src={chair} alt="" className='img-fluid' />
    </Col>
   </Row>
  </Container>
 );
};

export default HeaderSection;