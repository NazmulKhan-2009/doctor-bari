import React from 'react';
import {Container, Row } from 'react-bootstrap';
import { services } from '../../../fakeData';
import ServiceCart from './ServiceCart';

const Services = () => {
 return (
  <div>
   <div className='text-center mt-5'>  
    <h5>Our Services</h5>
    <h1>Services We provide</h1>
   </div> 
  <Container>
   <Row>
    
    {
    services.map((serviceData , index)=><ServiceCart
     key={index}
     serviceData={serviceData}
    />)
   }
    
   </Row>
  </Container>

   

  </div>
 );
};

export default Services;