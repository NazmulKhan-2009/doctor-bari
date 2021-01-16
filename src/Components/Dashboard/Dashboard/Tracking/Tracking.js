import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Tracking = ({track}) => {

 const {count,appointments,color}=track

 return (
  
   <Col md={2} className="d-flex justify-content-center p-3" style={{backgroundColor:color,borderRadius:'20px'}}>
  
    <h1>{count}</h1>
    <p className="pl-3">{appointments}</p>
   </Col> 
  
  
 );
};

export default Tracking;