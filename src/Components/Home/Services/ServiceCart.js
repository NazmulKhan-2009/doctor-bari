import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ServiceCart = ({serviceData}) => {
 const {icon, title, detail}=serviceData

 return (
  
   <Col md={4} xs={12} className='text-center mt-5'>
     <div>
      <img src={icon} alt=""/>
     </div>
   
     <div className='pt-5'>
      <h5>{title}</h5>
      <p>{detail}</p>
     </div>

   </Col>
  
 );
};

export default ServiceCart;