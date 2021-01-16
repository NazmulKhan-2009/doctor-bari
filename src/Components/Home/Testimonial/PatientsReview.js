import React from 'react';
import { Col } from 'react-bootstrap';

const PatientsReview = ({commentsInfo}) => {

 const {comments,img,name,place}=commentsInfo

 return (

  <Col md={4} className='ml-3 p-4' style={{border:'1px solid lightgray'}}>
  <p>{comments}</p>

  <div className='d-flex justify-content-center'>
   <img src={img} alt=""/>
   <div className='p-3'>
   <h6>{name}</h6>
   <p>{place}</p>
   </div> 
  </div>

  </Col>
  
 );
};

export default PatientsReview;